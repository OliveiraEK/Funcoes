/* função sem parametro
function inicio(){
    let nome = prompt("Digite seu nome")
    alert(nome)
}

inicio() */

/* função com parâmetro
function notificacao(msg){
    let teste = alert(msg)
    return teste
}

notificacao("Olá!")


function precos(livro,caneta){
    let totalItens = livro + caneta
    console.log("Novo preço: "+totalItens)
}

precos(22.00,1.50)


FUNÇÃO SEM RETORNO

function soma (a,b){
    console.log(a + b)
}
soma(2,3)

*/

/*
FUNÇÃO ANONIMA
var teste = function (){
    console.log("Olá!!")
}

teste()

//FUNÇÃO NORMAL
function soma (x, y){
    return x + y
}

alert(soma(13,17))

//ARROW FUNCTION

let soma = (x, y) => x + y

alert(soma(13,17))


let nameLetters = (name) => name.length

alert(nameLetters('Thaina'))