const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', 'Kjkszpj.,98', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection