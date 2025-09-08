//Função que retorna o cubo de um numero
/*
function cubo(a){
    return a**3
}
let entrada = prompt('Digite um numero: ')
let numero = Number(entrada)
let resultado = cubo(numero)

document.getElementById('res').innerHTML = `<h1> o cubo de ${numero} é ${resultado} </h1>`
*/

//Função que realiza a conversão de fahrenheit para celsius
/*
function celsius(n){
    return (n - 32) / 1.8
}

let entrada2 = prompt('Digite os graus em Fahrenheit: ');
let numero2 = parseInt(entrada2);
let resultado2 = celsius(numero2);
document.getElementById('res').innerHTML = `<br> <h1>Temperatura em graus celsius ${resultado2.toFixed(2)} </h1>`
*/

//Area de um triangulo
function area(base, alt){
    return (base * alt) / 2
}
let entBase = prompt('Digite a base do triangulo: ')
let entAlt = prompt('Digite a altura do triangulo: ')
let altura = parseInt(entAlt);
let nBase = parseInt(entBase);

let resultado3 = area(nBase, altura)
document.getElementById('res').innerHTML = `<br> <h1>A area do triangulo é igual a ${resultado3}</h1>`
