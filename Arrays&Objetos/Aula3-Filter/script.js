//O método .filter() em JavaScript serve para criar um novo array contendo apenas os elementos do array original que passarem em um teste lógico (função de callback que retorna true ou false).
//O metodo filter requer que retorne em valores booleanos true ou false, true para elementos que vao participar do novo array filtrado e false para elementos que serão excluidos

//Ex1: retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array){
    if(valor > 10){
        return true
    }else{
        return false
    }
}

const numerosFiltrados = numeros.filter(callbackFilter)//Vai receber uma função de callback como paremetro
console.log(numerosFiltrados)

/*
Maneira mais simplificada de fazer a MESMA COISA
const numerosFiltrados = numeros.filter( valor => valor > 10;
)

Com arrow function
nesse caso nao é necessarios os parametros indice e array
e se retornar a condição (valor > 10 ) já vai retornar um valor booleano
*/

//Ex2 mais complexo:
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

//Retorne as pessoas que tem o nome com 5 letras ou mais
const nomes5Mais = pessoas.filter(valor => valor.nome.length >= 5
);
console.log(nomes5Mais)

//Retorne as pessoas com mais de 50 anos
const cinquentoes = pessoas.filter(valor => valor.idade > 50);
console.log(cinquentoes)

////Retorne as pessoas cujo o nome termina com a
const ultimaLetraA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a')
)
console.log(ultimaLetraA);