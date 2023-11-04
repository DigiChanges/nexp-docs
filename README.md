# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Convert API DOCS

`yarn docusaurus gen-api-docs all`

To Remove all API docs

`yarn docusaurus clean-api-docs all`

## Typesense Config

In order to configure Typesense we need to scrape the site implemented in this way.

In the `typesense` folder we find the basic configuration in `config.json`.

Then we need to have the .env with the environment variables. We find an example in `typesense/.env.example`.

For the following command to work we need to install `jq`.

`docker run -it --net="host" --env-file=./typesense/.env -e "CONFIG=$(cat ./typesense/config.json | jq -r tostring)" typesense/docsearch-scraper`
