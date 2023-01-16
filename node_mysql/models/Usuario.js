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
    },
    password:{
        type: Sequelize.STRING
    }
})
// VERIFICANDO SE OUVE ALGUMA ALTERAÇÃO NA TABELA
//Usuario.sync({alter: true }) CRIANDO COLUNAS QUE NAO EXISTE NA TABELA

module.exports = Usuario;