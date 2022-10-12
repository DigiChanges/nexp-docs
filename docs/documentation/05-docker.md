# Docker and Docker Compose

## Docker

The Dockerfile is divided into 4 parts.

### dev

This layer takes care of copying some important files to the Dockerfile and then running a command to start the nodejs service.

### build

This layer is responsible for installing the packages and transpiling the project. This step is important for the execution process in a production environment.

### prerelease

This layer is responsible for installing only the packages for production, so that the final size of the image is lighter in production.

### prod

This layer is responsible for preparing the last details for the production image. Copy the necessary elements from the prerelease layer.

### Note

1. Inside the Dockerfile code we can find the `dumb-init` installation [GitHub](https://github.com/Yelp/dumb-init). Basically it is a simple process supervisor and init system designed to run as PID 1 inside minimal container environments.
2. Using the Dockerfile for local development is not necessary. It can be booted up locally without any problems, by installing the packages and doing `yarn dev`.
3. Currently, this Dockerfile may have problems working normally on macOS and/or Windows.

## Docker Compose

Inside the Docker Compose we have 5 containers to be able to lift.

### node

The first container is from node, this service compiles the Dockerfile from the previous point, it also specifies a target that must be passed through an environment variable in order to specify the environment. The valid environments depend on the layers of the Dockerfile, in the case of the Dockerfile from the previous point, the ones that could be used are the `dev` and `prod`. In 100% of the cases you will be using `dev` when working locally.

### db

The second container is the one for the database, by default the mongodb container is used since by default it is configured to use Mongoose as ODM.

You can replace it with `docker-compose.sql.yml` as follows.

```bash
STAGE=dev docker-compose -f docker-compose.yml -f docker-compose.sql.yml up --build -d
```

When we use the SQL version, we will be using postgres.

### mail

The third container is a service that is used to be able to send and receive emails without the need to configure or use an external service. It facilitates the testing of sending emails.

### minio

The fourth container is a file saving service and replaces the classic local file saving. MinIO can be used in such a way that we can use S3 locally, then with the same logic we can manipulate S3 when it goes into production.

### redis

The fifth container is an in-memory database service called redis.
