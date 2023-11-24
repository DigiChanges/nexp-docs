# Quick Start

## NEXP CLI

[Nexp CLI](https://github.com/DigiChanges/nexp-cli)

> This CLI is made to be able to quickly create the NExp(https://github.com/DigiChanges/node-experience) boilerplate with all the content you want it to have.
> 
> It allows you to choose between Mongoose and MikroORM when it comes to database persistence. In addition, actually we only have Fastify for the HTTP library.
> 
> This tool allows you to use NExp without the need to modify the business logic.

## Installation

First, install nexp-cli using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

## Step by Step
#### First of all, install NExp cli package globally.

```
ubuntu@nexp: ~ $ npm install -g nexp-cli
```

#### Currently, there is a `create` command call, in the future more commands will be added.

```
ubuntu@nexp: ~ $ nexp-cli
Usage: nexp-cli [options] [command]
NExp CLI to create a boilerplate projects and add new domains

Options:
   -h, --help      display help for command
Commands:
   create          Create new NExp project.
```

#### Write the name of the project.

```
ubuntu@nexp: ~ $ nexp-cli create
= Choose your destiny =
│                     │  
│     NEXP CLI        │
│                     │ 
=======================

? Project Name (my-project-name) revolutionpr
```

#### Choose the ORM.

```
ubuntu@nexp: ~ $ nexp-cli create
= Choose your destiny =
│                     │  
│     NEXP CLI        │
│                     │ 
=======================

? Project Name revolutionpr
? Choose an ORM. (Use arrow keys)
> Mongoose
  MikroORM
```

#### And wait for each action to complete.

```
ubuntu@nexp: ~ $ nexp-cli create
= Choose your destiny =
│                     │  
│     NEXP CLI        │
│                     │ 
=======================

? Project Name revolutionpr
? Choose an ORM. Mongoose
{ projectName: 'revolutionpr', orm: 'Mongoose }
✓ Initialization
✓ Copy Index Files
✓ Copy Root Files
✓ Set .env file
✓ Copy Domain Files
✓ Clean Domain Files
✓ Create Package JSON
```

#### Copy .env.dev to .env and install dependencies with pnpm.

```
cp .env.dev .env
```
```
pnpm install
```

#### Execute `make dev` command or `STAGE=dev docker-compose up --build -d` to create docker containers.

* node
* db
* cache
* mail
* minio

And it's ready to code.

## Bash dev.init.sh Content
```bash
#!/usr/bin/env bash

pnpm command syncRolesPermission
pnpm command createBucket --name experience --region us-east-1
```

## Minio Browser

[http://localhost:9001/minio](http://localhost:9001/minio)


## Execute TEST Environment

To run the tests, we need to install the packages and transpile the code, we also need the `.env` environment variable to exist.

```bash
pnpm test
```

## Test different folder

```bash
pnpm test src/[Module]/Tests
```

Example Unique Test

```bash
pnpm test src/Item/Tests
```

## How to use MikroORM:

To change to MikroORM, the following steps must be followed:
     
To take an example, we are going to use Postgres.
     
1. Environment variables have to be changed.
   1. `DB_PORT=27017 -> DB_PORT=5432`
   2. `DB_TYPE_DEFAULT=Mongoose -> DB_TYPE_DEFAULT=MikroORM`
   3. `DB_TYPE=postgresql`

2. Finally, we have a command with Makefile to lift the corresponding containers.
   1. `make dev_sql`
   2. The command with docker compose would be:
            
    `STAGE=dev docker-compose -f docker-compose.yml -f docker-compose.sql.yml up --build -d`

In the case of not using Mongoose, you have to synchronize the database tables.
With this command, you can synchronize them regardless if you are using MikroORM.

```bash
docker-compose exec node bash
pnpm sync-db
```
