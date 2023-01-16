const Sequelize = require('sequelize')

const BD = require("./db")

const Usuario = BD.define('users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        
    },
    email:{
        type: Sequelize.STRING
    }
})
Usuario.sync({alter: true })

module.exports = Usuario;