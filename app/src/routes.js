const questionController = require('../controllers/questionController')
const answerController = require('../controllers/answerController')
const express = require('express')
const router = express.Router()

router.get('/', questionController.get)
router.get('/Perguntar',(req,res) => { res.render('createQuestion') })
router.post('/Perguntar', questionController.create)
router.get('/Pergunta/:id', answerController.getOne)
router.post('/Responder', answerController.answer)

module.exports = router