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
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Tf2Team } from '../models/tf2-team';

jest.mock('@/players/services/players.service');
jest.mock('@/players/services/player-skill.service');
jest.mock('./game-launcher.service');
jest.mock('../gateways/games.gateway');

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

describe('GamesService', () => {
  let service: GamesService;
  let mongod: MongoMemoryServer;
  let gameModel: ReturnModelType<typeof Game>;
  let gameLauncherService: GameLauncherService;
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
        GameLauncherService,
        GamesGateway,
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
      game = await gameModel.create({ number: 1, map: 'cp_badlands', state: 'launching', slots: [] });
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
      launchingGame = await gameModel.create({ number: 1, map: 'cp_badlands', state: 'launching', slots: [] });
      runningGame = await gameModel.create({ number: 2, map: 'cp_badlands', state: 'started', slots: [] });
      endedGame = await gameModel.create({ number: 3, map: 'cp_badlands', state: 'ended', slots: [] });
    });

    it('should get only running games', async () => {
      const ret = await service.getRunningGames();
      expect(ret.length).toEqual(2);
      expect(JSON.stringify(ret)).toEqual(JSON.stringify([ launchingGame, runningGame ]));
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
          slots: [
            {
              player: playerId,
              status: 'active',
              gameClass: 'soldier',
              team: Tf2Team.Blu,
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

    describe('when a player is marked as awaitng substitute in a game', () => {
      let game: DocumentType<Game>;
      let playerId: ObjectId;

      beforeEach(async () => {
        playerId = new ObjectId();
        game = await gameModel.create({
          number: 1,
          map: 'cp_badlands',
          state: 'started',
          slots: [
            {
              player: playerId,
              status: 'waiting for substitute',
              gameClass: 'soldier',
              team: Tf2Team.Blu,
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
          slots: [
            {
              player: playerId,
              status: 'replaced',
              gameClass: 'soldier',
              team: Tf2Team.Blu,
            },
            {
              player: player2Id,
              status: 'active',
              gameClass: 'soldier',
              team: Tf2Team.Red,
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
          slots: [
            {
              player: playerId,
              status: 'active',
              gameClass: 'soldier',
              team: Tf2Team.Blu,
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

  describe('#getMostActivePlayers()', () => {
    let player1: DocumentType<Player>;
    let player2: DocumentType<Player>;

    beforeEach(async () => {
      // @ts-expect-error
      player1 = await playersService._createOne();
      // @ts-expect-error
      player2 = await playersService._createOne();

      await gameModel.create({
        number: 1,
        slots: [
          {
            player: player1._id,
            team: Tf2Team.Blu,
            gameClass: 'scout',
            status: 'active',
          },
          {
            player: player2._id,
            team: Tf2Team.Red,
            gameClass: 'scout',
            status: 'active',
          },
        ],
        map: 'cp_badlands',
        state: 'ended',
      });

      await gameModel.create({
        number: 2,
        slots: [
          {
            player: player1._id,
            team: Tf2Team.Blu,
            gameClass: 'scout',
            status: 'active',
          },
        ],
        map: 'cp_badlands',
        state: 'ended',
      });
    });

    it('should return the most active players', async () => {
      const ret = await service.getMostActivePlayers();
      expect(ret).toEqual([{ player: player1.id, count: 2 }, { player: player2.id, count: 1 }]);
    });
  });

  describe('#getMostActiveMedics()', () => {
    it.todo('should return the most active medics');
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
        slots: [
          {
            player: player1,
            team: Tf2Team.Blu,
            gameClass: 'scout',
            status: 'waiting for substitute',
          },
          {
            player: player2,
            team: Tf2Team.Red,
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
        slots: [],
        map: 'cp_badlands',
        state: 'launching',
      });

      const gameServer = new ObjectId();
      await gameModel.create({
        number: 2,
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
