# Heroes App

A learning project for angular and .Net Core

### Prerequisites

Docker

### Running the app for dev

We are using docker compose to bring up the whole stack. There are three containers - One for the Angular app, the .Net Core hero api and a container running MS SQL Server for linux. Run the command below to bring up the stack. It will build your DB and run the DB migrations as you bring it up. Both the .Net code and the angular front end will hot reload as you edit the underlying code.

```
docker-compose up
```