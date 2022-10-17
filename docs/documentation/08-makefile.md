# Makefile

We use Makefile to execute commands in an easier way, and sometimes it cuts when the command to execute is very long. It also allows us to generate code to automate what we need.

## install
  * command: `make install`
  * original: `pnpm install`


## up
  * command: `make up`
  * original: `docker-compose up -d`


## down
  * command: `make down`
  * original: `docker-compose down`


## stop
  * command: `make stop`
  * original: `docker-compose stop`


## dev
  * command: `make dev`
  * original: `STAGE=dev docker-compose up --build -d`


## prod
  * command: `make prod`
  * original: `STAGE=prod docker-compose up --build -d`


## dev_sql
  * command: `make dev_sql`
  * original: `STAGE=dev docker-compose -f docker-compose.yml -f docker-compose.sql.yml up --build -d`
  * description: Usamos el archivo docker-compose.yml como base y lo sobreescribimos con los containers del siguiente archivo docker-compose.sql.yml.


## exec
  * command: `make exec`
  * original: `docker-compose exec node bash`
  * description: 

## sh
  * command: `make sh`
  * original: `docker-compose exec node sh`


## test
  * command: `make test`
  * original: `docker-compose exec node pnpm test`


## ts_check
  * command: `make ts_check`
  * original: `docker-compose exec node pnpm ts-check`


## init
  * command: `make init`
  * original: `docker-compose exec node sh dev.init.sh`


## clean
  * command: `make clean`
  * original: ``

