//Utilizando o operador || or para logica
//Operadores falsy no javascript:
/*
False
0
'', " ", ```
null, undefined
NaN
*/
//Vai retornar sempre o primeiro item verdadeiro, no caso a string 'Fernando'
console.log(false || null || 'Fernando' || true)

//Exemplo pratico da utilização logica
//Suponhamos que pedimos para o usuario selecionar uma cor
const corUsuario = 'vermelho'
const corPadrao = corUsuario || 'preto'
//Ou seja se o usuario não selecionar uma cor, a cor padrao vai ser preto, mas se ele selecionar uma cor, devido ao operador || vai ser devolvido o primeiro item verdadeiro que seria a 'vermelho'
console.log(corPadrao);

//Pegadinhas
const a = 0;
const b = null;
const c = false;
const d = 'False';//Essa string é verdadeira pois é uma string que contem a palavra false
const e = NaN;

console.log(a || b || c || d || e)
