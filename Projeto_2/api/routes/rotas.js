const controller = require('../controllers/controllers.js') // variavel que requere o caminho a ser apresentado quando o get for digitado

app.get('/', controller.rotaRaiz);  // o get é o caminho, nesse caso, é quando for digitado "/"

app.get('/cursos/:cursoid', controller.cursoGetById);

app.get('/cep/:cepid', controller.cepGetById);

app.get('/livros/:livroid', controller.livrosGetById);

app.get('/:conselhoid', controller.consGetById)
