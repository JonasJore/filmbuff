# filmbuff

Frontend project for fans of movies 📽🍿

## Config:

For this project to run properly you will need an api-key, which you can register for here: [link](http://www.omdbapi.com/apikey.aspx)

Create a .env file

```sh
touch .env
```

The env file will hold a valid apikey under the key: API_KEY

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
