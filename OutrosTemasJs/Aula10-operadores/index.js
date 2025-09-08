/*
Operadores aritmeticos:
+ (adição e concatenação)
- (subtração)
* (multiplicação)
/ ( divisão)
** (potenciação)
% (resto da divisão)
*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2 + 5);

/*
Precedencia dos operadores
1- ()
2- **
3- * / %
4- + -

*/

//incrementar
let contador = 1;
contador++; // VALOR DA VARIAVEL + 1 = 2
contador++; // = 3
++contador; //tambem funciona, mas faz a conta primeiro
console.log(contador)

//incrimento com outro valor
//operadores de atribuição /= ou *= ou += ou -=
let cont = 0;
cont += 2 // Mesma coisa que: cont = cont + 2 
cont += 2 //podemos usar qualquer operador ex: cont *= 2;
console.log(cont)

//Decremento
let contador2 = 10;
contador2--; // valor da variavel -1
--contador2; 
console.log(contador2)

//NaN - Not a number
const n1 = 10;
const n2 = 'Fernando';
console.log(n1 * n2);

//como converter uma string para number
const a1 = 10;
const a2 = Number('5');
console.log(a1 + a2);
console.log(typeof(a2));