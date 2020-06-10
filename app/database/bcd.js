const Sequelize = require('sequelize')
                                //banco,usuário,senha,{host, sgbd}
const connection = new Sequelize('guiaperguntas', '', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection