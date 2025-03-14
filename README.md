The project starts as a docker compose service when inside the packages folder you can run docker compose up and the containers would run as the following

Network: finance-pro

Services: 

-api-stock
-stock-chart
-proxy-nginx

the proxy would serve as a reverse proxy getting the client request and serving as a brigde between fron and back logic, this in order to serve to delegate in a multi-container backend to the less busy container set as default round robin algorithm in cycles


Frontend made in next 14

## Atomic design

Well known as well as a structure of atoms, molecules and entities in this case using atoms and molecules only and respectfully following the next routing architecture to have the pages




In the api-stock folder you would find
# API Rest to follow the stocks updates on the market

This project is meant to be a stock tracker and brokerage simulator where a logged user can see in real time a stock price changing over time and buy it if preferred.

## Hexagonal Architecture

Well known as well as adapters and ports architecture the project follows a hexa architecture, this allows to mantain the independence of the system components.

## Constrains

- Node.js 23.0.0
- MongoDB

## Used packages

- `bcryptjs`: ^2.4.3
- `body-parser`: ^1.20.3
- `cors`: ^2.8.5
- `dotenv`: ^16.4.5
- `express`: ^4.21.1
- `jsonwebtoken`: ^9.0.2
- `mongoose`: ^8.8.3
- `nodemon`: ^3.1.7
-  `socket.io`

## Project description

### Functionalities

1. **Authentication flow**:
   - Register a user encrypting password using JWT.
   - Create the user reference in Mongo DB database.
   - Retrieving user from DB.
   - Loging confirming the user password whether is valid or not:

2. **Stocks flow routing**:
   - User can get stock history from /api/stock/history route where each 5 seconds when following the stock movement is creating a new reference to that movement in the DB in mongoDB


### Estructura del Proyecto

- `src/application/services`: Contains business logic and service of the application
- `src/domain/models`: Bearing the MongoDB models
- `src/domain/repositories`: Contains the interfaces of the repos
- `src/adapters/repositories`: Contains the implementations of the repositories
- `src/adapters/controllers`: Holds the api controllers
- `src/infrastructure/config`: MongoDB configuration
- `src/infrastructure/middleware`: Keeps the middleware of the application auth.
- `src/infrastructure/routes`: Main routes of the API
- `src/utils`: Functions as utils added to do repetitive tasks

#### Para visualizar la estructura mas claramente ingresa a: 
- ```bash
  https://github.com/esteban2841/monorepo-stock-challenge-talavera
  ```

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/esteban2841/monorepo-stock-challenge-talavera
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd api-stock
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura las variables de entorno en el archivo .env:

   ```env
    MONGO_URI=mongodb+srv://estebanpuentesdev:P4QVHtUFVEti6RNg@cluster0.gh2cy.mongodb.net/stock-market
    MONGO_USER=estebanpuentesdev
    MONGO_PASSWORD=estebanpuentesdev
    BACKEND_URI=http://proxy-nginx
   ```

### Uso

1. Start the project individually you can initialize it in dev mode using the following command

   ```bash
   npm run dev:all
   ```

2. Inicia el servidor en modo producción:

   ```bash
   npm prod:all
   ```

### Endpoints

- **POST /api/auth/register**: Registers a new user
- **POST /api/auth/login**: Logging and obtains a JWT
- **POST /api/user/retrieve/{userEmail}**: Gets user data when the self is logged
- **POST /api/stock/history**: Gets the stock history array
- **POST /api/stock/purchase**: Sets a stock in the user's holdings prop as reference to the purchased stock

### Contribuciones

All contributors are welcome, if you please send a issue request and we can discuss any modification

# api-stock
