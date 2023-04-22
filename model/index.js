//checking the environment
const env = process.env.NODE_ENV || 'developement';
//Requiring db configuration
const dbConfig = require('../config/dbConfig')[env]

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USERNAME,dbConfig.PASSWORD,{
    host : dbConfig.HOST,
    dialect: dbConfig.DIALECT
})
//Authenticating the connection
async function authenticateConnection(){
try{
await sequelize.authenticate();
console.log('Connection Established to the database sucessfully')
}
catch(err){
console.log('Unable to create a connection to the database due to : ' + err)
}
}
authenticateConnection();
//creating the db object thats exported
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//Adding models to the database 
db.user = require('../model/user.model')(sequelize,Sequelize);
db.company = require('../model/company.model')(sequelize,Sequelize);
db.address = require('../model/address.model')(sequelize,Sequelize);
db.geoCoordinate = require('../model/geo.model')(sequelize,Sequelize);

//Creating the relationship between models
//can be changed in the future according to need
db.user.hasOne(db.company);
db.company.hasMany(db.user)
db.user.hasOne(db.address);
db.address.hasOne(db.geoCoordinate)





//Exporting database and other functionalities


module.exports = db;