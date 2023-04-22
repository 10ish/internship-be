//seperate folders created just for future scalability needs
const homeController = require('../controller/home.controller')
module.exports = (app)=>{
    app.get('/users',homeController.getAll)
}