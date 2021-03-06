import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { PlayersModule } from '@/players/players.module';
import { PassportModule } from '@nestjs/passport';
import { SteamStrategy } from './strategies/steam.strategy';
import { AuthController } from './controllers/auth.controller';
import { authenticate } from 'passport';
import { getModelToken, TypegooseModule } from 'nestjs-typegoose';
import { RefreshToken } from './models/refresh-token';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthGateway } from './gateways/auth.gateway';
import { setRedirectUrlCookie } from './middleware/set-redirect-url-cookie';
import { Key } from './models/key';
import { Environment } from '@/environment/environment';
import { ReturnModelType } from '@typegoose/typegoose';
import { importOrGenerateKeys } from './import-or-generate-keys';
import { KeyName } from './key-name';
import { generate } from 'generate-password';

const passportModule = PassportModule.register({
  defaultStrategy: 'jwt',
  session: false,
});

@Module({
  imports: [
    passportModule,
    TypegooseModule.forFeature([RefreshToken, Key]),

    PlayersModule,
  ],
  providers: [
    {
      // keys used to sign & validate auth JWT
      provide: 'AUTH_TOKEN_KEY',
      inject: [getModelToken(Key.name), Environment],
      useFactory: async (
        keyModel: ReturnModelType<typeof Key>,
        environment: Environment,
      ) =>
        await importOrGenerateKeys(
          keyModel,
          KeyName.auth,
          environment.keyStorePassphare,
        ),
    },
    {
      // keys used to sign & validate refresh JWT
      provide: 'REFRESH_TOKEN_KEY',
      inject: [getModelToken(Key.name), Environment],
      useFactory: async (
        keyModel: ReturnModelType<typeof Key>,
        environment: Environment,
      ) =>
        await importOrGenerateKeys(
          keyModel,
          KeyName.refresh,
          environment.keyStorePassphare,
        ),
    },
    {
      provide: 'WEBSOCKET_SECRET',
      useFactory: () =>
        generate({ length: 32, numbers: true, uppercase: true }),
    },
    {
      provide: 'CONTEXT_TOKEN_KEY',
      inject: [getModelToken(Key.name), Environment],
      useFactory: async (
        keyModel: ReturnModelType<typeof Key>,
        environment: Environment,
      ) =>
        await importOrGenerateKeys(
          keyModel,
          KeyName.context,
          environment.keyStorePassphare,
        ),
    },
    AuthService,
    SteamStrategy,
    JwtStrategy,
    AuthGateway,
  ],
  controllers: [AuthController],
  exports: [passportModule, AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(setRedirectUrlCookie, authenticate('steam', { session: false }))
      .forRoutes('/auth/steam');
  }
}
