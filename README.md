# EMOBILITY CHARGING
Node based REST API and an React App to manage Charge Data Records (CDR).

## Keywords
- Node
- Express
- Sequelize
- MySQL
- React
- Next
- Redux
- Styled components
- Jest
- React testing library
- Docker

## Requirements
- Docker
- MySQL

## Installtaion in Docker
- clone the repository
- from the project root run services by following command **docker-compose -f emobility-charging.yaml up --build**
- this will create the neccessary migrations, seeds and boot up both backend and frontend service
- visit **http://localhost:4000/** to use the frontend app
- check API endpoints on **http://localhost:8080/** 

## Installtaion HOST mahcine
### DATABASE
- cd backend
- create **.env** variable and add the following or update your configuration for DB_NAME, DB_USER, and DB_PASS

```
DB_NAME="emobility_charging"
DB_USER="root"
DB_PASS="root"
DB_HOST="localhost"
CLIENT_HOST="localhost"
HOST_PORT="8080"
APP_PORT="4000"
JWT_ACCESS_TOKEN=JWT_ACCESS_TOKEN
JWT_REFRESH_TOKEN=JWT_REFRESH_TOKEN
API_VERSION=v1
```
- npm i -g sequelize-cli nodemon
- npm run migrate-db

### API
- cd backend
- npm install
- npm run start

### APP
- cd frontend
- npm install
- npm run dev



## API Endpoints

- register: http://localhost:8080/users/register
- login: http://localhost:8080/users/login
- create-record: http://localhost:8080/records/create
- get-records: http://localhost:8080/records
- get-records-by-id: http://localhost:8080/records/:id

## Improvements

- Handling server errors from frontend
- More test coverage in frontend
- adding pagination from server side [page, limit]