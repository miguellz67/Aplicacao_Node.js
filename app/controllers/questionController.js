const questionModel = require('../models/Question')
const answerModel = require('../models/Answer')

module.exports = {
    async Create(req, res){
        try {
            let title = req.body.title
            let description = req.body.description
            await questionModel.create({ title: title, description: description })
            res.redirect('/')
        } catch (error) {
            console.log(`An error has ocurred ${error.message}`)
            res.send('Ocorreu um erro ao criar pergunta')
        }
    },
    async Show(req, res){                      
        try {                                                               // by / ASC = Crescente | DESC = Decrescente
            const questions = await questionModel.findAll({ raw: true, order:[ ['id', 'DESC'] ]  })
            res.render('index', { question: questions })
        } catch (error) {
            console.log('An error has ocurred')
            res.send('Ocorreu um erro')
        }
    },
    async ShowOne(req, res){
        try {
            const question = await questionModel.findOne({ where: { id: req.params.id } })
        
            if(question != undefined){
                answerModel.findAll({ raw: true, where: { questionId: question.id }, order: [['id', 'DESC']] }).then(answers => {
                    res.render('question', { question: question, answers: answers})
                })

            }else{
                res.redirect('/')
            }
        } catch (error) {
            console.log(`An error has ocurred ${error.message}`)
            res.status(500)
        }
    }
}