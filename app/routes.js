const answerController = require('./controllers/answerController')
const questionController = require('./controllers/questionController')
const express = require('express')
const router = express.Router()

router.get('/', questionController.Show);
router.get('/pergunta/:id', questionController.ShowOne)
router.get('/perguntar', (req, res) => {
    res.render('createQuestion')
});

router.post('/savequestion', questionController.Create);
router.post('/answer', answerController.Answer)

module.exports = router