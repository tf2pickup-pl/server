import { Module, forwardRef } from '@nestjs/common';
import { GamesService } from './services/games.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Game } from './models/game';
import { PlayersModule } from '@/players/players.module';
import { QueueModule } from '@/queue/queue.module';
import { GameServersModule } from '@/game-servers/game-servers.module';
import { standardSchemaOptions } from '@/utils/standard-schema-options';
import { GamesController } from './controllers/games.controller';
import { removeGameAssignedSkills } from '@/utils/tojson-transform';
import { GamesGateway } from './gateways/games.gateway';
import { ServerConfiguratorService } from './services/server-configurator.service';
import { GameEventListenerService } from './services/game-event-listener.service';
import { RconFactoryService } from './services/rcon-factory.service';
import { GameLauncherService } from './services/game-launcher.service';
import { GameRuntimeService } from './services/game-runtime.service';
import { GameEventHandlerService } from './services/game-event-handler.service';
import { GamesWithSubstitutionRequestsController } from './controllers/games-with-substitution-requests.controller';
import { PlayerSubstitutionService } from './services/player-substitution.service';
import { ConfigurationModule } from '@/configuration/configuration.module';
import { LogReceiverModule } from '@/log-receiver/log-receiver.module';

@Module({
  imports: [
    TypegooseModule.forFeature([
      standardSchemaOptions(Game, removeGameAssignedSkills),
    ]),
    GameServersModule,
    forwardRef(() => PlayersModule),
    QueueModule,

    ConfigurationModule,
    LogReceiverModule,
  ],
  providers: [
    GamesService,
    GamesGateway,
    ServerConfiguratorService,
    GameEventListenerService,
    RconFactoryService,
    GameLauncherService,
    GameRuntimeService,
    GameEventHandlerService,
    PlayerSubstitutionService,
  ],
  exports: [GamesService],
  controllers: [GamesController, GamesWithSubstitutionRequestsController],
})
export class GamesModule {}
