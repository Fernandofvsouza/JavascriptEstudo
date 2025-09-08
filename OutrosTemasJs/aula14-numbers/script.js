let num1 = 15.6700; //Number
let num2 = 2.5; //Number
let num3 = 10; //Number

console.log(num1.toString() + num2); //Convertando numero para string

console.log(num1.toString(2)); //representação binaria do numero

console.log(num1.toFixed(2)); //Arrendodado para duas casas decimais

console.log(Number.isInteger(num3)); //Para checar se o numero é inteiro, vai retornar true or false

let temp = num1 * 'olá';
console.log(Number.isNaN(temp)); //Para checar se o resultado é not a number; vai retornar true or false