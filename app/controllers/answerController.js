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
    async answer(req, res){
        const answer = await Answer.create({
            name: req.body.user,
            body: req.body.restext,
            questionId: req.body.question
        })
        res.redirect(`/Pergunta/${answer.questionId}`)
    }
}