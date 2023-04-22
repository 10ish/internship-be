//Entry Point

//Requiring external Packages
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
//Getting environment variable
const serverConfig = require("./config/serverConfig");
//Getting the database
const db = require("./model");
//function that add the entries to db
const init = require('./initDb');

//Initialising the database, Deleting any tables if it exists
db.sequelize.sync({ force: true }).then(() => {
    
  console.log("Tables dropped and Created");
  init(); // to add the sampe entries in the database
});

//Routes for the app
require('./routes/home.route')(app);

//Listening on the port
app.listen(serverConfig.PORT, () => {
  console.log("Server Started on port " + serverConfig.PORT);
});
