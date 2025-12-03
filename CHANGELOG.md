# Changelog

## 0.3.1 (2025-12-03)

Full Changelog: [v0.3.0...v0.3.1](https://github.com/m3ter-com/m3ter-sdk-typescript/compare/v0.3.0...v0.3.1)

### Chores

* update SDK settings ([29aa34c](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/29aa34c72231c1ee27827cd16fda17157ae850ef))

## 0.3.0 (2025-12-03)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/m3ter-com/m3ter-sdk-typescript/compare/v0.2.0...v0.3.0)

### Features

* add OAuth token refreshing ([f5a73c9](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/f5a73c93aa3b9d78d80a151d8b83ee1368a0d183))
* add OAuth token refreshing ([#22](https://github.com/m3ter-com/m3ter-sdk-typescript/issues/22)) ([feeaab9](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/feeaab98726f9fa6d519e063d0307af38b6f683d))
* **api:** Add examples to integrations and events ([2cd270b](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/2cd270b0366925e451c57b33b6d44153280b81fb))
* **api:** add OAuth token fetching ([5734402](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/57344020b773f49996aefe6988d145226d1f98c6))
* **api:** add OAuth token fetching ([#8](https://github.com/m3ter-com/m3ter-sdk-typescript/issues/8)) ([2fc5a64](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/2fc5a644cc28eae3780c82de80f59f3071300384))
* **api:** manual updates ([af62098](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/af62098544623c92cacd9063d105fd7d881208c8))
* **api:** spec update ([f29f887](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/f29f8874d20fb1fae2ae54a6e1c9a8d731581ed3))
* Update base URL for measurement submissions ([#3](https://github.com/m3ter-com/m3ter-sdk-typescript/issues/3)) ([6f5308c](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/6f5308cf466af97ada23b9334d85ddf3a228e39b))
* update README for org ID env variable ([#63](https://github.com/m3ter-com/m3ter-sdk-typescript/issues/63)) ([ce88f3b](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/ce88f3be2f563f4585f027850847e559e9f81a2a))


### Bug Fixes

* coerce nullable values to undefined ([089870e](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/089870e40cbc021e04dc8fd894dcc19c05d69d13))
* Update README to fix org ID param name ([#4](https://github.com/m3ter-com/m3ter-sdk-typescript/issues/4)) ([0669cfc](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/0669cfc5bd0dbfb19132fa1427941d5c47c42372))


### Performance Improvements

* faster formatting ([bd550f2](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/bd550f2c44595d68463eef5d78cdca1d25ea7d52))


### Chores

* ci build action ([3f632f9](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/3f632f96c5efde07f25eb1f5042a90f709c67370))
* **client:** fix logger property type ([76ec10f](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/76ec10f9175cbf56ee80785500e5b74ed9ac2500))
* **deps:** update dependency node-fetch to v2.6.13 ([4a5c243](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/4a5c2431d848b224e5c5bc559e3af9141dbda8a9))
* do not install brew dependencies in ./scripts/bootstrap by default ([c99b42c](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/c99b42ceb480db83debcffdc647dda1fcc498128))
* go live ([2e2b355](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/2e2b35550f28c7cff942371f747f209446cf62ed))
* **internal:** codegen related update ([ef030e4](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/ef030e4f171452480398829ccd16da553db7e41c))
* **internal:** fix incremental formatting in some cases ([a6f9c3d](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/a6f9c3df004c5974ac2403c7dea44cc385fbe429))
* **internal:** formatting change ([4b51d6c](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/4b51d6c89d9752c14af896c51207f20fc41195ed))
* **internal:** ignore .eslintcache ([ae7b6f3](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/ae7b6f3b4d83ab497e082a0d60cff52cbf9e16c7))
* **internal:** move publish config ([578ecc4](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/578ecc4de896df0e225621b39579563e35da2b63))
* **internal:** remove .eslintcache ([6f8e565](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/6f8e5651db519dc2ee38bfb4a60c8428b58c2403))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([eebc22b](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/eebc22b48011f6ba4e3e4812742d152c5cf69102))
* **internal:** update comment in script ([acb8e0b](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/acb8e0b284865227de5ee8e9922a55c8f2dbc181))
* **internal:** upgrade eslint ([9878ff7](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/9878ff71382d48951762d213c7a37893ac6fe241))
* **internal:** use npm pack for build uploads ([057c19f](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/057c19f694500a8b2c2f881330e47c1cf6f92726))
* update @stainless-api/prism-cli to v5.15.0 ([c230219](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/c2302196babd01815966515b6e644ce4edadd7af))
* update CI script ([45147ef](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/45147efbf5959899ec40afa8b492e6c175780421))
* update SDK settings ([f00e703](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/f00e703b9e8324516af535de3752f1541a1b0706))


### Build System

* **deps:** bump @babel/helpers from 7.23.6 to 7.27.0 ([#62](https://github.com/m3ter-com/m3ter-sdk-typescript/issues/62)) ([ff45fef](https://github.com/m3ter-com/m3ter-sdk-typescript/commit/ff45fef581c823eb4a945cd5ae6cd9354b5e2636))

## 0.2.0 (2025-08-01)

Full Changelog: [v0.1.0-alpha...v0.2.0](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha...v0.2.0)

### Features

* **api:** add aggregationId query param to ListPricings ([adf80bc](https://github.com/m3ter-com/m3ter-sdk-node/commit/adf80bca981e4b661fd2de680bf9bd0de600bf2d))
* **api:** add statements ([451568b](https://github.com/m3ter-com/m3ter-sdk-node/commit/451568ba8d3cc07580a565f21fb7a23173d05a14))
* **api:** Introduce OrganizationConfigRequest model ([5016ed3](https://github.com/m3ter-com/m3ter-sdk-node/commit/5016ed3274b5d5efd817e8d58a8502aa793de0b8))
* **api:** mark `version` attribute as computed in Terraform ([c880758](https://github.com/m3ter-com/m3ter-sdk-node/commit/c8807588fb1f44c38ec9203cd0f3a8d8c3d2dbd1))
* **api:** OpenAPI spec update ([514a75f](https://github.com/m3ter-com/m3ter-sdk-node/commit/514a75f904ea99602c013a49fd3f0317a93727e3))
* **api:** remove audit fields from Terraform provider ([ac61682](https://github.com/m3ter-com/m3ter-sdk-node/commit/ac61682d3995f9e1bf8420c4287318dd8faa486a))
* **api:** Set "version" attribute to "computed_optional" in Terraform ([3b87e79](https://github.com/m3ter-com/m3ter-sdk-node/commit/3b87e794db13cc8bb99f6b9e8682212621cb720b))
* **api:** Spec fixes ([2be2d73](https://github.com/m3ter-com/m3ter-sdk-node/commit/2be2d73b3c0b44b76fc15718edd69a6658028cff))
* **api:** update open api spec ([0aa5bca](https://github.com/m3ter-com/m3ter-sdk-node/commit/0aa5bca8e58957b83aeb2de0ff2ecd05b03925d4))
* **api:** update OpenAPI spec + associated fixes ([bcac5e1](https://github.com/m3ter-com/m3ter-sdk-node/commit/bcac5e1c4f7d15b78e976e580bcfbb95609ba428))
* **client:** add support for endpoint-specific base URLs ([a099c62](https://github.com/m3ter-com/m3ter-sdk-node/commit/a099c62152f98e48a240b40cc4c18569e90a018f))


### Bug Fixes

* **api:** terraform release readiness ([159826d](https://github.com/m3ter-com/m3ter-sdk-node/commit/159826d4a9a4e4702f5a6efae1e260db89b45994))
* **api:** use WebhookDestinationResponse in webhook endpoint response schemas ([f33c431](https://github.com/m3ter-com/m3ter-sdk-node/commit/f33c431ffa08c99e4a7692dd0b1e104ccd8cb0af))
* **ci:** release-doctor — report correct token name ([c11d948](https://github.com/m3ter-com/m3ter-sdk-node/commit/c11d94811c1408194bc1d4b1c1ed386e757e7a2d))
* **client:** don't send `Content-Type` for bodyless methods ([1d09074](https://github.com/m3ter-com/m3ter-sdk-node/commit/1d0907476d8e038a3ede04120031843bdfd51eb0))
* publish script — handle NPM errors correctly ([4f0373c](https://github.com/m3ter-com/m3ter-sdk-node/commit/4f0373c964530fa91bf40f13868651852939b2d1))


### Chores

* **ci:** add timeout thresholds for CI jobs ([81d1fb9](https://github.com/m3ter-com/m3ter-sdk-node/commit/81d1fb92397812a486af42a638518cfd31220daa))
* **ci:** bump node version for release workflows ([7121d83](https://github.com/m3ter-com/m3ter-sdk-node/commit/7121d83eef3d0cc7c7c97674cb57142ab126297c))
* **ci:** enable for pull requests ([836c364](https://github.com/m3ter-com/m3ter-sdk-node/commit/836c3640e459dd4874dfc43ca49c2fbfda7abcb8))
* **ci:** only run for pushes and fork pull requests ([e3ac5b6](https://github.com/m3ter-com/m3ter-sdk-node/commit/e3ac5b6db7a83fcde84c74c16e2366ac7457af2b))
* **ci:** only use depot for staging repos ([1b05902](https://github.com/m3ter-com/m3ter-sdk-node/commit/1b05902870713d5d0874a229ce14791cd9b07782))
* **ci:** run on more branches and use depot runners ([a3ddaad](https://github.com/m3ter-com/m3ter-sdk-node/commit/a3ddaad109d25f67f59d0ab7fce52027d6d3468b))
* **client:** minor internal fixes ([21166b1](https://github.com/m3ter-com/m3ter-sdk-node/commit/21166b19fcf1b1fe1a9498d2d4ae28d92b0cbfff))
* **docs:** add missing deprecation warnings ([087ac8e](https://github.com/m3ter-com/m3ter-sdk-node/commit/087ac8e3a051670f5b66ec603c068880b071a6ff))
* **docs:** grammar improvements ([c0c9bdd](https://github.com/m3ter-com/m3ter-sdk-node/commit/c0c9bdd193a6eaa604840e48cffae2ee2123a74d))
* **docs:** use top-level-await in example snippets ([4e2459b](https://github.com/m3ter-com/m3ter-sdk-node/commit/4e2459bdfd7e92bb887c8eab5a7e58d17c6e0785))
* improve publish-npm script --latest tag logic ([c9a73a1](https://github.com/m3ter-com/m3ter-sdk-node/commit/c9a73a1490150ef69fa060e4a9cd137ee5234414))
* **internal:** codegen related update ([1fb9821](https://github.com/m3ter-com/m3ter-sdk-node/commit/1fb9821e361584223ac9098611d2ec7787ad7c95))
* **internal:** codegen related update ([e420e63](https://github.com/m3ter-com/m3ter-sdk-node/commit/e420e6395c507b0d2198d288c1a9be112d35f5cf))
* **internal:** make base APIResource abstract ([c4498dc](https://github.com/m3ter-com/m3ter-sdk-node/commit/c4498dce8edf119af29a88f01eb33f57d42fd5e3))
* **internal:** remove redundant imports config ([ada0ea1](https://github.com/m3ter-com/m3ter-sdk-node/commit/ada0ea1dc6f8d0d36a1cab4d71d542afe8995651))
* **internal:** updates ([3a0321a](https://github.com/m3ter-com/m3ter-sdk-node/commit/3a0321a9e639e286f3866a07836249545c7da53d))
* make more param objects optional ([e03cd61](https://github.com/m3ter-com/m3ter-sdk-node/commit/e03cd61739dab323284dfeda55b7499a45b4b3eb))
* make some internal functions async ([83861c6](https://github.com/m3ter-com/m3ter-sdk-node/commit/83861c63ee11bcea2cb309229e0c77b41e110654))
* mention unit type in timeout docs ([4b79df9](https://github.com/m3ter-com/m3ter-sdk-node/commit/4b79df9dce7a00237a170e046826cd1fd2a65b6d))


### Documentation

* add examples to tsdocs ([540c6ae](https://github.com/m3ter-com/m3ter-sdk-node/commit/540c6aefb87504f0edba9fa48efb71047f93a889))
* **pagination:** improve naming ([69aa917](https://github.com/m3ter-com/m3ter-sdk-node/commit/69aa91778dbea77de10b485389d65ef050d0bece))
* **readme:** fix typo ([b83639b](https://github.com/m3ter-com/m3ter-sdk-node/commit/b83639b8f232cf6cd6ae5255e25826a8e90200b4))


### Refactors

* **types:** replace Record with mapped types ([d7f8a5f](https://github.com/m3ter-com/m3ter-sdk-node/commit/d7f8a5fec2bd9612a3f9aa9499b88151174928ad))

## 0.1.0-alpha (2025-04-10)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.9...v0.1.0-alpha)

### Features

* **api:** add measurement request model ([11a80d9](https://github.com/m3ter-com/m3ter-sdk-node/commit/11a80d93fd086d929d39978506acdf10d6f8951d))
* **api:** rename DataFieldResponse to DataField and add DerivedField as a model ([b73514f](https://github.com/m3ter-com/m3ter-sdk-node/commit/b73514fb6f40abc09922b0c7203d598703bfa0a4))
* BR-2837: Fix baseURL issue for ingest submissions ([#68](https://github.com/m3ter-com/m3ter-sdk-node/issues/68)) ([66488e4](https://github.com/m3ter-com/m3ter-sdk-node/commit/66488e4ca1e2398a751f7675e104fbfb43201313))


### Chores

* **internal:** reduce CI branch coverage ([51bd674](https://github.com/m3ter-com/m3ter-sdk-node/commit/51bd674d259eb23ebc01526254a1f1922f03dae5))
* **internal:** upload builds and expand CI branch coverage ([#65](https://github.com/m3ter-com/m3ter-sdk-node/issues/65)) ([832d905](https://github.com/m3ter-com/m3ter-sdk-node/commit/832d90577713dc555ba387f0ac2967bdb389a583))

## 0.1.0-alpha.9 (2025-04-09)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* feat: update README for org ID env variable ([#63](https://github.com/m3ter-com/m3ter-sdk-node/issues/63)) ([cac7bae](https://github.com/m3ter-com/m3ter-sdk-node/commit/cac7bae640036753cc58a87638cd90e10a561982))

## 0.1.0-alpha.8 (2025-04-08)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#49](https://github.com/m3ter-com/m3ter-sdk-node/issues/49)) ([55fd57b](https://github.com/m3ter-com/m3ter-sdk-node/commit/55fd57b7c4705d7d5d922886477a9ee1151e0403))
* **api:** make response model names explicit ([#48](https://github.com/m3ter-com/m3ter-sdk-node/issues/48)) ([7e1fe70](https://github.com/m3ter-com/m3ter-sdk-node/commit/7e1fe7035f448a6d60c55ded0339779681742719))
* **api:** update contact email and package name ([#61](https://github.com/m3ter-com/m3ter-sdk-node/issues/61)) ([30e00fb](https://github.com/m3ter-com/m3ter-sdk-node/commit/30e00fb2c07ea3110dd68e2ed4198af21fcd421a))
* **client:** accept RFC6838 JSON content types ([#50](https://github.com/m3ter-com/m3ter-sdk-node/issues/50)) ([0f94da2](https://github.com/m3ter-com/m3ter-sdk-node/commit/0f94da2f28689a224e46ddfd7ced82737fb00cca))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#59](https://github.com/m3ter-com/m3ter-sdk-node/issues/59)) ([c967aec](https://github.com/m3ter-com/m3ter-sdk-node/commit/c967aec928fe07d1e6dacd5a9a4abedbed0d71d8))
* avoid type error in certain environments ([#55](https://github.com/m3ter-com/m3ter-sdk-node/issues/55)) ([597f2f5](https://github.com/m3ter-com/m3ter-sdk-node/commit/597f2f502099ab93d52285d2e972e5fc2138691b))
* **client:** send `X-Stainless-Timeout` in seconds ([#57](https://github.com/m3ter-com/m3ter-sdk-node/issues/57)) ([f4e4bd7](https://github.com/m3ter-com/m3ter-sdk-node/commit/f4e4bd7e3c1e6db8173fc15ee3dd9165f066d5ca))
* **exports:** ensure resource imports don't require /index ([#52](https://github.com/m3ter-com/m3ter-sdk-node/issues/52)) ([fb480bc](https://github.com/m3ter-com/m3ter-sdk-node/commit/fb480bc85024f6c2019ae9adf13d457182bf01df))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#56](https://github.com/m3ter-com/m3ter-sdk-node/issues/56)) ([d7ec43b](https://github.com/m3ter-com/m3ter-sdk-node/commit/d7ec43bd72db551dcb598dc7b5a5c452a99de9c1))
* **mcp:** remove unused tools.ts ([#60](https://github.com/m3ter-com/m3ter-sdk-node/issues/60)) ([81ced42](https://github.com/m3ter-com/m3ter-sdk-node/commit/81ced42284782942b0430385413a0b981ba11384))


### Chores

* **exports:** cleaner resource index imports ([#53](https://github.com/m3ter-com/m3ter-sdk-node/issues/53)) ([ad226f2](https://github.com/m3ter-com/m3ter-sdk-node/commit/ad226f251358a7526ff005a57aa948dcb75a8dd2))
* **exports:** stop using path fallbacks ([#54](https://github.com/m3ter-com/m3ter-sdk-node/issues/54)) ([5df4910](https://github.com/m3ter-com/m3ter-sdk-node/commit/5df4910384b335277541c6ddefa8aef425745043))
* **internal:** add aliases for Record and Array ([#58](https://github.com/m3ter-com/m3ter-sdk-node/issues/58)) ([2cf0430](https://github.com/m3ter-com/m3ter-sdk-node/commit/2cf0430549a3ef4eceddcc62e932bcafeea48522))
* **internal:** remove extra empty newlines ([#51](https://github.com/m3ter-com/m3ter-sdk-node/issues/51)) ([f0161c0](https://github.com/m3ter-com/m3ter-sdk-node/commit/f0161c0c35b660ff018b53b7b02f9801c4ee6a7c))
* update SDK settings ([#46](https://github.com/m3ter-com/m3ter-sdk-node/issues/46)) ([c2d64a0](https://github.com/m3ter-com/m3ter-sdk-node/commit/c2d64a04b1e49c8b7fe5ac09214790d7f11ba2a6))

## 0.1.0-alpha.7 (2025-03-06)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** fixing warnings ([#41](https://github.com/m3ter-com/m3ter-sdk-node/issues/41)) ([66854f9](https://github.com/m3ter-com/m3ter-sdk-node/commit/66854f9864bf3357915e9a468d501ff521e21cde))
* **api:** manual updates ([#42](https://github.com/m3ter-com/m3ter-sdk-node/issues/42)) ([c2c3fa0](https://github.com/m3ter-com/m3ter-sdk-node/commit/c2c3fa0089f6ff10c082f680a6f6a0b368a020f7))


### Chores

* org ID at the client level is required ([#40](https://github.com/m3ter-com/m3ter-sdk-node/issues/40)) ([bb4ed02](https://github.com/m3ter-com/m3ter-sdk-node/commit/bb4ed027150e04b56bfc15cb4d8cd358c3761404))
* org ID client arg is optional ([#38](https://github.com/m3ter-com/m3ter-sdk-node/issues/38)) ([8f0c612](https://github.com/m3ter-com/m3ter-sdk-node/commit/8f0c61278d6326e7399da85568efb915bb9a28e3))

## 0.1.0-alpha.6 (2025-03-03)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** Spec Update + Various Fixes ([#36](https://github.com/m3ter-com/m3ter-sdk-node/issues/36)) ([0d0c5a1](https://github.com/m3ter-com/m3ter-sdk-node/commit/0d0c5a17c7d34e3b4abb5732bcca8edc2f1a9a76))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#34](https://github.com/m3ter-com/m3ter-sdk-node/issues/34)) ([7f4f8dd](https://github.com/m3ter-com/m3ter-sdk-node/commit/7f4f8ddadaea288f59b30e09f8ae1958a794362b))

## 0.1.0-alpha.5 (2025-02-26)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** add missing endpoints ([#30](https://github.com/m3ter-com/m3ter-sdk-node/issues/30)) ([da5a440](https://github.com/m3ter-com/m3ter-sdk-node/commit/da5a4401a8b205f48b20f39f3df2786c272cecd3))
* **api:** snake case method names ([#31](https://github.com/m3ter-com/m3ter-sdk-node/issues/31)) ([edbbbd8](https://github.com/m3ter-com/m3ter-sdk-node/commit/edbbbd81e5f4dd2d46853ce195a45307eb37ab46))
* **api:** update open api spec ([#29](https://github.com/m3ter-com/m3ter-sdk-node/issues/29)) ([cbbb0fe](https://github.com/m3ter-com/m3ter-sdk-node/commit/cbbb0fe5ee2ac2960256933e3a648403593b6c44))

## 0.1.0-alpha.4 (2025-02-24)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Chores

* **internal:** fix devcontainers setup ([#25](https://github.com/m3ter-com/m3ter-sdk-node/issues/25)) ([3860f65](https://github.com/m3ter-com/m3ter-sdk-node/commit/3860f65cd2a08a2bcac7bfeed76a2e3983281b6c))


### Documentation

* remove redundant params from readme ([#27](https://github.com/m3ter-com/m3ter-sdk-node/issues/27)) ([507f7bd](https://github.com/m3ter-com/m3ter-sdk-node/commit/507f7bd4d5741df6072e12f942fccdf630e02e72))

## 0.1.0-alpha.3 (2025-02-21)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* feat: add OAuth token refreshing ([#22](https://github.com/m3ter-com/m3ter-sdk-node/issues/22)) ([39b8427](https://github.com/m3ter-com/m3ter-sdk-node/commit/39b8427ac11f4162d6b79dccc64122bf737a1702))

## 0.1.0-alpha.2 (2025-02-20)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** add more endpoints ([#13](https://github.com/m3ter-com/m3ter-sdk-node/issues/13)) ([1dca748](https://github.com/m3ter-com/m3ter-sdk-node/commit/1dca7489bb894cee0fbd15d45e94deff83bbc313))
* **api:** add OAuth token fetching ([#8](https://github.com/m3ter-com/m3ter-sdk-node/issues/8)) ([2fc5a64](https://github.com/m3ter-com/m3ter-sdk-node/commit/2fc5a644cc28eae3780c82de80f59f3071300384))
* **api:** add orgId path param to client settings ([#19](https://github.com/m3ter-com/m3ter-sdk-node/issues/19)) ([3c32216](https://github.com/m3ter-com/m3ter-sdk-node/commit/3c32216155d9f5388cd10d9c0e66cad7eb1c32a7))
* **api:** create ad hoc data export endpoint ([#17](https://github.com/m3ter-com/m3ter-sdk-node/issues/17)) ([ac27fe4](https://github.com/m3ter-com/m3ter-sdk-node/commit/ac27fe418a4733f7133cd5e5df51901d40909625))
* **api:** Update custom field type information ([#12](https://github.com/m3ter-com/m3ter-sdk-node/issues/12)) ([af5480e](https://github.com/m3ter-com/m3ter-sdk-node/commit/af5480e261a3f99c2d5ba50e55e8b14546d525f3))
* **client:** send `X-Stainless-Timeout` header ([#10](https://github.com/m3ter-com/m3ter-sdk-node/issues/10)) ([265cef5](https://github.com/m3ter-com/m3ter-sdk-node/commit/265cef56fe1b32414231ddd79cf54bea4d3f690a))


### Bug Fixes

* **client:** fix export map for index exports ([#18](https://github.com/m3ter-com/m3ter-sdk-node/issues/18)) ([846a67b](https://github.com/m3ter-com/m3ter-sdk-node/commit/846a67b6ad2f114cfa3d48032284e90e6ede4e62))


### Chores

* **internal:** codegen related update ([#15](https://github.com/m3ter-com/m3ter-sdk-node/issues/15)) ([9f38454](https://github.com/m3ter-com/m3ter-sdk-node/commit/9f384540694de3c7670d4c7066a9e85e5f91e1b8))
* **internal:** codegen related update ([#16](https://github.com/m3ter-com/m3ter-sdk-node/issues/16)) ([ed08169](https://github.com/m3ter-com/m3ter-sdk-node/commit/ed08169f6a2c47c0f80294aab67f8b510cb7c6b3))
* minor change to tests ([#14](https://github.com/m3ter-com/m3ter-sdk-node/issues/14)) ([e0caf89](https://github.com/m3ter-com/m3ter-sdk-node/commit/e0caf894c1d9f8c77d1f93238634b2f44a3431d0))

## 0.1.0-alpha.1 (2025-02-03)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/m3ter-com/m3ter-sdk-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** Config update ([#7](https://github.com/m3ter-com/m3ter-sdk-node/issues/7)) ([ad522cd](https://github.com/m3ter-com/m3ter-sdk-node/commit/ad522cdfc5c9d2fa533270f81c98f14ae03ab753))
* **api:** updated OpenAPI spec ([#6](https://github.com/m3ter-com/m3ter-sdk-node/issues/6)) ([f85cc6e](https://github.com/m3ter-com/m3ter-sdk-node/commit/f85cc6e4b253a2c26d5900ea86a121fbbc9340f3))


### Bug Fixes

* deduplicate unknown entries in union ([#5](https://github.com/m3ter-com/m3ter-sdk-node/issues/5)) ([830f3f8](https://github.com/m3ter-com/m3ter-sdk-node/commit/830f3f8e50c6a74bdc0a62f7e9f8aaa0380f12c5))


### Chores

* go live ([2e2b355](https://github.com/m3ter-com/m3ter-sdk-node/commit/2e2b35550f28c7cff942371f747f209446cf62ed))
* **internal:** add test ([#2](https://github.com/m3ter-com/m3ter-sdk-node/issues/2)) ([4744a4f](https://github.com/m3ter-com/m3ter-sdk-node/commit/4744a4fa23550f810cf21c658eda0168fbae42fb))
* **internal:** codegen related update ([#3](https://github.com/m3ter-com/m3ter-sdk-node/issues/3)) ([da18825](https://github.com/m3ter-com/m3ter-sdk-node/commit/da188259cf7fa7eff4cef56d5340096579e72d07))
* **tests:** skip problematic tests ([#4](https://github.com/m3ter-com/m3ter-sdk-node/issues/4)) ([9f207a2](https://github.com/m3ter-com/m3ter-sdk-node/commit/9f207a2f63cc71cdd7c7f2f9614581e794cd4860))
