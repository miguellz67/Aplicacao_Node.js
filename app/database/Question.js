const Sequelize = require('sequelize')
const connection = require('./bcd')

const Question = connection.define('questions', {
    title:{ 
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Question.sync({force: false}).then(()=> { console.log('Created table "Question"') })

module.exports = Question