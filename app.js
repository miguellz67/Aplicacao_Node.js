const Question = require('./app/database/Question')
const Answer = require('./app/database/Answer')
const normalizePort = require('normalize-port')
const port = normalizePort(process.env.PORT || 3003)
const bodyParser = require('body-parser')
const connection = require('./app/database/bcd')
const express = require('express')
const app = express();

//DataBase
connection.authenticate()
    .then(() => { console.log('Connection has sucess') })
    .catch((err) => { console.log(`An error has occurred: ${err}`) })

//Definindo renderizador de HTML - Por padrão será buscado páginas na pasta "views"
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))

app.use('/Guia-Perguntas', require('./app/src/routes'))

app.listen(port, () => { console.log(`Server on port: ${port}`) })
