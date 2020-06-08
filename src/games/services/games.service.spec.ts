import { Test, TestingModule } from '@nestjs/testing';
import { GamesService } from './games.service';
import { TypegooseModule, getModelToken } from 'nestjs-typegoose';
import { PlayersService } from '@/players/services/players.service';
import { PlayerSkillService } from '@/players/services/player-skill.service';
import { Player } from '@/players/models/player';
import { typegooseTestingModule } from '@/utils/testing-typegoose-module';
import { Game } from '../models/game';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { QueueSlot } from '@/queue/queue-slot';
import { GameLauncherService } from './game-launcher.service';
import { QueueConfigService } from '@/queue/services/queue-config.service';
import { GamesGateway } from '../gateways/games.gateway';
import { cloneDeep } from 'lodash';
import { MongoMemoryServer } from 'mongodb-memory-server';

jest.mock('@/players/services/players.service');
jest.mock('@/players/services/player-skill.service');

class QueueConfigServiceStub {
  queueConfig = {
    classes: [
      { name: 'scout', count: 2 },
      { name: 'soldier', count: 2 },
      { name: 'demoman', count: 1 },
      { name: 'medic', count: 1 },
    ],
    teamCount: 2,
    maps: ['fake_map_1', 'fake_map_2'],
    readyUpTimeout: 1000,
    queueReadyTimeout: 2000,
  };
}

class GameLauncherServiceStub {
  launch(gameId: string) { return null; }
}

class GamesGatewayStub {
  emitGameCreated(game: any) { return null; }
  emitGameUpdated(game: any) { return null; }
}

describe('GamesService', () => {
  let service: GamesService;
  let mongod: MongoMemoryServer;
  let gameModel: ReturnModelType<typeof Game>;
  let gameLauncherService: GameLauncherServiceStub;
  let playersService: PlayersService;

  beforeAll(() => mongod = new MongoMemoryServer());
  afterAll(async () => await mongod.stop());

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        typegooseTestingModule(mongod),
        TypegooseModule.forFeature([Game, Player]),
      ],
      providers: [
        GamesService,
        PlayersService,
        PlayerSkillService,
        { provide: QueueConfigService, useClass: QueueConfigServiceStub },
        { provide: GameLauncherService, useClass: GameLauncherServiceStub },
        { provide: GamesGateway, useClass: GamesGatewayStub },
      ],
    }).compile();

    service = module.get<GamesService>(GamesService);
    gameModel = module.get(getModelToken('Game'));
    gameLauncherService = module.get(GameLauncherService);
    playersService = module.get(PlayersService);
  });

  afterEach(async () => {
    // @ts-expect-error
    await playersService._reset();
    await gameModel.deleteMany({ });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#getGameCount()', () => {
    it('should return document count', async () => {
      const spy = jest.spyOn(gameModel, 'estimatedDocumentCount');
      const ret = await service.getGameCount();
      expect(spy).toHaveBeenCalled();
      expect(ret).toEqual(0);
    });
  });

  describe('#getById()', () => {
    let game: DocumentType<Game>;

    beforeEach(async () => {
      game = await gameModel.create({ number: 1, map: 'cp_badlands', state: 'launching' });
    });

    it('should get the game by its id', async () => {
      const ret = await service.getById(game.id);
      expect(ret.toJSON()).toEqual(game.toJSON());
    });
  });

  describe('#getRunningGames()', () => {
    let launchingGame: DocumentType<Game>;
    let runningGame: DocumentType<Game>;
    let endedGame: DocumentType<Game>;

    beforeEach(async () => {
      launchingGame = await gameModel.create({ number: 1, map: 'cp_badlands', state: 'launching' });
      runningGame = await gameModel.create({ number: 2, map: 'cp_badlands', state: 'started' });
      endedGame = await gameModel.create({ number: 3, map: 'cp_badlands', state: 'ended' });
    });

    it('should get only running games', async () => {
      const ret = await service.getRunningGames();
      expect(ret.length).toEqual(2);
      expect(JSON.stringify(ret)).toEqual(JSON.stringify([ launchingGame, runningGame ]));
    });
  });

  describe('#update()', () => {
    let game: DocumentType<Game>;

    beforeEach(async () => {
      game = await gameModel.create({ number: 1, map: 'cp_badlands', state: 'launching' });
    });

    it('should update existing game', async () => {
      const ret = await service.update(game.id, { state: 'started' });
      expect(ret.state).toEqual('started');
      expect(ret).toEqual(await service.getById(game.id));
    });

    it('should not create a new game in case of missing id', async () => {
      const wrongGameId = new ObjectId();
      const ret = await service.update(wrongGameId.toString(), { state: 'started' });
      expect(ret).toBe(null);
      expect(await service.getById(wrongGameId.toString())).toBe(null);
    });
  });

  describe('#findByAssignedGameServer()', () => {
    let gameServerId: ObjectId;
    let game: DocumentType<Game>;

    beforeEach(async () => {
      gameServerId = new ObjectId();
      game = await gameModel.create({ number: 2, map: 'cp_process_final', state: 'started', gameServer: gameServerId });
    });

    it('should get the last game', async () => {
      const ret = await service.findByAssignedGameServer(gameServerId.toString());
      expect(ret.toJSON()).toEqual(game.toJSON());
    });
  });

  describe('#getPlayerActiveGame()', () => {
    describe('when a player is active in a game', () => {
      let game: DocumentType<Game>;
      let playerId: ObjectId;

      beforeEach(async () => {
        playerId = new ObjectId();
        game = await gameModel.create({
          number: 1,
          map: 'cp_badlands',
          state: 'started',
          players: [ playerId ],
          slots: [
            {
              playerId: playerId.toString(),
              status: 'active',
              gameClass: 'soldier',
              teamId: '1',
            },
          ],
        });
      });

      it('should return that game', async () => {
        const ret = await service.getPlayerActiveGame(playerId.toString());
        expect(ret).toBeTruthy();
        expect(ret.toJSON()).toEqual(game.toJSON());
      });
    });

    describe('when a player is marked as awaitng substitute in a gem', () => {
      let game: DocumentType<Game>;
      let playerId: ObjectId;

      beforeEach(async () => {
        playerId = new ObjectId();
        game = await gameModel.create({
          number: 1,
          map: 'cp_badlands',
          state: 'started',
          players: [ playerId ],
          slots: [
            {
              playerId: playerId.toString(),
              status: 'waiting for substitute',
              gameClass: 'soldier',
              teamId: '1',
            },
          ],
        });
      });

      it('should return that game', async () => {
        const ret = await service.getPlayerActiveGame(playerId.toString());
        expect(ret).toBeTruthy();
        expect(ret.toJSON()).toEqual(game.toJSON());
      });
    });

    describe('when a player has been replaced in a game', () => {
      let playerId: ObjectId;
      let player2Id: ObjectId;

      beforeEach(async () => {
        playerId = new ObjectId();
        player2Id = new ObjectId();

        await  gameModel.create({
          number: 1,
          map: 'cp_badlands',
          state: 'started',
          players: [ playerId ],
          slots: [
            {
              playerId: playerId.toString(),
              status: 'replaced',
              gameClass: 'soldier',
              teamId: '1',
            },
            {
              playerId: player2Id.toString(),
              status: 'active',
              gameClass: 'soldier',
              teamId: '2',
            },
          ],
        });
      });

      it('should not return that game', async () => {
        const ret = await service.getPlayerActiveGame(playerId.toString());
        expect(ret).toBeNull();
      });
    });

    describe('when a player was active in a game that has already been ended', () => {
      let playerId: ObjectId;

      beforeEach(async () => {
        playerId = new ObjectId();
        await  gameModel.create({
          number: 1,
          map: 'cp_badlands',
          state: 'ended',
          players: [ playerId ],
          slots: [
            {
              playerId: playerId.toString(),
              status: 'active',
              gameClass: 'soldier',
              teamId: '1',
            },
          ],
        });
      });

      it('should not return that game', async () => {
        const ret = await service.getPlayerActiveGame(playerId.toString());
        expect(ret).toBeNull();
      });
    });
  });
  describe('#create()', () => {
    let slots: QueueSlot[];

    beforeEach(async () => {
      slots = [
        // @ts-expect-error
        { id: 0, gameClass: 'scout', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 1, gameClass: 'scout', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 2, gameClass: 'scout', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 3, gameClass: 'scout', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 4, gameClass: 'soldier', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 5, gameClass: 'soldier', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 6, gameClass: 'soldier', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 7, gameClass: 'soldier', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 8, gameClass: 'demoman', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 9, gameClass: 'demoman', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 10, gameClass: 'medic', playerId: (await playersService._createOne())._id, ready: true, friend: null },
        // @ts-expect-error
        { id: 11, gameClass: 'medic', playerId: (await playersService._createOne())._id, ready: true, friend: null },
      ] as any;
    });

    describe('when the queue is not full', () => {
      beforeEach(() => {
        slots[3].ready = false;
        slots[3].playerId = null;
      });

      it('should fail', async () => {
        await expect(service.create(slots, 'cp_fake')).rejects.toThrow('queue not full');
      });
    });

    it('should create a game', async () => {
      const game = await service.create(slots, 'cp_fake');
      expect(game.toObject()).toEqual(expect.objectContaining({
        number: 1,
        map: 'cp_fake',
        slots: expect.any(Array),
        players: slots.map(s => s.playerId),
        assignedSkills: expect.any(Object),
        state: 'launching',
        launchedAt: expect.any(Date),
      }));
    });
  });

  describe('#launch()', () => {
    it('should launch the game', async () => {
      const spy = jest.spyOn(gameLauncherService, 'launch');
      await service.launch('FAKE_GAME_ID');
      expect(spy).toHaveBeenCalledWith('FAKE_GAME_ID');
    });
  });

  describe('#getGamesWithSubstitutionRequests()', () => {
    let game: DocumentType<Game>;

    beforeEach(async () => {
      // @ts-expect-error
      const player1 = (await playersService._createOne())._id;
      // @ts-expect-error
      const player2 = (await playersService._createOne())._id;

      game = await gameModel.create({
        number: 1,
        players: [ player1, player2 ],
        slots: [
          {
            playerId: player1.toString(),
            teamId: '1',
            gameClass: 'scout',
            status: 'waiting for substitute',
          },
          {
            playerId: player2.toString(),
            teamId: '2',
            gameClass: 'scout',
            status: 'active',
          },
        ],
        map: 'cp_badlands',
        state: 'launching',
      });
    });

    it('should return games with substitution requests', async () => {
      const ret = await service.getGamesWithSubstitutionRequests();
      expect(ret).toEqual([
        expect.objectContaining({ id: game.id }),
      ]);
    });
  });

  describe('#getOrphanedGames()', () => {
    beforeEach(async () => {
      // @ts-expect-error
      const player = (await playersService._createOne())._id;

      await gameModel.create({
        number: 1,
        players: [ player ],
        slots: [],
        map: 'cp_badlands',
        state: 'launching',
      });

      const gameServer = new ObjectId();
      await gameModel.create({
        number: 2,
        players: [ player ],
        slots: [],
        map: 'cp_badlands',
        state: 'launching',
        gameServer,
      });
    });

    it('should return games that do not have the gameServer property set', async () => {
      const ret = await service.getOrphanedGames();
      expect(ret).toBeTruthy();
      expect(ret.length).toBe(1);
      expect(ret[0].number).toBe(1);
    });
  });
});
