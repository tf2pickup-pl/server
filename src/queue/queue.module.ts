import { Module, forwardRef } from '@nestjs/common';
import { QueueService } from './services/queue.service';
import { QueueConfigService } from './services/queue-config.service';
import { PlayersModule } from '@/players/players.module';
import { GamesModule } from '@/games/games.module';
import { MapVoteService } from './services/map-vote.service';
import { QueueGateway } from './gateways/queue.gateway';
import { QueueController } from './controllers/queue.controller';
import { QueueNotificationsService } from './services/queue-notifications.service';
import { DiscordModule } from '@/discord/discord.module';
import { AutoGameLauncherService } from './services/auto-game-launcher.service';
import { QueueAnnouncementsService } from './services/queue-announcements.service';
import { FriendsService } from './services/friends.service';
import { Environment } from '@/environment/environment';
import { join } from 'path';
import { readFile } from 'fs';
import { promisify } from 'util';
import { PlayerPopulatorService } from './services/player-populator.service';
import { MapPoolService } from './services/map-pool.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { standardSchemaOptions } from '@/utils/standard-schema-options';
import { Map } from './models/map';

@Module({
  imports: [
    TypegooseModule.forFeature([
      standardSchemaOptions(Map),
    ]),

    forwardRef(() => PlayersModule),
    forwardRef(() => GamesModule),
    DiscordModule,
  ],
  providers: [
    QueueService,
    QueueConfigService,
    MapVoteService,
    QueueGateway,
    QueueNotificationsService,
    AutoGameLauncherService,
    QueueAnnouncementsService,
    FriendsService,
    {
      provide: 'QUEUE_CONFIG_JSON',
      useFactory: async (environment: Environment) => {
        const configFileName = join('configs', 'queue', `${environment.queueConfig}.json`);
        return promisify(readFile)(configFileName, 'utf-8');
      },
      inject: [ Environment ],
    },
    PlayerPopulatorService,
    MapPoolService,
  ],
  exports: [
    QueueService,
    QueueConfigService,
    MapVoteService,
    QueueGateway,
    MapPoolService,
  ],
  controllers: [
    QueueController,
  ],
})
export class QueueModule { }
