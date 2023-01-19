const Sequelize = require('sequelize')
require("dotenv").config()
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.BD_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
}) 

//TESTANDO A CONEXÃO PARA VER SE ESTA CONECTANDO COM O BD
sequelize.authenticate()
    .then(() => {
        console.log("conection com o bD com sucesso")
    })
    .catch(() => {
        console.log("erro com a conection com o BD")
    })

module.exports = sequelize;