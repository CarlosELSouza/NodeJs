module.exports = { //trazendo a função do controllers
    getByIdCurso,
    getByIdlivro
}

const cursosInfo = [ // declarou a variavel 
    {'curso':'Css', 'info':'Curso introdutório de CSS'},
    {'curso':'JavaScript', 'info':'Curso introdutório de JavaScript'},
    {'curso':'NodeJs', 'info':'Curso de Nofdejs'},
    {'curso':'Excel', 'info':'Curso introdutório de Excel'},
    {'curso':'React', 'info':'Curso introdutório de React'},
]

const livrosInfo = require('../../public/livros.json') //importando um arquivo externo

function getByIdCurso(pcurso) {//P de parametro
    const cursoi = cursosInfo.find(i => i.curso == pcurso)
    if(!cursoi){
        console.error("Curso não encontrado")
    } else {
        console.log({cursoi})
    }}

function getByIdlivro(plivro) {
    const livroi = livrosInfo.find(i => i.id == plivro) //pesquisando num array
    if(!livroi){ //se achar, tal coisa, senão, tal coisa
        console.error("Livro não encontrado")
    } else {
        console.log({livroi})
    }}
