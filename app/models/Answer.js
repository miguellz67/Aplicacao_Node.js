const sequelize = require('sequelize')
const connection = require('../database/db')

const Answer = connection.define('Answers', {
    body:{
        type: sequelize.TEXT,
        allowNull: false
    },
    questionId:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    name:{
        type: sequelize.STRING,
        allowNull: false
    }
})

Answer.sync({ force: false })

module.exports = Answer