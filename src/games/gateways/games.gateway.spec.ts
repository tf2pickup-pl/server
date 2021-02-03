import { Test, TestingModule } from '@nestjs/testing';
import { GamesGateway } from './games.gateway';
import { PlayerSubstitutionService } from '../services/player-substitution.service';
import { Events } from '@/events/events';
import { Game } from '../models/game';
import { DocumentType } from '@typegoose/typegoose';
import { Socket } from 'socket.io';
import { AuthorizedWsClient } from '@/auth/ws-client';
import { ObjectId } from 'mongodb';

jest.mock('../services/player-substitution.service');
jest.mock('socket.io');

const mockGame = {
  id: 'FAKE_GAME_ID',
  state: 'launching',
} as DocumentType<Game>;

describe('GamesGateway', () => {
  let gateway: GamesGateway;
  let playerSubstitutionService: jest.Mocked<PlayerSubstitutionService>;
  let events: Events;
  let socket: jest.Mocked<Socket>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesGateway,
        PlayerSubstitutionService,
        Events,
      ],
    }).compile();

    gateway = module.get<GamesGateway>(GamesGateway);
    playerSubstitutionService = module.get(PlayerSubstitutionService);
    events = module.get(Events);
  });

  beforeEach(() => {
    playerSubstitutionService.replacePlayer.mockResolvedValue(mockGame);
    socket = {
      emit: jest.fn(),
    } as any;
  });

  beforeEach(() => {
    gateway.onModuleInit();
    gateway.afterInit(socket);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  describe('#replacePlayer()', () => {
    it('should replace the player', async () => {
      const replacementId = new ObjectId();
      const ret = await gateway.replacePlayer(
        { request: { user: { _id: replacementId, logged_in: true } } } as AuthorizedWsClient,
        { gameId: 'FAKE_GAME_ID', replaceeId: 'FAKE_REPLACEE_ID' },
      );
      expect(playerSubstitutionService.replacePlayer).toHaveBeenCalledWith('FAKE_GAME_ID', 'FAKE_REPLACEE_ID', replacementId.toString());
      expect(ret).toEqual(mockGame as any);
    });
  });

  describe('when the gameCreated event is emitted', () => {
    beforeEach(() => {
      events.gameCreated.next({ game: mockGame });
    });

    it('should emit the created game via the socket', () => {
      expect(socket.emit).toHaveBeenCalledWith('game created', mockGame);
    });
  });

  describe('when the gameChanges event is emitted', () => {
    beforeEach(() => {
      events.gameChanges.next({ game: mockGame });
    });

    it('should emit the created game via the socket', () => {
      expect(socket.emit).toHaveBeenCalledWith('game updated', mockGame);
    });
  });
});
