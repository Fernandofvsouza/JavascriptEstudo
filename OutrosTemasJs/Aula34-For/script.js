//For é um laço de repetição

//console.log('Linha 1');
//console.log('Linha 2');
//console.log('Linha 3');
//console.log('Linha 4');
//console.log('Linha 5');


/*
for(let i = 0;i <= 20; i++ ){
    console.log(`Linha ${i}`);
}
*/

/*
As tres coisas que precisamos colocar nos parenteses
-Criar uma variavel de controle
-criar uma condição
-incrementar ou decrementar nossa variavel de controle
*/

//Ex checando se é par ou impar
/*
for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
    
}
*/

//Ex percorrendo um array
//                0        1       2
const frutas = ['Maçã', 'Pera', 'Uva', 'Banana', 'Ameixa', 'Cereja'];

for(let i = 0; i < frutas.length; i++){
    console.log(`Indice ${i}`, frutas[i]);
}
