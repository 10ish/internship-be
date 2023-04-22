
module.exports = (sequelize,Sequelize)=>{

const User = sequelize.define('user',{
    name:{
        type:Sequelize.STRING,

    },
    username : {
        type: Sequelize.STRING
    },
    email :{
        type: Sequelize.STRING
    },
    phone:{
        type: Sequelize.STRING
    },
    website:{
        type: Sequelize.STRING
    }
});

return User

}