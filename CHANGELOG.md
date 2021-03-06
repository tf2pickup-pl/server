## [5.0.5](https://github.com/tf2pickup-pl/server/compare/5.0.4...5.0.5) (2021-03-26)


### Bug Fixes

* **games:** fix game dereference ([#951](https://github.com/tf2pickup-pl/server/issues/951)) ([b8caca9](https://github.com/tf2pickup-pl/server/commit/b8caca930fa18c76d888c34bb7117ace7653274b))

## [5.0.4](https://github.com/tf2pickup-pl/server/compare/5.0.3...5.0.4) (2021-03-25)


### Bug Fixes

* **build:** add migrations to docker image ([1713947](https://github.com/tf2pickup-pl/server/commit/17139478035310bdb2145111b226aec75c05382f))

## [5.0.3](https://github.com/tf2pickup-pl/server/compare/5.0.2...5.0.3) (2021-03-25)


### Bug Fixes

* **players:** handle TF2 in-game hours verification errors properly ([#948](https://github.com/tf2pickup-pl/server/issues/948)) ([f82d6bb](https://github.com/tf2pickup-pl/server/commit/f82d6bb9e4340007be175896bc841598fb499b4e))

## [5.0.2](https://github.com/tf2pickup-pl/server/compare/5.0.1...5.0.2) (2021-03-25)


### Bug Fixes

* **migration:** add game server model migration ([a3150da](https://github.com/tf2pickup-pl/server/commit/a3150da8a2488833d482101ca7b08746a1a7c94e))

## [5.0.1](https://github.com/tf2pickup-pl/server/compare/5.0.0...5.0.1) (2021-03-25)


### Bug Fixes

* **ci:** fix Docker image build script ([c3dd6fc](https://github.com/tf2pickup-pl/server/commit/c3dd6fc779c04aa8c9a9e771523776974f8ca2df))

# [5.0.0](https://github.com/tf2pickup-pl/server/compare/4.0.1...5.0.0) (2021-03-25)


### Bug Fixes

* **auth:** store keys in database ([#922](https://github.com/tf2pickup-pl/server/issues/922)) ([60ae7c3](https://github.com/tf2pickup-pl/server/commit/60ae7c38bc98f1b82af0eef7a41a7a6ff29df6c9))
* **build:** docker image build improvements ([#924](https://github.com/tf2pickup-pl/server/issues/924)) ([490ba60](https://github.com/tf2pickup-pl/server/commit/490ba60ba42abd9bbe9bf9b8aa23113c0c338815))
* **ci:** test, lint & build on release branches and tags ([#935](https://github.com/tf2pickup-pl/server/issues/935)) ([292037b](https://github.com/tf2pickup-pl/server/commit/292037ba9b06b7393c3d24d78ce7e11b8b0a15f3))
* **configuration:** use DTO in controller ([#936](https://github.com/tf2pickup-pl/server/issues/936)) ([ba39434](https://github.com/tf2pickup-pl/server/commit/ba39434fdf08a3ab65b0b2998ef62afc9a119c42))
* **deps:** update dependency commander to v7.2.0 ([#940](https://github.com/tf2pickup-pl/server/issues/940)) ([3473d36](https://github.com/tf2pickup-pl/server/commit/3473d369e87feb5dca6594431f58674aec29ab8c))
* **deps:** update nest monorepo to v7.6.14 ([#915](https://github.com/tf2pickup-pl/server/issues/915)) ([e441bec](https://github.com/tf2pickup-pl/server/commit/e441bece6bee90c91d598bfb696c8b20656716f5))
* **deps:** update nest monorepo to v7.6.15 ([#941](https://github.com/tf2pickup-pl/server/issues/941)) ([b73ec35](https://github.com/tf2pickup-pl/server/commit/b73ec350dad352c08031d96513a65067387e6dde))
* **discord:** game force ended notification ([#946](https://github.com/tf2pickup-pl/server/issues/946)) ([ed19ca1](https://github.com/tf2pickup-pl/server/commit/ed19ca1fe1f153800a31e868147a06ca9a729ac7))
* **discord:** make DiscordModule optional ([#928](https://github.com/tf2pickup-pl/server/issues/928)) ([71492be](https://github.com/tf2pickup-pl/server/commit/71492beccc80c8a9f8cf5da7b94fddda1875ed35))
* **e2e:** use random database name ([#945](https://github.com/tf2pickup-pl/server/issues/945)) ([5777986](https://github.com/tf2pickup-pl/server/commit/57779862831fabfbe1dbb2bab7d4707cb89c5396))
* **game-servers:** don't remove game servers permamently ([#917](https://github.com/tf2pickup-pl/server/issues/917)) ([76e84ed](https://github.com/tf2pickup-pl/server/commit/76e84ed626c8cc84fcf746f280fc4a481b7998a0))
* **players:** fix force create player ([#927](https://github.com/tf2pickup-pl/server/issues/927)) ([a0f1588](https://github.com/tf2pickup-pl/server/commit/a0f1588208320c53ae637f24b072acf41c182fc2))
* **twitch.tv:** disconnect twitch.tv profile ([#939](https://github.com/tf2pickup-pl/server/issues/939)) ([dcec891](https://github.com/tf2pickup-pl/server/commit/dcec891801cab90fc9bbf7983265e17262d027b1))


### Features

* **game-servers:** game server diagnostics ([#942](https://github.com/tf2pickup-pl/server/issues/942)) ([6cda591](https://github.com/tf2pickup-pl/server/commit/6cda591a424d0e95ab1e8e8c452f632ca8d66c43))
* **game-servers:** game server notifications on Discord ([#944](https://github.com/tf2pickup-pl/server/issues/944)) ([f6bbb89](https://github.com/tf2pickup-pl/server/commit/f6bbb89cecdfc4f18f9d1947689a7d9cc8ac06e5))
* make it possible to scramble maps ([#926](https://github.com/tf2pickup-pl/server/issues/926)) ([69b78dc](https://github.com/tf2pickup-pl/server/commit/69b78dcbc8fd7c9bcc046bc1187296cdb8c5a47a))


### Refactors

* ConfigurationModule redesign (#934) ([be9cbb6](https://github.com/tf2pickup-pl/server/commit/be9cbb67c6fc501259c11967b8a7cb4c577ea9c6)) ([#934](https://github.com/tf2pickup-pl/server/issues/934))

### BREAKING CHANGES

* The old configuration endpoint is not compatible with the new one.

## [4.0.1](https://github.com/tf2pickup-pl/server/compare/4.0.0...4.0.1) (2021-03-12)


### Bug Fixes

* **auth:** more verbose steam API errors ([#913](https://github.com/tf2pickup-pl/server/issues/913)) ([5e44cef](https://github.com/tf2pickup-pl/server/commit/5e44cef277fb36d30308ca7d35b2eae7fef347f1))

# [4.0.0](https://github.com/tf2pickup-pl/server/compare/3.8.4...4.0.0) (2021-03-11)


### Bug Fixes

* create empty rules initially ([#912](https://github.com/tf2pickup-pl/server/issues/912)) ([6d21158](https://github.com/tf2pickup-pl/server/commit/6d2115875a087cc4ff08d5caa98d40820c0675bb))
* get rid of LogReceiver bind address ([#910](https://github.com/tf2pickup-pl/server/issues/910)) ([69c3e68](https://github.com/tf2pickup-pl/server/commit/69c3e68bf57c8c4127565f9c0d10cf64a5a5c42e))
* **deps:** update dependency @nestjs/schedule to v0.4.3 ([#908](https://github.com/tf2pickup-pl/server/issues/908)) ([f13fae2](https://github.com/tf2pickup-pl/server/commit/f13fae28428d548b365542edb71461537fa66383))
* add launch.json ([a1f76ee](https://github.com/tf2pickup-pl/server/commit/a1f76ee6b18d9c49f434f599c51c2cbe6951379e))
* fix crash when querying unassigned skill ([#887](https://github.com/tf2pickup-pl/server/issues/887)) ([3a94c72](https://github.com/tf2pickup-pl/server/commit/3a94c72d7ce513a6406455bbcea4d4e51235248e))
* fix player registration ([#898](https://github.com/tf2pickup-pl/server/issues/898)) ([f980e8e](https://github.com/tf2pickup-pl/server/commit/f980e8e1a5424814b16aceab97d060e6009a77ad))
* move hasAcceptedRules prop to the Profile model ([#901](https://github.com/tf2pickup-pl/server/issues/901)) ([87a1587](https://github.com/tf2pickup-pl/server/commit/87a1587e6c6fa65de4f17a79c90d93c280d17608))
* **deps:** update dependency cache-manager to v3.4.1 ([#889](https://github.com/tf2pickup-pl/server/issues/889)) ([1792112](https://github.com/tf2pickup-pl/server/commit/17921122c06ba4c6fc61b15e444796b64ac09ecf))


### Features

* Docker releases ([#911](https://github.com/tf2pickup-pl/server/issues/911)) ([43ad025](https://github.com/tf2pickup-pl/server/commit/43ad02579c2ebf920a67bd4ea43fdca525cdc7fa))
* editable documents (#886) ([2408735](https://github.com/tf2pickup-pl/server/commit/240873597a8ae4c8eb6bc831e4a76178bd0c00b8)), closes [#886](https://github.com/tf2pickup-pl/server/issues/886)


### Refactors

* better player module models handling (#891) ([13a2051](https://github.com/tf2pickup-pl/server/commit/13a20519d0427977374dec3ed9ca8efc6d77342b)), closes [#891](https://github.com/tf2pickup-pl/server/issues/891)


### BREAKING CHANGES

* The Profile API is changed - review the new DTO.
* The Documents API is rewritten, dropping old functionality.

## [3.8.4](https://github.com/tf2pickup-pl/server/compare/3.8.3...3.8.4) (2021-03-05)


### Bug Fixes

* make default player skill query valid ([#888](https://github.com/tf2pickup-pl/server/issues/888)) ([e48bb36](https://github.com/tf2pickup-pl/server/commit/e48bb36a26a78ed01d1d323ea175b81606dbfd5d))

## [3.8.3](https://github.com/tf2pickup-pl/server/compare/3.8.2...3.8.3) (2021-03-04)


### Bug Fixes

* fix crash when querying unassigned skill ([#887](https://github.com/tf2pickup-pl/server/issues/887)) ([4430ce6](https://github.com/tf2pickup-pl/server/commit/4430ce67229957d57785a6c826756a266ce2721b))

## [3.8.2](https://github.com/tf2pickup-pl/server/compare/3.8.1...3.8.2) (2021-03-03)


### Bug Fixes

* fix player updated notification profile link ([#882](https://github.com/tf2pickup-pl/server/issues/882)) ([32d3d44](https://github.com/tf2pickup-pl/server/commit/32d3d44f8d98c52eb23a042d86f2619dda1ee4c1))
* skip empty admin notifications ([#883](https://github.com/tf2pickup-pl/server/issues/883)) ([2a4fddc](https://github.com/tf2pickup-pl/server/commit/2a4fddc4c56315a81139413485d66618f05a5b1f))

## [3.8.1](https://github.com/tf2pickup-pl/server/compare/3.8.0...3.8.1) (2021-03-03)


### Bug Fixes

* fix discord embeds author avatar URL ([#881](https://github.com/tf2pickup-pl/server/issues/881)) ([6a82b76](https://github.com/tf2pickup-pl/server/commit/6a82b76bbddf77a024508be7723386919a2f80c0))

# [3.8.0](https://github.com/tf2pickup-pl/server/compare/3.7.1...3.8.0) (2021-03-03)


### Bug Fixes

* **deps:** update dependency @nestjs/mongoose to v7.2.4 ([#873](https://github.com/tf2pickup-pl/server/issues/873)) ([0017387](https://github.com/tf2pickup-pl/server/commit/0017387c083ea4f6a798fd028398f8cc40658e23))
* **deps:** update dependency @typegoose/typegoose to v7.5.0 ([#879](https://github.com/tf2pickup-pl/server/issues/879)) ([b92efe8](https://github.com/tf2pickup-pl/server/commit/b92efe8d8989ad7895d7c1f3c95c2570909210b1))
* **deps:** update dependency async-mutex to v0.3.1 ([#866](https://github.com/tf2pickup-pl/server/issues/866)) ([6efc8b5](https://github.com/tf2pickup-pl/server/commit/6efc8b51e53a323cb5dbe49778631391deb86167))
* **deps:** update dependency gamedig to v3 ([#871](https://github.com/tf2pickup-pl/server/issues/871)) ([2b61478](https://github.com/tf2pickup-pl/server/commit/2b6147852fe96d1ba0131b8efda4a0d292a1f9ea))
* get rid of circular dependencies ([#878](https://github.com/tf2pickup-pl/server/issues/878)) ([3b4c1d6](https://github.com/tf2pickup-pl/server/commit/3b4c1d62f43a5ab77ce2b9cef2ba7a20e606c3af))
* **deps:** update dependency lodash to v4.17.21 ([#862](https://github.com/tf2pickup-pl/server/issues/862)) ([7bdac74](https://github.com/tf2pickup-pl/server/commit/7bdac746b2b6a21c263361d1c83e6afdb558756b))
* **deps:** update dependency rxjs to v6.6.6 ([#870](https://github.com/tf2pickup-pl/server/issues/870)) ([f9789ce](https://github.com/tf2pickup-pl/server/commit/f9789ce9b17c486fb839ed7a37c82cd271304b42))
* **deps:** update nest monorepo to v7.6.13 ([#864](https://github.com/tf2pickup-pl/server/issues/864)) ([4985bc8](https://github.com/tf2pickup-pl/server/commit/4985bc8237087c4092cf934ed0bd536aa62f71af))


### Features

* configurable default player skill ([#855](https://github.com/tf2pickup-pl/server/issues/855)) ([59e57af](https://github.com/tf2pickup-pl/server/commit/59e57afa62f4ab8b6993a9552f89192e198af7f9))
* configurable whitelist id ([#863](https://github.com/tf2pickup-pl/server/issues/863)) ([931e04a](https://github.com/tf2pickup-pl/server/commit/931e04a2f7996b433b5519c688afd923d91b9574))
* dynamic configuration ([#853](https://github.com/tf2pickup-pl/server/issues/853)) ([52de626](https://github.com/tf2pickup-pl/server/commit/52de62646513aed0c53827a5cae01e9a52060015))

## [3.7.1](https://github.com/tf2pickup-pl/server/compare/3.7.0...3.7.1) (2021-02-16)


### Bug Fixes

* **deps:** update dependency class-transformer to v0.4.0 ([#849](https://github.com/tf2pickup-pl/server/issues/849)) ([2c95eea](https://github.com/tf2pickup-pl/server/commit/2c95eeaa9c43b7644a65563004f628dac7e8ef38))
* **deps:** update dependency commander to v7.1.0 ([#851](https://github.com/tf2pickup-pl/server/issues/851)) ([566dac7](https://github.com/tf2pickup-pl/server/commit/566dac7c9ae6c41b9a86133582a40327d685d2fd))
* debounceTime queue slots when sending discord prompts ([#848](https://github.com/tf2pickup-pl/server/issues/848)) ([f0b31de](https://github.com/tf2pickup-pl/server/commit/f0b31de0385fe620947bd35a5a78063d58e786ba))

# [3.7.0](https://github.com/tf2pickup-pl/server/compare/3.6.3...3.7.0) (2021-02-14)


### Bug Fixes

* **deps:** pin dependency async-mutex to 0.3.0 ([#846](https://github.com/tf2pickup-pl/server/issues/846)) ([214b07c](https://github.com/tf2pickup-pl/server/commit/214b07c5352a0a422b7bb8354ea185a77a8858f7))
* pick free game server without race condition ([#845](https://github.com/tf2pickup-pl/server/issues/845)) ([a5fafc5](https://github.com/tf2pickup-pl/server/commit/a5fafc5914bd1fe93cc0e271d864ab5dec2df289))


### Features

* player preferences ([#847](https://github.com/tf2pickup-pl/server/issues/847)) ([28ffa6f](https://github.com/tf2pickup-pl/server/commit/28ffa6fdae5a9479d70f51643fcefd5cd1729fe9))

## [3.6.3](https://github.com/tf2pickup-pl/server/compare/3.6.2...3.6.3) (2021-02-11)


### Bug Fixes

* handle setting initial skill of a player ([#840](https://github.com/tf2pickup-pl/server/issues/840)) ([68794c9](https://github.com/tf2pickup-pl/server/commit/68794c9e364876594526f5086806d984cbe99d97))

## [3.6.2](https://github.com/tf2pickup-pl/server/compare/3.6.1...3.6.2) (2021-02-10)


### Bug Fixes

* cleaner discord queue prompts ([#836](https://github.com/tf2pickup-pl/server/issues/836)) ([ba6919c](https://github.com/tf2pickup-pl/server/commit/ba6919ce21a143e27feb6f06910311f2e1e05b40))
* ping players with sub request embed in one message ([#838](https://github.com/tf2pickup-pl/server/issues/838)) ([2b9e23d](https://github.com/tf2pickup-pl/server/commit/2b9e23d360c4b7d1ae7c2e17b145796331be3e8f))
* support game servers without a domain ([#837](https://github.com/tf2pickup-pl/server/issues/837)) ([2a6ee16](https://github.com/tf2pickup-pl/server/commit/2a6ee1663826b18d7c6da4ac19fa0ae8035403a9))
* **deps:** update nest monorepo to v7.6.12 ([#835](https://github.com/tf2pickup-pl/server/issues/835)) ([84795b9](https://github.com/tf2pickup-pl/server/commit/84795b9400a591b62cf0eaccc52a652ddc9141cc))

## [3.6.1](https://github.com/tf2pickup-pl/server/compare/3.6.0...3.6.1) (2021-02-09)


### Bug Fixes

* player treshold setting ([#834](https://github.com/tf2pickup-pl/server/issues/834)) ([ce92507](https://github.com/tf2pickup-pl/server/commit/ce9250725cd760b39e6bff6b08f10af7a66fe303))

# [3.6.0](https://github.com/tf2pickup-pl/server/compare/3.5.0...3.6.0) (2021-02-09)


### Features

* rich discord prompts ([#832](https://github.com/tf2pickup-pl/server/issues/832)) ([3fc4a52](https://github.com/tf2pickup-pl/server/commit/3fc4a5253398a887e44a5f76817095942858adde))

# [3.5.0](https://github.com/tf2pickup-pl/server/compare/3.4.0...3.5.0) (2021-02-06)


### Bug Fixes

* update queue configs ([9382f43](https://github.com/tf2pickup-pl/server/commit/9382f43005e9cfb2ff7bc9d95208f7e043762bcd))
* **deps:** update dependency @nestjs/config to v0.6.2 ([#803](https://github.com/tf2pickup-pl/server/issues/803)) ([f8fdbda](https://github.com/tf2pickup-pl/server/commit/f8fdbda3b96ca2d36da3bf36080b50b95dfcc66a))
* **deps:** update dependency @nestjs/mongoose to v7.2.3 ([#826](https://github.com/tf2pickup-pl/server/issues/826)) ([c3eee2b](https://github.com/tf2pickup-pl/server/commit/c3eee2bc639d22e55f8e18478d6c798c3714c1f3))
* get rid of avatarUrl ([#813](https://github.com/tf2pickup-pl/server/issues/813)) ([927cbc3](https://github.com/tf2pickup-pl/server/commit/927cbc343497754fb383eff346d4dad62c826c12))
* **deps:** update dependency @nestjs/config to v0.6.3 ([#818](https://github.com/tf2pickup-pl/server/issues/818)) ([7e57792](https://github.com/tf2pickup-pl/server/commit/7e577926ba972a6f1549cc7f6291019f4cf97ead))
* **deps:** update dependency @nestjs/mongoose to v7.2.2 ([#791](https://github.com/tf2pickup-pl/server/issues/791)) ([510741e](https://github.com/tf2pickup-pl/server/commit/510741e3df1102ccbff04b4f5d721de7a17597bb))
* **deps:** update dependency @nestjs/schedule to v0.4.2 ([#804](https://github.com/tf2pickup-pl/server/issues/804)) ([2532926](https://github.com/tf2pickup-pl/server/commit/253292620828b15d29e3cc62fdb6830104257506))
* **deps:** update dependency @typegoose/typegoose to v7.4.7 ([#786](https://github.com/tf2pickup-pl/server/issues/786)) ([3e469d3](https://github.com/tf2pickup-pl/server/commit/3e469d3292e87b3fbecd4d4968de91ec82e763b2))
* **deps:** update dependency @typegoose/typegoose to v7.4.8 ([#798](https://github.com/tf2pickup-pl/server/issues/798)) ([9570226](https://github.com/tf2pickup-pl/server/commit/9570226731460afa38b3e560176ac8fcd72a8684))
* **deps:** update dependency class-transformer to v0.3.2 ([#790](https://github.com/tf2pickup-pl/server/issues/790)) ([9c1790d](https://github.com/tf2pickup-pl/server/commit/9c1790d1cc018e28cd4e4c9a7ecd1717d2f621a5))
* **deps:** update dependency class-validator to v0.13.0 ([#783](https://github.com/tf2pickup-pl/server/issues/783)) ([991938c](https://github.com/tf2pickup-pl/server/commit/991938c7be4b32d662c1af94bcbfa8c7db6de8d2))
* **deps:** update dependency class-validator to v0.13.1 ([#789](https://github.com/tf2pickup-pl/server/issues/789)) ([7f76609](https://github.com/tf2pickup-pl/server/commit/7f7660919a25221bce783ade1813cc4f4580abe9))
* **deps:** update dependency commander to v7 ([#793](https://github.com/tf2pickup-pl/server/issues/793)) ([f47e4e7](https://github.com/tf2pickup-pl/server/commit/f47e4e744d82c77675e2169d1e78f922eb22115b))
* **deps:** update dependency generate-password to v1.6.0 ([#792](https://github.com/tf2pickup-pl/server/issues/792)) ([5f1feb9](https://github.com/tf2pickup-pl/server/commit/5f1feb94e29101955c720b2b8019188b94a231c8))
* **deps:** update dependency helmet to v4.4.1 ([#796](https://github.com/tf2pickup-pl/server/issues/796)) ([9384112](https://github.com/tf2pickup-pl/server/commit/9384112a75bbe35457b4d3d790988142d01921cf))
* **deps:** update nest monorepo to v7.6.11 ([#821](https://github.com/tf2pickup-pl/server/issues/821)) ([d0e165b](https://github.com/tf2pickup-pl/server/commit/d0e165b4ad258c807dffdb7c4f36a552a7b2e485))
* **deps:** update nest monorepo to v7.6.6 ([#810](https://github.com/tf2pickup-pl/server/issues/810)) ([a3824a8](https://github.com/tf2pickup-pl/server/commit/a3824a8adc325ee14583fade09e1acbbdc37b0a9))
* **deps:** update nest monorepo to v7.6.7 ([#811](https://github.com/tf2pickup-pl/server/issues/811)) ([2bdcb1e](https://github.com/tf2pickup-pl/server/commit/2bdcb1e6f96a8b3032b87bd17d8bbbcec86449d2))
* **deps:** update nest monorepo to v7.6.8 ([#816](https://github.com/tf2pickup-pl/server/issues/816)) ([447db41](https://github.com/tf2pickup-pl/server/commit/447db41dd633d61c3dc2db0b8cca29cfcebc8863))
* **deps:** update nest monorepo to v7.6.9 ([#819](https://github.com/tf2pickup-pl/server/issues/819)) ([8e1b221](https://github.com/tf2pickup-pl/server/commit/8e1b22194bc561c029675f1c709c7463906c95da))
* mention players when a sub is needed ([#812](https://github.com/tf2pickup-pl/server/issues/812)) ([f168be5](https://github.com/tf2pickup-pl/server/commit/f168be5160450aac1277a0a72e821b330c415b78))


### Features

* dynamic map pool ([#805](https://github.com/tf2pickup-pl/server/issues/805)) ([f88097c](https://github.com/tf2pickup-pl/server/commit/f88097c2829711fd6dfe80404569e15c753afb52))
* force create player account ([#828](https://github.com/tf2pickup-pl/server/issues/828)) ([0cf5562](https://github.com/tf2pickup-pl/server/commit/0cf5562873e7c455af7596b8db4a365a768a0b89))
* make TwitchModule optional ([#827](https://github.com/tf2pickup-pl/server/issues/827)) ([d5c01f0](https://github.com/tf2pickup-pl/server/commit/d5c01f01976fc0f30efcf3509086b21ffa589dc1))

# [3.4.0](https://github.com/tf2pickup-pl/server/compare/3.3.4...3.4.0) (2021-01-09)


### Bug Fixes

* **deps:** update dependency @nestjs/mongoose to v7.2.1 ([#778](https://github.com/tf2pickup-pl/server/issues/778)) ([6c76120](https://github.com/tf2pickup-pl/server/commit/6c76120dcfbf7f79c847b462b9593440369d3f21))


### Features

* **queue:** populate queue slot players ([#780](https://github.com/tf2pickup-pl/server/issues/780)) ([cdf76d8](https://github.com/tf2pickup-pl/server/commit/cdf76d8a14ffad818cedd7382def6e4c0ef4da41))
* add caching support for PlayersModule ([#781](https://github.com/tf2pickup-pl/server/issues/781)) ([c283e22](https://github.com/tf2pickup-pl/server/commit/c283e22b6da55c0a9cb8d80e2fb5cdc16185d819))

## [3.3.4](https://github.com/tf2pickup-pl/server/compare/3.3.3...3.3.4) (2021-01-07)


### Bug Fixes

* handle player subs properly ([#776](https://github.com/tf2pickup-pl/server/issues/776)) ([3075d4e](https://github.com/tf2pickup-pl/server/commit/3075d4e6fd39559a9cfc7574be867d00fd6ca303))

## [3.3.3](https://github.com/tf2pickup-pl/server/compare/3.3.2...3.3.3) (2021-01-05)


### Bug Fixes

* add client/index.html ([#767](https://github.com/tf2pickup-pl/server/issues/767)) ([e4936b2](https://github.com/tf2pickup-pl/server/commit/e4936b208d39ec84b93f14ac7ef9a12c5da16272))
* dont notify when setting the same player's name ([#775](https://github.com/tf2pickup-pl/server/issues/775)) ([4ebfc6e](https://github.com/tf2pickup-pl/server/commit/4ebfc6eaedab093929f37b01b3c6fd878d55fea7))
* make game updates atomic ([#774](https://github.com/tf2pickup-pl/server/issues/774)) ([cb6ad98](https://github.com/tf2pickup-pl/server/commit/cb6ad98835a8bb339c96fd67b3e2d535a65d078b))

## [3.3.2](https://github.com/tf2pickup-pl/server/compare/3.3.1...3.3.2) (2020-12-30)


### Bug Fixes

* update 9v9 mappool ([9b3113b](https://github.com/tf2pickup-pl/server/commit/9b3113b9dc642b30d8387827920cb290264ed1c9))
* **deps:** update nest monorepo to v7.6.5 ([#766](https://github.com/tf2pickup-pl/server/issues/766)) ([8063791](https://github.com/tf2pickup-pl/server/commit/8063791028ce52b04bc51e2d8963b77875f15b66))

## [3.3.1](https://github.com/tf2pickup-pl/server/compare/3.3.0...3.3.1) (2020-12-30)


### Bug Fixes

* **deps:** update dependency @typegoose/typegoose to v7.4.6 ([#765](https://github.com/tf2pickup-pl/server/issues/765)) ([662eb68](https://github.com/tf2pickup-pl/server/commit/662eb6873dc2def0e8d167a9ae5de0e3a87fdadc))
* don't add replaced players ([#762](https://github.com/tf2pickup-pl/server/issues/762)) ([c2d7587](https://github.com/tf2pickup-pl/server/commit/c2d75879cde883932c7dd6afaa16a1095f9db1a4))
* **deps:** update dependency helmet to v4.3.1 ([#760](https://github.com/tf2pickup-pl/server/issues/760)) ([1b30cc4](https://github.com/tf2pickup-pl/server/commit/1b30cc4e16a1be5a858cfde16fd84364bb0c1561))

# [3.3.0](https://github.com/tf2pickup-pl/server/compare/3.2.0...3.3.0) (2020-12-23)


### Bug Fixes

* **deps:** update nest monorepo to v7.6.4 ([#756](https://github.com/tf2pickup-pl/server/issues/756)) ([3598ac2](https://github.com/tf2pickup-pl/server/commit/3598ac2716190fd7761e9628d22490663b5c9217))
* get rid of mongoose deprecations ([#755](https://github.com/tf2pickup-pl/server/issues/755)) ([75dede9](https://github.com/tf2pickup-pl/server/commit/75dede9bcbacab5d809cba9e7a2f46655d987fc3))
* **ci:** fix lint.yml ([5797d45](https://github.com/tf2pickup-pl/server/commit/5797d4534c42c86d0f887767d58dc50a290b72de))
* **deps:** update dependency commander to v6.2.1 ([#748](https://github.com/tf2pickup-pl/server/issues/748)) ([02c2c7e](https://github.com/tf2pickup-pl/server/commit/02c2c7e83fe2fbb7cb9d1e341f04b1e3a762104d))
* **deps:** update dependency passport-steam to v1.0.15 ([#750](https://github.com/tf2pickup-pl/server/issues/750)) ([aa2c7bd](https://github.com/tf2pickup-pl/server/commit/aa2c7bd274975b402c3049c9d01adfcd86d150c7))
* **deps:** update nest monorepo to v7.6.3 ([#752](https://github.com/tf2pickup-pl/server/issues/752)) ([985d1ee](https://github.com/tf2pickup-pl/server/commit/985d1ee0f21dbca5d4833c4764cebb1e8e35c9b1))


### Features

* **ci:** move to github actions ([#753](https://github.com/tf2pickup-pl/server/issues/753)) ([44118d2](https://github.com/tf2pickup-pl/server/commit/44118d2d101d0c7d2eaeecea65c850dd916b7c20))
* provide all avatar sizes ([#751](https://github.com/tf2pickup-pl/server/issues/751)) ([0b4cdd7](https://github.com/tf2pickup-pl/server/commit/0b4cdd793ebbceed70c61b4dc573bd70afc87500))

# [3.2.0](https://github.com/tf2pickup-pl/server/compare/3.1.2...3.2.0) (2020-12-10)


### Features

* redirect cookie for auth route ([#745](https://github.com/tf2pickup-pl/server/issues/745)) ([faf5f37](https://github.com/tf2pickup-pl/server/commit/faf5f371d06c37c0668576fd9c877538f2d43c22))

## [3.1.2](https://github.com/tf2pickup-pl/server/compare/3.1.1...3.1.2) (2020-10-11)


### Bug Fixes

* get rid of deprecated decorators ([#650](https://github.com/tf2pickup-pl/server/issues/650)) ([7d7c565](https://github.com/tf2pickup-pl/server/commit/7d7c56545d39267b8d9f4ef63db8888b98297b8f))
* **config:** update environment validation schema ([#649](https://github.com/tf2pickup-pl/server/issues/649)) ([35ceb18](https://github.com/tf2pickup-pl/server/commit/35ceb187680638ede0bc54b0c62d831db44185b1))
* **deps:** update dependency jsonschema to v1.2.10 ([#642](https://github.com/tf2pickup-pl/server/issues/642)) ([431e7f8](https://github.com/tf2pickup-pl/server/commit/431e7f8fdaacea41fdd4675fb5324218b3945b73))
* **deps:** update dependency jsonschema to v1.2.11 ([#647](https://github.com/tf2pickup-pl/server/issues/647)) ([3654ae8](https://github.com/tf2pickup-pl/server/commit/3654ae8a24d89cd5365ffc86c1bd34d9532b8384))
* **deps:** update dependency jsonschema to v1.2.8 ([#637](https://github.com/tf2pickup-pl/server/issues/637)) ([b0a59f6](https://github.com/tf2pickup-pl/server/commit/b0a59f66a77f511f8ab96c8f14b54a5614c33e0f))
* **deps:** update dependency moment to v2.29.1 ([#641](https://github.com/tf2pickup-pl/server/issues/641)) ([f2c2af1](https://github.com/tf2pickup-pl/server/commit/f2c2af1025cc00905d6e3b984b176726463aa7d3))
* **deps:** update dependency mongoose to v5.10.8 ([#639](https://github.com/tf2pickup-pl/server/issues/639)) ([0e51aa9](https://github.com/tf2pickup-pl/server/commit/0e51aa96dfb7de8efdedf5af2cc0e1d6efa810ed))
* **deps:** update dependency mongoose to v5.10.9 ([#646](https://github.com/tf2pickup-pl/server/issues/646)) ([f2ce40a](https://github.com/tf2pickup-pl/server/commit/f2ce40aea8818f646838d10f5acbc99f70872a4e))

## [3.1.1](https://github.com/tf2pickup-pl/server/compare/3.1.0...3.1.1) (2020-09-29)


### Bug Fixes

* get rid of wrong server password ([#631](https://github.com/tf2pickup-pl/server/issues/631)) ([9a0826a](https://github.com/tf2pickup-pl/server/commit/9a0826a61e20d9be51cc345a074b31903d817231))
* **deps:** update dependency @nestjs/schedule to v0.4.1 ([#625](https://github.com/tf2pickup-pl/server/issues/625)) ([1717a84](https://github.com/tf2pickup-pl/server/commit/1717a8417034b3fd1a8b6db0985ba72f15e7afe4))
* **deps:** update dependency @typegoose/typegoose to v7.4.0 ([#616](https://github.com/tf2pickup-pl/server/issues/616)) ([2d1c823](https://github.com/tf2pickup-pl/server/commit/2d1c8235ab8c40d3be35b8c88c3ca6ad8c69413d))
* **deps:** update dependency @typegoose/typegoose to v7.4.1 ([#623](https://github.com/tf2pickup-pl/server/issues/623)) ([d41c1c7](https://github.com/tf2pickup-pl/server/commit/d41c1c76d4696b9a19f81048311d2db3b681b519))
* **deps:** update dependency discord.js to v12.3.1 ([#553](https://github.com/tf2pickup-pl/server/issues/553)) ([b86f613](https://github.com/tf2pickup-pl/server/commit/b86f613aadb47b695ded127d227a06fc845f38c5))
* **deps:** update dependency helmet to v4.1.1 ([#605](https://github.com/tf2pickup-pl/server/issues/605)) ([aa9a498](https://github.com/tf2pickup-pl/server/commit/aa9a498789671e30a9d0aa1aa70504e8dca80a34))
* **deps:** update dependency jsonschema to v1.2.7 ([#630](https://github.com/tf2pickup-pl/server/issues/630)) ([d310eab](https://github.com/tf2pickup-pl/server/commit/d310eab25a5af9598da6234165741d1e5360271f))
* **deps:** update dependency moment to v2.28.0 ([#610](https://github.com/tf2pickup-pl/server/issues/610)) ([ba8eef4](https://github.com/tf2pickup-pl/server/commit/ba8eef49fd200c9a308967f0189378a816d84e29))
* **deps:** update dependency moment to v2.29.0 ([#622](https://github.com/tf2pickup-pl/server/issues/622)) ([38d8520](https://github.com/tf2pickup-pl/server/commit/38d8520559cfddb7131b3a839af2f9bd4997b71f))
* **deps:** update dependency mongoose to v5.10.4 ([#602](https://github.com/tf2pickup-pl/server/issues/602)) ([00e1374](https://github.com/tf2pickup-pl/server/commit/00e13744658dc599f1e485c49e957927da0b7e77))
* **deps:** update dependency mongoose to v5.10.5 ([#607](https://github.com/tf2pickup-pl/server/issues/607)) ([eb67394](https://github.com/tf2pickup-pl/server/commit/eb67394de1a05796a21b060f6d0bb1f58d36df82))
* **deps:** update dependency mongoose to v5.10.6 ([#618](https://github.com/tf2pickup-pl/server/issues/618)) ([33586dd](https://github.com/tf2pickup-pl/server/commit/33586ddd1b54f30e6483800db2961b0f0a8d769a))
* **deps:** update dependency mongoose to v5.10.7 ([#627](https://github.com/tf2pickup-pl/server/issues/627)) ([8f46521](https://github.com/tf2pickup-pl/server/commit/8f46521dc8437a08c7fc57eeaf815f9aa404933a))
* **deps:** update dependency nestjs-console to v3.1.2 ([#613](https://github.com/tf2pickup-pl/server/issues/613)) ([00b01e5](https://github.com/tf2pickup-pl/server/commit/00b01e5df6a375409a1ec524401944a0305b3b80))
* **deps:** update dependency nestjs-typegoose to v7.1.37 ([#603](https://github.com/tf2pickup-pl/server/issues/603)) ([37872fb](https://github.com/tf2pickup-pl/server/commit/37872fbd1c23862977f1787d7ed09bec71182866))
* **deps:** update dependency nestjs-typegoose to v7.1.38 ([#633](https://github.com/tf2pickup-pl/server/issues/633)) ([98c526f](https://github.com/tf2pickup-pl/server/commit/98c526f46b501a33247f1dd7527c4268b0cfb757))
* **deps:** update dependency rcon-client to v4.2.3 ([#626](https://github.com/tf2pickup-pl/server/issues/626)) ([bf72b8b](https://github.com/tf2pickup-pl/server/commit/bf72b8b36d4255200b32adfd7cd46482137f2325))

# [3.1.0](https://github.com/tf2pickup-pl/server/compare/3.0.6...3.1.0) (2020-09-08)


### Bug Fixes

* **deps:** update dependency @nestjs/mongoose to v7.0.2 ([#490](https://github.com/tf2pickup-pl/server/issues/490)) ([1f9dfd3](https://github.com/tf2pickup-pl/server/commit/1f9dfd39655bd6ea51d6b9c3aaf77513318b6ae4))
* **deps:** update dependency @typegoose/typegoose to v7.3.0 ([#495](https://github.com/tf2pickup-pl/server/issues/495)) ([8a75a62](https://github.com/tf2pickup-pl/server/commit/8a75a62fd7ee9e03f3be546527253d0e3508bad9))
* **deps:** update dependency @typegoose/typegoose to v7.3.1 ([#517](https://github.com/tf2pickup-pl/server/issues/517)) ([4eb846b](https://github.com/tf2pickup-pl/server/commit/4eb846ba33f8d16c3c1a64208c5788dd12f4f4ea))
* **deps:** update dependency @typegoose/typegoose to v7.3.2 ([#546](https://github.com/tf2pickup-pl/server/issues/546)) ([07ab08f](https://github.com/tf2pickup-pl/server/commit/07ab08fad6a978eee3306e0cc1f8863845b3dd9a))
* **deps:** update dependency @typegoose/typegoose to v7.3.3 ([#569](https://github.com/tf2pickup-pl/server/issues/569)) ([460a3a9](https://github.com/tf2pickup-pl/server/commit/460a3a98bad8f9c8bf14984c2b217821c7e53f4e))
* **deps:** update dependency @typegoose/typegoose to v7.3.4 ([#575](https://github.com/tf2pickup-pl/server/issues/575)) ([fe0778b](https://github.com/tf2pickup-pl/server/commit/fe0778bb2538fb37563a9a66a56c722d7f9ea74d))
* **deps:** update dependency @typegoose/typegoose to v7.3.5 ([#595](https://github.com/tf2pickup-pl/server/issues/595)) ([01521c5](https://github.com/tf2pickup-pl/server/commit/01521c54d4bc91159d582c81ee830580e08c191f))
* **deps:** update dependency class-transformer to v0.3.1 ([#526](https://github.com/tf2pickup-pl/server/issues/526)) ([826652d](https://github.com/tf2pickup-pl/server/commit/826652d82788d44b135cba1000b57fe2b35e9b21))
* **deps:** update dependency commander to v6 ([#508](https://github.com/tf2pickup-pl/server/issues/508)) ([2d359ee](https://github.com/tf2pickup-pl/server/commit/2d359eeb7108ff840423f68200c27f054826d8ce))
* **deps:** update dependency commander to v6.1.0 ([#577](https://github.com/tf2pickup-pl/server/issues/577)) ([697fa4e](https://github.com/tf2pickup-pl/server/commit/697fa4e07c2e2e2fb50dcee1f7b35fc7a3cfb628))
* **deps:** update dependency helmet to v4 ([#539](https://github.com/tf2pickup-pl/server/issues/539)) ([9aff7a1](https://github.com/tf2pickup-pl/server/commit/9aff7a1e0c751b4817d436454d5439925a0d6382))
* **deps:** update dependency lodash to v4.17.16 ([#489](https://github.com/tf2pickup-pl/server/issues/489)) ([ec4cfb5](https://github.com/tf2pickup-pl/server/commit/ec4cfb5aa951155922d1ca45bf1b5634bb968f29))
* **deps:** update dependency lodash to v4.17.17 ([#491](https://github.com/tf2pickup-pl/server/issues/491)) ([e8b97ac](https://github.com/tf2pickup-pl/server/commit/e8b97aca4812a342c62f25a58dd32026fe82bd97))
* **deps:** update dependency lodash to v4.17.19 ([#493](https://github.com/tf2pickup-pl/server/issues/493)) ([41ed90e](https://github.com/tf2pickup-pl/server/commit/41ed90e8c321d448303d963d4591e4c425dbf75a))
* **deps:** update dependency lodash to v4.17.20 ([#550](https://github.com/tf2pickup-pl/server/issues/550)) ([127b4a2](https://github.com/tf2pickup-pl/server/commit/127b4a2de73cc85fb7fd3462c21a1ab83092c843))
* **deps:** update dependency mongoose to v5.10.0 ([#552](https://github.com/tf2pickup-pl/server/issues/552)) ([841273a](https://github.com/tf2pickup-pl/server/commit/841273a5c2316866debc979ff3bc3ce5a67636f2))
* **deps:** update dependency mongoose to v5.10.1 ([#576](https://github.com/tf2pickup-pl/server/issues/576)) ([985b514](https://github.com/tf2pickup-pl/server/commit/985b51422bd22a2180aa0a2766edd054f698f7c1))
* **deps:** update dependency mongoose to v5.10.2 ([#579](https://github.com/tf2pickup-pl/server/issues/579)) ([1c7e9f8](https://github.com/tf2pickup-pl/server/commit/1c7e9f80062be634c456b4dafa55b04c56e8c92f))
* **deps:** update dependency mongoose to v5.10.3 ([#590](https://github.com/tf2pickup-pl/server/issues/590)) ([0283cc2](https://github.com/tf2pickup-pl/server/commit/0283cc2bb01b0dbb566b2e053dee5cb60582614f))
* **deps:** update dependency mongoose to v5.9.21 ([#480](https://github.com/tf2pickup-pl/server/issues/480)) ([b7af893](https://github.com/tf2pickup-pl/server/commit/b7af8936e24e783e5c7bed761c14509e0451ad67))
* **deps:** update dependency mongoose to v5.9.22 ([#487](https://github.com/tf2pickup-pl/server/issues/487)) ([9d225ee](https://github.com/tf2pickup-pl/server/commit/9d225eed3b8cb3d8d4aa6a6ce4d39bf046a8fc3f))
* **deps:** update dependency mongoose to v5.9.23 ([#499](https://github.com/tf2pickup-pl/server/issues/499)) ([b33e382](https://github.com/tf2pickup-pl/server/commit/b33e382cfd517e674c8990e36d89eeda847409ff))
* **deps:** update dependency mongoose to v5.9.24 ([#501](https://github.com/tf2pickup-pl/server/issues/501)) ([4200740](https://github.com/tf2pickup-pl/server/commit/4200740c74771d3a01222adf3a4256bc037aecc1))
* **deps:** update dependency mongoose to v5.9.25 ([#506](https://github.com/tf2pickup-pl/server/issues/506)) ([7585254](https://github.com/tf2pickup-pl/server/commit/7585254adf424b6124388d6a68214178ad668bb6))
* **deps:** update dependency mongoose to v5.9.26 ([#518](https://github.com/tf2pickup-pl/server/issues/518)) ([a0b78e1](https://github.com/tf2pickup-pl/server/commit/a0b78e1eb40efc7266183ff42c503c236550a5ff))
* **deps:** update dependency mongoose to v5.9.27 ([#533](https://github.com/tf2pickup-pl/server/issues/533)) ([46fcb42](https://github.com/tf2pickup-pl/server/commit/46fcb42cf511697af91ff3be2c00b13d289f6076))
* **deps:** update dependency mongoose to v5.9.28 ([#544](https://github.com/tf2pickup-pl/server/issues/544)) ([6030def](https://github.com/tf2pickup-pl/server/commit/6030def201725cfe8fc9a35e4ea4bf095f687e1d))
* **deps:** update dependency mongoose to v5.9.29 ([#551](https://github.com/tf2pickup-pl/server/issues/551)) ([3cfa866](https://github.com/tf2pickup-pl/server/commit/3cfa8664c697038a7ee88e94903749990b478811))
* **deps:** update dependency nestjs-console to v3.1.1 ([#528](https://github.com/tf2pickup-pl/server/issues/528)) ([2a94a25](https://github.com/tf2pickup-pl/server/commit/2a94a25c8b1838e92918421e483f1035e7bc4c21))
* **deps:** update dependency nestjs-typegoose to v7.1.29 ([#524](https://github.com/tf2pickup-pl/server/issues/524)) ([191c596](https://github.com/tf2pickup-pl/server/commit/191c5961ac6ea50bf96dcb9128eba0c2152a5f21))
* **deps:** update dependency nestjs-typegoose to v7.1.30 ([#525](https://github.com/tf2pickup-pl/server/issues/525)) ([3619bb8](https://github.com/tf2pickup-pl/server/commit/3619bb8f16dda3af140cae18669717e3d1a3e6c8))
* **deps:** update dependency nestjs-typegoose to v7.1.31 ([#536](https://github.com/tf2pickup-pl/server/issues/536)) ([f6b017b](https://github.com/tf2pickup-pl/server/commit/f6b017bdf32481bbe5ef4e2e0645829b5b42cdd7))
* **deps:** update dependency nestjs-typegoose to v7.1.32 ([#537](https://github.com/tf2pickup-pl/server/issues/537)) ([d8e018c](https://github.com/tf2pickup-pl/server/commit/d8e018cbd800555fcd0bb1b52cac9218925a6b92))
* **deps:** update dependency nestjs-typegoose to v7.1.33 ([#580](https://github.com/tf2pickup-pl/server/issues/580)) ([4929968](https://github.com/tf2pickup-pl/server/commit/4929968883f095fad4cbfe0f1a2a05b988f3938b))
* **deps:** update dependency nestjs-typegoose to v7.1.34 ([#581](https://github.com/tf2pickup-pl/server/issues/581)) ([77fde6c](https://github.com/tf2pickup-pl/server/commit/77fde6cbf19b4583745485b8e00a92d2e1cf6562))
* **deps:** update dependency nestjs-typegoose to v7.1.35 ([#591](https://github.com/tf2pickup-pl/server/issues/591)) ([e25907c](https://github.com/tf2pickup-pl/server/commit/e25907c42e73f86f9546d06b6077da6c4ee037ae))
* **deps:** update dependency nestjs-typegoose to v7.1.36 ([#593](https://github.com/tf2pickup-pl/server/issues/593)) ([8571e79](https://github.com/tf2pickup-pl/server/commit/8571e793b2512db3ce85e5d1390aec2e25745aa2))
* **deps:** update dependency rcon-client to v4.2.1 ([#514](https://github.com/tf2pickup-pl/server/issues/514)) ([3cecfa7](https://github.com/tf2pickup-pl/server/commit/3cecfa73728cff3bc9d5f17af32721e223dddbfa))
* **deps:** update dependency rcon-client to v4.2.2 ([#538](https://github.com/tf2pickup-pl/server/issues/538)) ([6f90b8d](https://github.com/tf2pickup-pl/server/commit/6f90b8d0c8efc9d54aef9856b7b3ee6576a275ac))
* **deps:** update dependency rxjs to v6.6.0 ([#481](https://github.com/tf2pickup-pl/server/issues/481)) ([d77e65a](https://github.com/tf2pickup-pl/server/commit/d77e65a2dad5a3396ad7754aaaadee3670b33c08))
* **deps:** update dependency rxjs to v6.6.2 ([#530](https://github.com/tf2pickup-pl/server/issues/530)) ([924facf](https://github.com/tf2pickup-pl/server/commit/924facfe62c372e1a21449a966ce3ae60277920e))
* **deps:** update dependency rxjs to v6.6.3 ([#596](https://github.com/tf2pickup-pl/server/issues/596)) ([895e6eb](https://github.com/tf2pickup-pl/server/commit/895e6eb1ac5b2b5b2efb4e442dbf739221933361))
* **deps:** update nest monorepo to v7.3.0 ([#478](https://github.com/tf2pickup-pl/server/issues/478)) ([4e83367](https://github.com/tf2pickup-pl/server/commit/4e83367c0f1072b8d91387950fca9371bc197d13))
* **deps:** update nest monorepo to v7.3.1 ([#482](https://github.com/tf2pickup-pl/server/issues/482)) ([5bed50c](https://github.com/tf2pickup-pl/server/commit/5bed50cbc532c0a639738102b6bad5fc3cb00867))
* **deps:** update nest monorepo to v7.3.2 ([#492](https://github.com/tf2pickup-pl/server/issues/492)) ([f29a562](https://github.com/tf2pickup-pl/server/commit/f29a5624e932ff59170ad7e1ac37654561c9e832))
* **deps:** update nest monorepo to v7.4.0 ([#522](https://github.com/tf2pickup-pl/server/issues/522)) ([fba9903](https://github.com/tf2pickup-pl/server/commit/fba99033f99c43f6e0ddf8c98cb1ad0d1802eecd))
* **deps:** update nest monorepo to v7.4.1 ([#523](https://github.com/tf2pickup-pl/server/issues/523)) ([3416b71](https://github.com/tf2pickup-pl/server/commit/3416b71f832a1a4df43974898326d5782e56f960))
* **deps:** update nest monorepo to v7.4.2 ([#529](https://github.com/tf2pickup-pl/server/issues/529)) ([902a27e](https://github.com/tf2pickup-pl/server/commit/902a27ec94e95b63a3b54e86d9c84d6b0fa4d868))
* fix issue urls in readme ([e9ca314](https://github.com/tf2pickup-pl/server/commit/e9ca314c33b2a65233ac8149110372b8b88d2449))


### Features

* **games:** add the /games/?playerId=<playerId> endpoint ([#470](https://github.com/tf2pickup-pl/server/issues/470)) ([924b424](https://github.com/tf2pickup-pl/server/commit/924b42471bad70bdcfee8e14d05a44b8e34404c9))
* **players:** add bot user ([#483](https://github.com/tf2pickup-pl/server/issues/483)) ([7304418](https://github.com/tf2pickup-pl/server/commit/7304418ad6f8be999576d9d9714546dc3e97529d))

## [3.0.6](https://github.com/tf2pickup-pl/server/compare/3.0.5...3.0.6) (2020-06-30)


### Bug Fixes

* **deps:** update dependency @nestjs/passport to v7.1.0 ([#473](https://github.com/tf2pickup-pl/server/issues/473)) ([9ccc4da](https://github.com/tf2pickup-pl/server/commit/9ccc4da97c983d469a7542363d433459afa56fff))
* **deps:** update dependency helmet to v3.23.2 ([#463](https://github.com/tf2pickup-pl/server/issues/463)) ([0e1d193](https://github.com/tf2pickup-pl/server/commit/0e1d193789279e184b124291dc9fe7aad6e62732))
* **deps:** update dependency helmet to v3.23.3 ([#471](https://github.com/tf2pickup-pl/server/issues/471)) ([19d2dd9](https://github.com/tf2pickup-pl/server/commit/19d2dd92d287a7a193680252681e03de80711c1f))
* **deps:** update dependency migrate to v1.7.0 ([#475](https://github.com/tf2pickup-pl/server/issues/475)) ([18324a2](https://github.com/tf2pickup-pl/server/commit/18324a20a63abb4a1f98d12309be03c859fd2e46))
* **deps:** update dependency mongoose to v5.9.20 ([#462](https://github.com/tf2pickup-pl/server/issues/462)) ([059ab69](https://github.com/tf2pickup-pl/server/commit/059ab698ea65d2d5a5204330d39f8bca347618a1))
* **players:** ignore TF2 in-game hours verification failure when the verification is not needed ([#477](https://github.com/tf2pickup-pl/server/issues/477)) ([ae2ffc4](https://github.com/tf2pickup-pl/server/commit/ae2ffc4f9d664a245aff39f317cb676652ffae13))

## [3.0.5](https://github.com/tf2pickup-pl/server/compare/3.0.4...3.0.5) (2020-06-22)


### Bug Fixes

* **deps:** update dependency @nestjs/serve-static to v2.1.3 ([#460](https://github.com/tf2pickup-pl/server/issues/460)) ([5ae17dd](https://github.com/tf2pickup-pl/server/commit/5ae17dda7b3cb084b330c8b3f51dc2a5201f0f12))
* **deps:** update dependency moment to v2.27.0 ([#454](https://github.com/tf2pickup-pl/server/issues/454)) ([90af439](https://github.com/tf2pickup-pl/server/commit/90af439237f83be68f4812e1f4e107a1d4795b26))
* **games:** prevent team overrides from eliminating all possible lineups ([#461](https://github.com/tf2pickup-pl/server/issues/461)) ([d5aaf54](https://github.com/tf2pickup-pl/server/commit/d5aaf540841b63f4629a476d281fadb304f92703))

## [3.0.4](https://github.com/tf2pickup-pl/server/compare/3.0.3...3.0.4) (2020-06-19)


### Bug Fixes

* capture uploaded demo url ([#455](https://github.com/tf2pickup-pl/server/issues/455)) ([cde2a39](https://github.com/tf2pickup-pl/server/commit/cde2a3976ddc11df26e58592e387e89dedf7361e))

## [3.0.3](https://github.com/tf2pickup-pl/server/compare/3.0.2...3.0.3) (2020-06-18)


### Bug Fixes

* fix GameServer not being saved after assigning a game ([#453](https://github.com/tf2pickup-pl/server/issues/453)) ([ef30ffd](https://github.com/tf2pickup-pl/server/commit/ef30ffd05f11fdc5f0b74b4fcd08f05bc0156ea8))

## [3.0.2](https://github.com/tf2pickup-pl/server/compare/3.0.1...3.0.2) (2020-06-18)


### Bug Fixes

* fix recursive game server assignment ([#452](https://github.com/tf2pickup-pl/server/issues/452)) ([ab08f22](https://github.com/tf2pickup-pl/server/commit/ab08f22e7aa33b5bd4ea302d8039bb47a07bab26))
* **deps:** update dependency nestjs-typegoose to v7.1.28 ([#449](https://github.com/tf2pickup-pl/server/issues/449)) ([af9de32](https://github.com/tf2pickup-pl/server/commit/af9de3207fec4a4f7667b113493743f6cf12deda))

## [3.0.1](https://github.com/tf2pickup-pl/server/compare/3.0.0...3.0.1) (2020-06-18)


### Bug Fixes

* fix hall of fame reporting ([#445](https://github.com/tf2pickup-pl/server/issues/445)) ([15780b7](https://github.com/tf2pickup-pl/server/commit/15780b779153b1fad714970b74815ab876d23f25))

# [3.0.0](https://github.com/tf2pickup-pl/server/compare/2.9.1...3.0.0) (2020-06-17)


### Bug Fixes

* delete discord announcement when player is subbing himself ([#441](https://github.com/tf2pickup-pl/server/issues/441)) ([5c0fa5c](https://github.com/tf2pickup-pl/server/commit/5c0fa5c6e8a4538286491743f9d436aa3d90ae4a))
* emit updated Game objects on game events ([#443](https://github.com/tf2pickup-pl/server/issues/443)) ([5ce71e8](https://github.com/tf2pickup-pl/server/commit/5ce71e8d5a917dfa576606d3721bcca0cef45cd9))
* **deps:** update dependency helmet to v3.23.1 ([#440](https://github.com/tf2pickup-pl/server/issues/440)) ([0e59897](https://github.com/tf2pickup-pl/server/commit/0e598977f55446d4bc3a5b01327a36125d8ff4cf))
* Game model migration ([#439](https://github.com/tf2pickup-pl/server/issues/439)) ([2898e76](https://github.com/tf2pickup-pl/server/commit/2898e76458b993f7172c14eb81159f4ee1729332))
* **deps:** update dependency mongoose to v5.9.19 ([#438](https://github.com/tf2pickup-pl/server/issues/438)) ([896aac5](https://github.com/tf2pickup-pl/server/commit/896aac5fbf5aadc9e58049b19fe6c3e10030c38b))
* ignore .migrate ([0a6d4e2](https://github.com/tf2pickup-pl/server/commit/0a6d4e29e5297af8ad2df8261b02a1f207e4aa55))
* update GamePlayer & Game indexes ([8532f26](https://github.com/tf2pickup-pl/server/commit/8532f269b46e672cf21028993d41cf2e5bebe7cc))
* **deps:** pin dependency migrate to 1.6.2 ([#435](https://github.com/tf2pickup-pl/server/issues/435)) ([fff3e9c](https://github.com/tf2pickup-pl/server/commit/fff3e9c59f0899d519ed18833c7e8ce5d4658da2))


### Code Refactoring

* get rid of Game.players ([#437](https://github.com/tf2pickup-pl/server/issues/437) ([1a9b759](https://github.com/tf2pickup-pl/server/commit/1a9b759fa0156a82cbbba2335a112cdf2dffdf13))
* update Game model to use team names ([#434](https://github.com/tf2pickup-pl/server/issues/434)) ([3fae9ca](https://github.com/tf2pickup-pl/server/commit/3fae9caec26d04c49bbb0cb61b147748a7856b24))


### BREAKING CHANGES

* Game.players is gone, GamePlayer.playerId is renamed to GamePlayer.player
* Game.teams is now gone, GamePlayer.teamId is moved to GamePlayer.team

## [2.9.1](https://github.com/tf2pickup-pl/server/compare/2.9.0...2.9.1) (2020-06-13)


### Bug Fixes

* re-enable default helmet middleware ([ada5cf2](https://github.com/tf2pickup-pl/server/commit/ada5cf2890b99f804b14cff95678d182ab3cfeac))

# [2.9.0](https://github.com/tf2pickup-pl/server/compare/2.8.1...2.9.0) (2020-06-13)


### Bug Fixes

* **deps:** update dependency helmet to v3.23.0 ([#430](https://github.com/tf2pickup-pl/server/issues/430)) ([dfbbd9a](https://github.com/tf2pickup-pl/server/commit/dfbbd9a9ceb6d867ccf27db97ad1a3a00bc09653))
* handle missing discord guild ([#432](https://github.com/tf2pickup-pl/server/issues/432)) ([e0b229c](https://github.com/tf2pickup-pl/server/commit/e0b229ca2c97b6f3c2ca0ee13b9f57c30e19a7a5))


### Features

* add CSP headers ([#431](https://github.com/tf2pickup-pl/server/issues/431)) ([fac778e](https://github.com/tf2pickup-pl/server/commit/fac778edf2a7166a0a7b57836ed6e7c0041e4c3a))

## [2.8.1](https://github.com/tf2pickup-pl/server/compare/2.8.0...2.8.1) (2020-06-12)


### Bug Fixes

* **discord:** send actual embeds ([#429](https://github.com/tf2pickup-pl/server/issues/429)) ([64f75ab](https://github.com/tf2pickup-pl/server/commit/64f75ab0433b1ba58e35dc1fc5d4bc53a17a2e9e))

# [2.8.0](https://github.com/tf2pickup-pl/server/compare/2.7.0...2.8.0) (2020-06-12)


### Bug Fixes

* **deps:** update dependency helmet to v3.22.1 ([#421](https://github.com/tf2pickup-pl/server/issues/421)) ([1fe29fa](https://github.com/tf2pickup-pl/server/commit/1fe29fa14dceef453bf6390da6cfb7b6c7bbfe92))


### Features

* **discord:** add admin responsible field for discord admin notifications ([#427](https://github.com/tf2pickup-pl/server/issues/427)) ([dc7634f](https://github.com/tf2pickup-pl/server/commit/dc7634f17eb2a0af36373b8a2dbc4f359fd622a7))
* **discord:** add server started notification ([#428](https://github.com/tf2pickup-pl/server/issues/428)) ([765b4df](https://github.com/tf2pickup-pl/server/commit/765b4dfc47adaa9b30d031ce3adfdaf04b3895c3))
* **discord:** delete substitute request msgsWhen the substitute request is canceled or resolved delete the discordannouncement. ([#426](https://github.com/tf2pickup-pl/server/issues/426)) ([72415cf](https://github.com/tf2pickup-pl/server/commit/72415cfa965eae5ead4f01b7f687b627d740a3f9))

# [2.7.0](https://github.com/tf2pickup-pl/server/compare/2.6.3...2.7.0) (2020-06-10)


### Bug Fixes

* ignore match start after it has been ended ([#422](https://github.com/tf2pickup-pl/server/issues/422)) ([b6e2958](https://github.com/tf2pickup-pl/server/commit/b6e29580ace014a223867842521bbaa1c304313d))
* **deps:** update dependency nestjs-console to v3.0.6 ([#420](https://github.com/tf2pickup-pl/server/issues/420)) ([147fcbd](https://github.com/tf2pickup-pl/server/commit/147fcbd6c3ffe8028939163bd3c214f67c29e4be))


### Features

* **ci:** add release-it support ([aafcdfb](https://github.com/tf2pickup-pl/server/commit/aafcdfb50c0d56c21e532d25c991fedf0a591185))

# [2.6.3](https://github.com/tf2pickup-pl/server/compare/2.6.2...2.6.3) (2020-06-10)

### Fixes
* Game event synchronization ([a8473ea](https://github.com/tf2pickup-pl/server/commit/a8473eae4032a2e607af50bd66b4907e791dc3ec))
* Update 6v6 config ([01f66d7](https://github.com/tf2pickup-pl/server/commit/01f66d7765f8764d3f2ec15b798ca4d9c6acb6a5))
* Update 9v9 config ([cdd8afc](https://github.com/tf2pickup-pl/server/commit/cdd8afc49c2b31a457eece04ec3e111fbab58148))

# [2.6.2](https://github.com/tf2pickup-pl/server/compare/2.6.1...2.6.2) (2020-05-25)

### Fixes
* Get rid of empty skill change notifications ([4d7447b](https://github.com/tf2pickup-pl/server/commit/4d7447bfe6b4cc584a82e14e0a478053344989ce))
* Remove TwitchGateway namespace ([80d7e11](https://github.com/tf2pickup-pl/server/commit/80d7e1143b5d0fb7f86f37655d503fa6130b564f))

# [2.6.1](https://github.com/tf2pickup-pl/server/compare/2.6.0...2.6.1) (2020-05-17)

### Fixes
* Disable streams for players with active bans only ([31db9bb](https://github.com/tf2pickup-pl/server/commit/31db9bb3bb055cdc126bbb8aa1c154e3e9393974))

# [2.6.0](https://github.com/tf2pickup-pl/server/compare/2.5.1...2.6.0) (2020-05-16)

### Features
* twitch.tv integration ([be73490](https://github.com/tf2pickup-pl/server/commit/be73490c2b50b65f7b1fc9db18e88260f40c669a))
* Configurable map cooldown ([83521e7](https://github.com/tf2pickup-pl/server/commit/83521e746abff8e667422af311ef552322762b4a))
* Add database indexes ([da74427](https://github.com/tf2pickup-pl/server/commit/da744272ad17b167f022dae2f047b7024763d1ea))
* Notify admins on name change ([b76a0b8](https://github.com/tf2pickup-pl/server/commit/b76a0b872791d9c7bacf38fcd78b1f078aa118e9))
* Notify admins on skill change ([f1d043e](https://github.com/tf2pickup-pl/server/commit/f1d043eed78ff984c9e8f5d164434bafa39231c0))

### Refactor
* DiscordModule ([bfe35e7](https://github.com/tf2pickup-pl/server/commit/bfe35e7877e82c7ea22138a50539fa6d005a053a))

# [2.5.1](https://github.com/tf2pickup-pl/server/compare/2.5.0...2.5.1) (2020-05-02)

### Fixes
* Handle semicolons in csv files on skill import ([215cb4e](https://github.com/tf2pickup-pl/server/commit/215cb4e91ec8f86ddbe89902c07ee05532087f03))
* Use class name as skill map key ([9eb85ad](https://github.com/tf2pickup-pl/server/commit/9eb85ad2b560680d9d92121ed182172450705bfb))

# [2.5.0](https://github.com/tf2pickup-pl/server/compare/2.4.1...2.5.0) (2020-05-02)

### Features
* Export player skills ([cf0507f](https://github.com/tf2pickup-pl/server/commit/cf0507f64ba39ed0cd3e0cb31ddf524d421727a6))
* Import player skills ([828810a](https://github.com/tf2pickup-pl/server/commit/828810a9f2dfcc5b52951a022b41a7683cf3c718))

# [2.4.1](https://github.com/tf2pickup-pl/server/compare/2.4.0...2.4.1) (2020-04-23)

### Fixes
* Handle missing execConfigs option ([836bcfd](https://github.com/tf2pickup-pl/server/commit/836bcfdb8998d1e4a8750d6b385b2fc40c42e38d))

# [2.4.0](https://github.com/tf2pickup-pl/server/compare/2.3.0...2.4.0) (2020-04-22)

### Features
* Serve documents ([4ca1286](https://github.com/tf2pickup-pl/server/commit/4ca12861ee8f84e354d4b6fddac00b0c6d58df31))
* 9v9 gamemode support ([91e73d3](https://github.com/tf2pickup-pl/server/commit/91e73d349f27bd7b8cf48ce33d9096588e057277))
* Per-map game config ([5186325](https://github.com/tf2pickup-pl/server/commit/518632589f18a7dd5b8abec78db70fce5d51a461))
* Add ETF2L season 36 preseason cup maps ([4acc1f3](https://github.com/tf2pickup-pl/server/commit/4acc1f38bcac18220cccf5ad3689b8f859bcffc4))

### Fixes
* Handle Steam API error code 500 ([e5a2f8e](https://github.com/tf2pickup-pl/server/commit/e5a2f8ece482ecd2e1a9b9a6d69da097ff233d3b))

# [2.3.0](https://github.com/tf2pickup-pl/server/compare/2.2.0...2.3.0) (2020-03-04)

### Features
* Verify TF2 in-game hours ([18a57a3](https://github.com/tf2pickup-pl/server/commit/18a57a36aa9a3aa74b5073e080f37fbfc34cb316))

# [2.2.0](https://github.com/tf2pickup-pl/server/compare/2.1.0...2.2.0) (2020-03-03)

### Features
* Whitelist support ([0b1280c](https://github.com/tf2pickup-pl/server/commit/0b1280cb92e9f92d66393f8db19f53a40f664914))

# [2.1.0](https://github.com/tf2pickup-pl/server/compare/2.0.2...2.1.0) (2020-02-26)

### Features
* Announce player substitutes in-game ([8f1c154](https://github.com/tf2pickup-pl/server/commit/8f1c15417b67fe8b0e0e8892f382eff1aa11fb3d))

### Fixes
* Downgrade cp_reckoner to version rc2 ([d175651](https://github.com/tf2pickup-pl/server/commit/d175651c6f8d70c326284ad94d24a272b83189ee))
* Cleanup verbose logs ([b27d977](https://github.com/tf2pickup-pl/server/commit/b27d9778e18edf02a3d97104fe1bafb0b77fef3f))
* Fix PlayerBansService test ([a47359f](https://github.com/tf2pickup-pl/server/commit/a47359f4da5f40f3cdda0e6dfa54e9614e87cea9))
* Don't restart ended matches ([9256168](https://github.com/tf2pickup-pl/server/commit/92561685d701bc5aae55ed7f7418049b72e0b683))

# [2.0.2](https://github.com/tf2pickup-pl/server/compare/2.0.1...2.0.2) (2020-02-16)

### Fixes
* Kick the replacement player from the queue ([77e858e](https://github.com/tf2pickup-pl/server/commit/77e858e93c4e1ce01b6aa0ce0497652b63f5e2e9))

# [2.0.1](https://github.com/tf2pickup-pl/server/compare/2.0.0...2.0.1) (2020-02-14)

### Fixes
* Handle demoting players ([2b2d01d](https://github.com/tf2pickup-pl/server/commit/2b2d01dc57c4a8a8c8c9e245f0fd19acf353b3a6))

# [2.0.0](https://github.com/tf2pickup-pl/server/compare/1.1.2...2.0.0) (2020-02-14)

### Features
* Player substitutes ([69ec724](https://github.com/tf2pickup-pl/server/commit/69ec724c1ed163226cc2f6998180abcdcbbf5d41))
* Refined friends sytem ([fa8ad5b](https://github.com/tf2pickup-pl/server/commit/fa8ad5b994a7d2b3ef3f2b33160e42da184303fd))
* Player connection status ([f6f613a](https://github.com/tf2pickup-pl/server/commit/f6f613a3e79d8adc5f57f8e7b40c17dd92cba71d))
* Remove expired refresh tokens ([b534922](https://github.com/tf2pickup-pl/server/commit/b534922f214efe0d598fee9806e1b9330a3d2f28))
* Update player role via the  API ([b286a1b](https://github.com/tf2pickup-pl/server/commit/b286a1bdc192a6fbe25be9c54486fc0ee5f61513))
* Discord notifiation upon ban revoke ([dcbdf1c](https://github.com/tf2pickup-pl/server/commit/dcbdf1c7c2477c81187b8f41b3889fcf9716dd56))
* Deburr player names before setting them up on the game server ([8ca2e4d](https://github.com/tf2pickup-pl/server/commit/8ca2e4dd80bbeddd88034423ae1f1446d8124974))
* Match score reporting ([1d891b2](https://github.com/tf2pickup-pl/server/commit/1d891b22308d25773afd0425c65d31d5a9284a9c))
* Provide STV connect string ([8de4a34](https://github.com/tf2pickup-pl/server/commit/8de4a347eaf278f93316df4a3cf467004a30f74c))
* Launch orphaned games ([434d702](https://github.com/tf2pickup-pl/server/commit/434d702672e036ecd13547452737453909c7d7ea))

### Fixes
* Deny registering profiles with active ETF2L bans ([be79d20](https://github.com/tf2pickup-pl/server/commit/be79d207a3ff1d6ce723fca5f204d9d7fa85323b))

# [1.1.2](https://github.com/tf2pickup-pl/server/compare/1.1.1...1.1.2) (2020-01-05)

### Fixes
* one medic's friend pick was not taken into account ([b850c9d](https://github.com/tf2pickup-pl/server/commit/b850c9d3cb6320b415a408a25a09168007e1f680))

# [1.1.1](https://github.com/tf2pickup-pl/server/compare/1.1.0...1.1.1) (2019-12-30)

### Fixes
* profile creation ([64346a1](https://github.com/tf2pickup-pl/server/commit/64346a1a376963077d0580c2247b7b79836ded17))
* handle uninitialized skill  ([640e9e2](https://github.com/tf2pickup-pl/server/commit/640e9e2b8a6b13c1ba27c5e4eca94d1767ad6cfc))

# [1.1.0](https://github.com/tf2pickup-pl/server/compare/1.0.4...1.1.0) (2019-12-29)

### Features
* get all players' skills ([f1548ea](https://github.com/tf2pickup-pl/server/commit/f1548ea1b8b4d23eab4c68af57fec8c735b8e436))

### Fixes
* queue fixes ([58506f1](https://github.com/tf2pickup-pl/server/commit/58506f1e6463814ae0576d1b3020c3110615ce23))

# [1.0.4](https://github.com/tf2pickup-pl/server/compare/1.0.3...1.0.4) (2019-12-28)

### Fixes
* queue ready up hotfix

# [1.0.3](https://github.com/tf2pickup-pl/server/compare/1.0.2...1.0.3) (2019-12-28)

### Fixes
* queue ready up behavior
* find server by log event source

# [1.0.2](https://github.com/tf2pickup-pl/server/compare/1.0.1...1.0.2) (2019-12-28)

### Fixes
* fix 6v6.json config

# [1.0.1](https://github.com/tf2pickup-pl/server/compare/1.0.0...1.0.1) (2019-12-28)

### Fixes
* handle player friends

# [1.0.0](https://github.com/tf2pickup-pl/server/releases/tag/1.0.0) (2019-12-28)

* Initial release
* Supports all features of the old `server-legacy` project
