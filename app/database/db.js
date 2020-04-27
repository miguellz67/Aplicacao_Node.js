const Sequelize = require('sequelize')
                                //banco, usuario, senha, {servidor, tipo banco}
const connection = new Sequelize('banco', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
