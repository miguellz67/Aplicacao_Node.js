const Answer = require('../database/Answer')
const Question = require('../database/Question')

module.exports = {
    async getOne(req, res){
        const question = await Question.findOne({ where:{id: req.params.id} })
        if(question!= undefined){
            const answers = await Answer.findAll({where:{questionId: question.id}})  
            res.render("question", { question, answers })
        }else{
            res.redirect("/")
        }
    },
    async an
}