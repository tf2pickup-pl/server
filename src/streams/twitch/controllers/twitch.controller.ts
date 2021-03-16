import { Controller, Get, Redirect, Query, BadRequestException, Logger } from '@nestjs/common';
import { TwitchService } from '../services/twitch.service';
import { TwitchAuthService } from '../services/twitch-auth.service';
import { PlayersService } from '@/players/services/players.service';
import { AuthService } from '@/auth/services/auth.service';
import { JsonWebTokenError } from 'jsonwebtoken';
import { TwitchTvUser } from '@/players/models/twitch-tv-user';
import { KeyName } from '@/auth/key-name';
import { JwtTokenPurpose } from '@/auth/jwt-token-purpose';

@Controller('twitch')
export class TwitchController {

  private logger = new Logger(TwitchController.name);

  constructor(
    private twitchService: TwitchService,
    private twitchAuthService: TwitchAuthService,
    private playersService: PlayersService,
    private authService: AuthService,
  ) { }

  @Get('auth')
  @Redirect('https://id.twitch.tv/oauth2/authorize')
  async authenticate(@Query('token') token: string) {
    try {
      const { id } = this.authService.verifyToken(JwtTokenPurpose.auth, token);
      const contextToken = await this.authService.generateJwtToken(JwtTokenPurpose.context, id);
      return { url: this.twitchAuthService.getOauthRedirectUrl(contextToken) };
    } catch (e) {
      this.logger.error(e);
      if (e instanceof JsonWebTokenError) {
        throw new BadRequestException(e.message);
      } else {
        throw e;
      }
    }
  }

  @Get('auth/return')
  @Redirect('/logged-in-with-twitch-tv.html')
  async authenticationCallback(@Query('code') code: string, @Query('state') state: string) {
    const { id } = this.authService.verifyToken(JwtTokenPurpose.context, state);
    const token = await this.twitchAuthService.fetchUserAccessToken(code);
    const userProfile = await this.twitchService.fetchUserProfile(token);
    const twitchTvUser: TwitchTvUser = {
      userId: userProfile.id,
      login: userProfile.login,
      displayName: userProfile.display_name,
      profileImageUrl: userProfile.profile_image_url,
    };
    await this.playersService.registerTwitchAccount(id, twitchTvUser);
  }

  @Get('streams')
  getStreams() {
    return this.twitchService.streams;
  }

}
