const Sequelize = require('sequelize')
const connection = require('./bcd')

const Answer = connection.define(
    {
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        body:{
            type: Sequelize.TEXT,
            allowNull: false
        }
    }
)

Answer.sync({force: false}).then(() => { console.log('Created table "Answer"') })

module.exports = Answer