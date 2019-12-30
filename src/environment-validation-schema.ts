import { object, string, number, any } from '@hapi/joi';

export default object({
  NODE_ENV: string()
    .valid('development', 'production')
    .default('development'),
  API_URL: string().required(),
  CLIENT_URL: string().required(),
  MONGODB_HOST: string().required(),
  MONGODB_PORT: number().required(),
  MONGODB_DB: string().required(),
  MONGODB_USERNAME: any().optional(),
  MONGODB_PASSWORD: any().optional(),
  STEAM_API_KEY: string().required(),
  KEY_STORE_FILE: string().required(),
  KEY_STORE_PASSPHARE: string().required(),
  SUPER_USER: string().required(),
  QUEUE_CONFIG: string()
    .valid('test', '6v6')
    .default('6v6'),
  MUMBLE_SERVER_URL: string().required(),
  MUMBLE_CHANNEL_NAME: string().required(),
  LOG_RELAY_ADDRESS: string().required(),
  LOG_RELAY_PORT: number().required(),
  DISCORD_BOT_TOKEN: any().optional(),
  DISCORD_QUEUE_NOTIFICATIONS_CHANNEL_ID: any().optional(),
  DISCORD_ADMIN_NOTIFICATIONS_CHANNEL_ID: any().optional(),
});
