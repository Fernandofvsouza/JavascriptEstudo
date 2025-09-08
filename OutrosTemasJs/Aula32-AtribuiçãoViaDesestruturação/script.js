//Atribuição via desestruturação
//Exercicio em que a = b, b = c, c = a
let a = 'A' //B
let b = 'B' //C
let c = 'C' //A
//Maneira de fazer esse exercicio via atribuição via desestruturação
const letras = [b, c, a];
[a, b, c] = letras; //a tem valor de 1, b = 2, c = 3

console.log(a, b, c)

////////////////////////////////////////////////////////////////

//Mais exemplos
//INDICE         0  1  2  3  4  5  6  7  8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
console.log(numeros[0])
//SUPONDO QUE EU QUEIRA ATRIBUIR O VALOR 1 DO ARRAY A UMA VARIAVEL
/*
const primeiroNumero = numeros[0];
console.log(primeiroNumero);
*/
//Agora atribuindo via desestruturação = que seria arrancar um valor do array
// e jogar dentro de uma variavel usando uma sintaxe mais facil
/*
const [primeiroNumero, segundoNumero] = numeros
console.log(primeiroNumero, segundoNumero)
*/

//Podemos tambem pegar o resto do array
/*
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);
*/

//Dois operadores novos ...rest, ...spread

//Podemos tambem pular valores ex:
const [primeiroNumero, , terceiroNumero, , quintoNumero, , setimoNumero] = numeros
console.log(primeiroNumero, terceiroNumero, quintoNumero, setimoNumero);

//Supondo que tenha um array com outros arrays
//Indices                   0                1                2
//                    0     1    2      0    1    2      0    1    2
const letrasLista = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
//Se eu quero acessar a letra f
console.log(letrasLista[1][2]);
//Como acessar uma letra por atribuição via desestruturação
const letrasLista2 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
//Se eu quero acessar a letra i
const [lista1, lista2, lista3] = letrasLista2;
console.log(lista3[2]);

