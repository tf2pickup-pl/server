import { Injectable, Logger } from '@nestjs/common';
import { GamesService } from './games.service';
import { PlayersService } from '@/players/services/players.service';
import { PlayerConnectionStatus } from '../models/player-connection-status';
import { ConfigService } from '@nestjs/config';
import { GameRuntimeService } from './game-runtime.service';
import { GamesGateway } from '../gateways/games.gateway';
import { QueueGateway } from '@/queue/gateways/queue.gateway';
import { ObjectId } from 'mongodb';

@Injectable()
export class GameEventHandlerService {

  private logger = new Logger(GameEventHandlerService.name);
  private serverCleanupDelay = this.configService.get<number>('serverCleanupDelay');

  constructor(
    private gamesService: GamesService,
    private playersService: PlayersService,
    private configService: ConfigService,
    private gameRuntimeService: GameRuntimeService,
    private gamesGateway: GamesGateway,
    private queueGateway: QueueGateway,
  ) { }

  async onMatchStarted(gameId: ObjectId) {
    const game = await this.gamesService.getById(gameId);
    if (game) {
      // The server sometimes logs match start right after it was ended (probably due to readyup mode bugs).
      // Let's make sure the game does not get marked as started again.
      if (game.state === 'launching') {
        game.state = 'started';
        await game.save();
        this.gamesGateway.emitGameUpdated(game);
      }
    } else {
      this.logger.warn(`no such game: ${gameId}`);
    }
  }

  async onMatchEnded(gameId: ObjectId) {
    const game = await this.gamesService.getById(gameId);
    if (game) {
      game.state = 'ended';
      game.slots.forEach(slot => {
        if (slot.status === 'waiting for substitute') {
          slot.status = 'active';
        }
      });

      await game.save();
      this.gamesGateway.emitGameUpdated(game);
      this.queueGateway.updateSubstituteRequests();
      setTimeout(() => this.gameRuntimeService.cleanupServer(game.gameServer as ObjectId), this.serverCleanupDelay);
    } else {
      this.logger.warn(`no such game: ${gameId}`);
    }
  }

  async onLogsUploaded(gameId: ObjectId, logsUrl: string) {
    const game = await this.gamesService.getById(gameId);
    if (game) {
      game.logsUrl = logsUrl;
      await game.save();
      this.gamesGateway.emitGameUpdated(game);
    } else {
      this.logger.warn(`no such game: ${gameId}`);
    }
  }

  async onPlayerJoining(gameId: ObjectId, steamId: string) {
    await this.setPlayerConnectionStatus(gameId, steamId, 'joining');
  }

  async onPlayerConnected(gameId: ObjectId, steamId: string) {
    await this.setPlayerConnectionStatus(gameId, steamId, 'connected');
  }

  async onPlayerDisconnected(gameId: ObjectId, steamId: string) {
    await this.setPlayerConnectionStatus(gameId, steamId, 'offline');
  }

  async onScoreReported(gameId: ObjectId, teamName: string, score: string) {
    const game = await this.gamesService.getById(gameId);
    if (game) {
      const fixedTeamName = teamName.toLowerCase().substring(0, 3); // converts 'Red' to 'red' and 'Blue' to 'blu'
      game.score = game.score || new Map();
      game.score.set(fixedTeamName, parseInt(score, 10));
      await game.save();
      this.gamesGateway.emitGameUpdated(game);
    } else {
      this.logger.warn(`no such game: ${gameId}`);
    }
  }

  private async setPlayerConnectionStatus(gameId: ObjectId, steamId: string, connectionStatus: PlayerConnectionStatus) {
    const player = await this.playersService.findBySteamId(steamId);
    if (!player) {
      this.logger.warn(`no such player: ${steamId}`);
      return;
    }

    const game = await this.gamesService.getById(gameId);
    if (game) {
      const slot = game.slots.find(s => (s.player as ObjectId).equals(player.id));
      if (slot) {
        slot.connectionStatus = connectionStatus;
        await game.save();
        this.gamesGateway.emitGameUpdated(game);
      } else {
        this.logger.warn(`player ${player.name} does not belong in this game`);
      }
    } else {
      this.logger.warn(`no such game: ${gameId}`);
    }
  }

}
