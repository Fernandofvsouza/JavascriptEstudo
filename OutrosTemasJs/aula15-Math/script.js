let num1 = 9.54578;
num1 = Math.floor(num1);//arrendonda o numero para baixo, no caso para 9
console.log(num1)

let num2 = 9.6789
num2 = Math.ceil(num2);// arredonda para cima, no caso 10
console.log(num2)

let num3 = 9.5784
num3 = Math.round(num3); //arredonda para o numero mais proximo, no caso 10 tambem
console.log(num3)

console.log(Math.max(1,2,4,10,20,70));//Mostra o maior numero da sequencia, no caso 70

console.log(Math.min(1,2,4,10,20,70,-45));//Mostra o menor numero da sequencia, no caso -45

console.log(Math.random()); // Vai gerar um numero aleatorio entre 0e1, em que o 1 não é incluido

//ex: numero aleatorio entre 5 e 10
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

console.log(Math.PI); //Mostra o numero pi
console.log(Math.PI.toFixed(2)); 


//ex: pegar uma raiz quadrada
let num5 = 9;
console.log(num5 ** (1/2)); // ou
console.log(num5 ** 0.5);

