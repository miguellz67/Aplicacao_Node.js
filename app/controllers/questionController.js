const Question = require('../database/Question')

module.exports = {
    async get(req, res){
        const question = await Question.findAll({raw: true, order:[
            ['id', 'DESC']
        ]})
        res.render("index", { question: question })
    },
    async create(req, res){
        const question = await Question.create({ 
            title: req.body.title, 
            description: req.body.description })
        res.redirect("/")
    }
}