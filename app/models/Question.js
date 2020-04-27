const sequelize = require('sequelize')
const connection = require('../database/db')

// Representação de como será a tabela no banco
const Question = connection.define('Question', {
    title:{
        type: sequelize.STRING,
        allowNull: false
    },
    description:{
        type: sequelize.TEXT,
        allowNull: false
    }
})

Question.sync({force: false}) // Passando modelo para o banco criar

module.exports = Question
