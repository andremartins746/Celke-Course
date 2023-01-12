const Sequelize = require('sequelize')

const sequelize = new Sequelize('celke', 'root','', {
    host: 'localhost',
    dialect: 'mysql'
}) 
sequelize.authenticate()
    .then(() => {
        console.log("conection com o bD com sucesso")
    })
    .catch(() => {
        console.log("erro com a conection com o BD")
    })

module.exports = sequelize;