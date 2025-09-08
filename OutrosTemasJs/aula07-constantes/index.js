//Não podemos modificar o valor de uma constante
//Não podemos declarar uma constante sem dar um valor a ela
const nome = 'João';
console.log(nome)

//Não podemos modificar o valor da const: nome = 'otavio'
//Não podemos declarar uma const sem valor const nome;

const primeiroNumero = 5;
const segundoNumero = 10;
const texto = 'Olá mundo'
const conta = primeiroNumero + segundoNumero;
const contaDuplicada = conta * 2;
console.log(conta);
console.log(contaDuplicada);

//Podemos usar o typeof para descobrir o tipo da variavel ex
console.log(typeof(primeiroNumero)) // o resultado vai ser number
console.log(typeof(texto)) //o resultado vai ser string