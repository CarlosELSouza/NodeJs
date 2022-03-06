const http = require('http') // instanciou o protocolo http
const server = require('./config/server.js') // aqui vai o arquivo que vai criar o server

http.createServer(server).listen(server.get('porta'), function(){ //aqui ele só vai ouvir a porta
    console.log('Servidor rodando na porta ' + server.get('url') + server.get ('porta')) //apenas um LOG de console
})
