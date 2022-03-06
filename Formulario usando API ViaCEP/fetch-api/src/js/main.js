// o queryselector é pra escolher um item no html
const cep = document.querySelector("#cep") //vai pegar a string que for digitada no cep

const showData = (result)=>{ //todos os campos que a API retornar, ele vai armazenar na variavel campo
    for(const campo in result) {
        if(document.querySelector("#"+campo)) { //pra descartar as informacoes que não preciso, que vem da api
            document.querySelector("#"+campo).value = result[campo] //pega um cara do doc, e muda o valor dele pra o que a api tá retornando
        }
    }
}
cep.addEventListener("blur", (e) =>{ //blur é quando sair da box de digitação, sair do campo

    let search = cep.value.replace("-", "") //procura se o cep tiver traço, e tira ele
    const options = { //passando parametros, pra mostrar que são servidores diferentes, retorna tudo string
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options) // fetch, acesse esste link: (); usando template string, pra concatenar usando o $
    
    //famoso promiss, se der certo, faça isso 
    .then(response =>{response.json()//deu certo? então traz a resposta pra mim em formato JSON
        .then( data => showData(data))
    })

    .catch(e => console.log('Deu erro: ' + e, message))// se der errado, faça isso
})