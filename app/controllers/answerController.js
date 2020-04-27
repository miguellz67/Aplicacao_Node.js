const answerModel = require('../models/Answer')

module.exports = {
    async Answer(req, res){
        try{
            const answer = await answerModel.create({ body: req.body.restext, questionId: req.body.question, name: req.body.user })
            res.redirect(`/pergunta/${answer.questionId}`)
        }catch(err){
            res.send(`Ocorreu um erro ao tentar responder \n ${err.message}`)
            console.log(err.message)
        }
    }
}