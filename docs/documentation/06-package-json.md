# Package JSON

## Package Manager

Not too long ago we were using `yarn` as a package manager.

We very recently migrated to `pnpm` the decision to switch is because `pnpm` reduces the number of packages it downloads by making more efficient use of references therefore the final `node_module` is smaller compared to `npm` and ` yarn`. In addition, it seems that it has small moments where it installs the packages faster, especially when the cache exists.

## Script

We will be explaining each script that exists inside the `package.json` file.

### build

* **Representation**: `etsc`.
* **Packages**: [esbuild](https://github.com/evanw/esbuild), [esbuild-node-externals](https://github.com/pradel/esbuild-node-externals), [ esbuild-node-tsc](https://github.com/a7ul/esbuild-node-tsc) and [esbuild-plugin-tsc](https://github.com/thomaschaaf/esbuild-plugin-tsc).
* **Functionality**: This command is responsible for compiling the project written in Typescript.


### command

* **Representation**: `ts-node src/command.ts`.
* **Packages**: [commander](https://github.com/tj/commander.js).
* **Functionality**: This command is used to execute NExp internal commands.


###ci

* **Representation**: `npm run cpy-ci && npm run ts-check && npm run lint`
* **Packages**: [eslint](https://github.com/eslint/eslint), [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) , [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint), [@typescript-eslint/parser](https://github.com/typescript-eslint/ typescript-eslint) and [eslint-plugin-prefer-arrow](https://github.com/TristonJ/eslint-plugin-prefer-arrow).
* **Feature**: This command is used in CircleCI, in a step that checks typing and linter.


### clean

* **Representation**: `rimraf dist/src/*`.
* **Packages**: [rimraf](git://github.com/isaacs/rimraf).
* **Feature**: This command removes all files inside the compiled src folder.


### cpy:ci

* **Representation**: `cp .env.dev .env`.
* **Functionality**: This command is in charge of copying basic environment variables to execute in CircleCI.


###dev

* **Representation**: `nodemon`.
* **Packages**: [nodemon](https://github.com/remy/nodemon).
* **Functionality**: With this command we can execute the project in development mode.


### login:inphysical

* **Representation**: `inphysical login`.
* **Packages**: [infisical](https://github.com/Infisical/infisical-cli).
* **Functionality**: With this command you can log in to infisical.


### pull:env

* **Representation**: `inphysical pull`.
* **Packages**: [infisical](https://github.com/Infisical/infisical-cli).
* **Functionality**: This command downloads the environment variables of the chosen workspace once you have logged in.


### docker:command

* **Representation**: `docker-compose exec node pnpm command`.
* **Feature**: This command executes the commands with `command` but from the docker container `node`.


### lint:fix

* **Representation**: `eslint -c .eslintrc.json ./src --fix`.
* **Packages**: [eslint](https://github.com/eslint/eslint), [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) , [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint), [@typescript-eslint/parser](https://github.com/typescript-eslint/ typescript-eslint) and [eslint-plugin-prefer-arrow](https://github.com/TristonJ/eslint-plugin-prefer-arrow).
* **Feature**: This command runs lint with the fix prefix to automatically fix all possible existing errors or warnings.


### line

* **Representation**: `eslint -c .eslintrc.json ./src`.
* **Packages**: [eslint](https://github.com/eslint/eslint), [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) , [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint), [@typescript-eslint/parser](https://github.com/typescript-eslint/ typescript-eslint) and [eslint-plugin-prefer-arrow](https://github.com/TristonJ/eslint-plugin-prefer-arrow).
* **Feature**: This command runs the linter to view errors and warnings.


### pre:commit

* **Representation**: `lint-staged`.
* **Packages**: [lint-staged](https://github.com/okonet/lint-staged).
* **Functionality**: This command is responsible for compiling the project written in Typescript.


### pre:check

* **Representation**: `pnpm ts-check && pnpm lint`.
* **Feature**: This command does a type and linter check.


### prepare

* **Representation**: `husky install`.
* **Packages**: `husky`.
* **Functionality**: This command installs the necessary elements for husky to be functional in the project.


### start

* **Representation**: `node dist/index.js`.
* **Feature**: This command runs the compiled project in JS.


### test:ci

* **Representation**: `jest --run-in-band --coverage`.
* **Packages**: [jest](https://github.com/facebook/jest), [jest-environment-jsdom](https://github.com/facebook/jest), [jest-environment- node](https://github.com/facebook/jest), and [@shelf/jest-mongodb](https://github.com/shelfio/jest-mongodb).
* **Functionality**: This command is in charge of testing the code.


### test

* **Representation**: `jest --coverage`.
* **Packages**: [jest](https://github.com/facebook/jest), [jest-environment-jsdom](https://github.com/facebook/jest), [jest-environment- node](https://github.com/facebook/jest), and [@shelf/jest-mongodb](https://github.com/shelfio/jest-mongodb).
* **Functionality**: This command is in charge of testing the code.


### test:watch

* **Representation**: `jest --watch --silent --coverage=false`.
* **Packages**: [jest](https://github.com/facebook/jest), [jest-environment-jsdom](https://github.com/facebook/jest), [jest-environment- node](https://github.com/facebook/jest), and [@shelf/jest-mongodb](https://github.com/shelfio/jest-mongodb).
* **Functionality**: This command is responsible for compiling the project written in Typescript.


### tsc

* **Representation**: `tsc`.
* **Packages**: [typescript](https://github.com/Microsoft/TypeScript).
* **Functionality**: This command is enabled to be used in conjunction for Typescript type checking.


### ts:check

* **Representation**: `tsc -p tsconfig.json --noEmit`.
* **Packages**: [typescript](https://github.com/Microsoft/TypeScript).
* **Feature**: This command checks the project types.


### transpile

* **Representation**: `node build.js`.
* **Packages**: [esbuild](https://github.com/evanw/esbuild) and [esbuild-node-externals](https://github.com/pradel/esbuild-node-externals)
* **Feature**: This allows you to transpile the project.


### sync:db

* **Representation**: `ts-node src/Shared/Presentation/Commands/SynchronizeDb.ts`.
* **Feature**: This command allows you to create the database tables when using MikroORM or TypeORM. The choice is made with the configuration default.
