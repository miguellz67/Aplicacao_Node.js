const Question = require('./database/Question')

module.exports = {
    async get(req, res){
        const questions = await Question.findAll({raw: true, order:[
            ['id', 'DESC']
        ]})
        res.render("/", {questions: questions})
    },
    async create(req, res){
        const question = await Question.create({ 
            title: req.body.title, 
            description: req.body.description })
        res.redirect("/")
    },
    async getOne(req, res){
        const question = await Question.findOne({ where:{id: req.parms.id} })
        if(question!= undefined){
            res.render('question')
        }else{
            res.redirect('/')
        }
    }
}