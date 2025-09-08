/*
Exercício 1 – Função que retorna outra função
Crie uma função chamada multiplicador que recebe um número como parâmetro e retorna outra função. A função retornada deve receber outro número e retornar o produto dos dois.
*/

function multiplicador(x){
    return function(y){
        return x * y
    }
}
const dobrar = multiplicador(2)
const numero = dobrar(10)
console.log(numero)