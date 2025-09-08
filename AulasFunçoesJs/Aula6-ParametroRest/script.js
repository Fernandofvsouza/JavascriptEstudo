// O rest parameter (...) em JavaScript é uma sintaxe que permite a uma função receber um número variável de argumentos como um array
//Ex:
function collectThings(...rest){
    console.log(rest)
}
collectThings('Ball', 'Shoes', 'Knike')
// Saída: ['Ball', 'Shoes, 'Knife]