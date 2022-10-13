# Dotenv, envalid and config

In this section we will briefly explain how dotenv, envalid and config work together.

The packages to be able to see in detail each one are the following:

[dotenv](https://github.com/motdotla/dotenv)
[envalid](https://github.com/af/envalid)
[config](https://github.com/node-config/node-config)

In Node Experience we use `dotenv` to be able to lift the environment variables from the `.env` file, with `envalid` we can validate and convert the type of each variable, for example if we have an environment variable that is of type `number` For example, it can be the variable `SERVER_PORT` with envalid we can make it validate that it really is a value of type `number`, it also converts the type to `number` since `all environment variables by default are string`. Finally, we have the `config` package that we use to establish different configurations by environment, basically this would be to be able to vary the configuration depending on whether we are in a test or development environment and even production, in addition `we can establish configurations that we do not need change with environment variables`. One of the features that the `config` package has is that it can replace the configuration values with environment variables, for that reason we always use the configuration in the whole project without the need to use the global variable `process.env`, since which is not needed thanks to the `config` package.

The operation process would be as follows:

### Index

The initial file of the project is the `index.ts` inside the `src` inside it we are going to find this.

```ts
/** src -> index.ts **/

const config = MainConfig.getInstance().getConfig();
const app: IApp = AppFactory.create(config.app.default);

const databaseFactory = new DatabaseFactory();
const createConnection: ICreateConnection = databaseFactory.create();
const cache: ICacheRepository = CacheFactory.createRedisCache();
const eventHandler = EventHandler.getInstance();

```

In the first line we can see the return of the config, at that moment it is the first time that the configuration is generated, since it is a singleton it is generated only once in the entire application. So every time we call it, don't believe it back.

## config

Inside the `MainConfig` singleton we will be initializing the environment variables.

```ts

/** src -> Config -> MainConfig **/

import dotenv from 'dotenv';
dotenv.config(); // Need before get config
import { readFile } from 'node:fs/promises';
import { resolve } from 'path';
import Config from 'config';
import { TAlgorithm } from 'jwt-simple';
import { validateEnv } from './validateEnv';

```

As we can see, the first thing we do is import `dotenv` and run it so that it can import and inject the environment variables into the `process.env`, then we import the `config`.

Inside the constructor we have the following:

```ts

/** src -> Config -> MainConfig **/

const cleanEnv: any = validateEnv();

process.env = { ...process.env, ...cleanEnv };

this.mainConfig = Config.util.loadFileConfigs();
```

What you're trying to do here is use `envalid` to clear the environment variables that go through the validation and conversion process. We then manually add them to the `env` global variable and then load the configuration from the `config` package so that it can correctly override the converted and validated environment variables and inject them into the main configuration.

In this same file we can see that there are several `types`, in this case as the way to use the configuration is through the singleton, so we have the configurations typed so that we can understand exactly each configuration since the config package itself does not have that typing ability.
