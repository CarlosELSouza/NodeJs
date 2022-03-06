const { response } = require('express')
const models = require('../models/models.js')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); //importando as dependencias

module.exports = {
    rotaRaiz,
    cursoGetById,
    cepGetById,
    livrosGetById,
    consGetById
}


function rotaRaiz(req, res) { // função 
    console.log('Rota Raiz Encontrada')
    res.json({Ola: 'Rota Raiz encontrada'})
}

function cursoGetById(req, res){
    const curso = req.params.cursoid // variavel curso vai receber o parametro de cursoid, lá do rota
    console.log("Parametro esperado: " + curso)
    res.json({Message: 'Rota Consultar cursos encontrada!'})
    
    let leitura
    console.time(leitura) //console que captura o horário que ele capturou os dados

    models.getByIdCurso(curso) 

    console.timeEnd(leitura) // no End, ele subtrai um pelo outro e te dá o tempo que isso levou
    console.log("== Curso =====================")
}

function cepGetById(req, res){
    const cep = req.params.cepid
    console.log("Parametro esperado:" + cep);

    const url = `http://viacep.com.br/ws/`+cep+`/json/` // buscando num endereço externo (UMA API BIXO), e concatenando o cep
    console.log("Endereço: " + url) // só pra saber se deu certo

    fetch(url) //comando para dar uso a api
        .then((response) => response.json())
        .then(data => {
            dados = data
            res.json({message:dados})
        })
        .then(response => console.log(dados))
        .catch(function (error) {
            console.log("Erro na requisição");
        })
        .finally(function () {
            console.log("Sempre apresentará esta mensagem")
        })

}

function livrosGetById(req, res){
    const livro = req.params.livroid // variavel curso vai receber o parametro de cursoid, lá do rota
    console.log("Parametro esperado: " + livro)
    res.json({Message: 'Rota Consultar livros encontrada!'})
    
    let leitura
    console.time(leitura) //console que captura o horário que ele capturou os dados

    models.getByIdlivro(livro) 

    console.timeEnd(leitura) // no End, ele subtrai um pelo outro e te dá o tempo que isso levou
    console.log("== Livro =====================")
}

function consGetById(req, res){
    const cons = req.params.consid
    console.log("Parametro esperado:" + cons);

    const url = `https://api.adviceslip.com/advice` // buscando num endereço externo (UMA API BIXO), e concatenando o cep
    console.log("Endereço: " + url) // só pra saber se deu certo

    fetch(url) //comando para dar uso a api
        .then((response) => response.json())
        .then(data => {
            dados = data
            res.json({message:dados})
        })
        .then(response => console.log(dados))
        .catch(function (error) {
            console.log("Erro na requisição");
        })
        .finally(function () {
            console.log("Sempre apresentará esta mensagem")
        })

}