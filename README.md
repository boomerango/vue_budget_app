# counter-app

## Project setup
```bash
yarn install
```

### Compiles and hot-reloads for development
```bash
yarn serve
```

### Compiles and minifies for production
```bash
yarn build
```

### Lints and fixes files
```bash
yarn lint
```

### Server
A lightweight Express server was added under the `server` directory to handle user authentication. It connects to a MongoDB database (MongoDB Atlas can be used as a cloud option) and provides register and login endpoints.

To run the server:
```bash
cd server
cp .env.example .env # edit variables
npm install           # install server dependencies
npm start
```
