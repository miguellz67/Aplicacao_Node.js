const questionController = require('../controllers/questionController')
const answerController = require('../controllers/answerController')
const express = require('express')
const router = express.Router()

router.get('/', questionController.get())
router.post('/Perguntar', questionController.create())
router.get('/Responder/:id', answerController.answer())
router.get('/Pergunta/:id')

module.exports = router