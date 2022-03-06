const express = require('express')
const consign = require('consign') // importando uma biblioteca

app = express();   

app.set('url', 'http://localhost:') // variavel do express
app.set('porta', 3001)

consign({cwd: 'api'}) // na pasta api, vai trazer esses tr6es diretórios (comando cwd)
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

module.exports = app