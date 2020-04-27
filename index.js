const bodyParser = require('body-parser');
const normalizePort = require('normalize-port');
const Connection = require('./app/database/db')
const port = normalizePort(process.env.PORT || 3000)
const express = require('express');
const app = express();

// DataBase
Connection.authenticate()
    .then(() => {
        console.log('Connection success')
    })
    .catch((err) => {
        console.log(`An error has ocurred: ${err.message}`)
    })

// Definindo como renderizador EJS | Por padrão as paginas são buscadas na pasta VIEWS
app.set('view engine', 'ejs');
app.set('views', './app/views')
// Por convenção se da o nome de 'public' diretório contendo os arquivos estáticos
app.use(express.static('./app/public')); 
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.use('/', require('./app/routes'))

app.listen(port, () => { 
    console.log(`Server working on port: ${port}`) 
});