const Sequelize = require('sequelize')
const connection = require('./bcd')

const Answer = connection.define(`answer`,
    {
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        body:{
            type: Sequelize.TEXT,
            allowNull: false
        },
        questionId:{
            type: Sequelize.INTEGER
        }
    }
)

Answer.sync({force: false}).then(() => { console.log('Created table "Answer"') })

module.exports = Answer