/*
Operadores Logicos
&& -> and -> E (TODAS expressoes precisam ser verdadeiras, para a expressao completa ser verdadeira)
|| -> or -> ou (Se apenas Uma expressão for verdadeira, a expressao completa é verdadeira)
! -> not -> não (Esse operador inverte uma expressão)
*/
const expressaoAnd = true && true && true && false
console.log(expressaoAnd) //Vai ter o valor de false pq existe um false 
const expressaoOr = true || false;
console.log(expressaoOr); //Vai ter o valor true pq tem ao menos um true na expressão

//Ex:
const usuario = 'luiz'
const senha = '123456'

//                           true                 false
const vaiLogar = usuario === 'luiz' && senha === '12345'
console.log(vaiLogar);

//Operador !
console.log(!false); // Essa expressao é true
console.log(!true);  //Essa expressao é false
console.log(!!true); //Essa expressão é true pq inverteu o valor 2x
console.log(!!false); //Essa expressão é false pq inverteu o valor 2x

