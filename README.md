# filmbuff

frontend project for fans of movies 📽🍿

## Config:

for this project to run properly you will need an [API-key](http://www.omdbapi.com/apikey.aspx)

create a config file at `./src/config`

```sh
touch ./src/config/config.ts
```

setup the config file something like this.

```js
const config = {
  API_KEY : {api-key},
};

export default config.API_KEY;
```

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser.

The project can also be run via a local development server, using webpack (requires dev-build of project)  
see `package.json`.
