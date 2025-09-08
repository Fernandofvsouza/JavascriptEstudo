//Funções executam ações, um trecho de codigo que executa uma ação e retorna um valor
/*
//chama  nome   parametros   
function saudacao(nome){
    return  `bom dia ${nome}`;
}

//saudacao('Luiz');
//saudacao('Maria');
//saudacao('Felipe');
const variavel = saudacao('Luiz');
console.log(variavel);
*/


//Criando uma função que faça uma soma
/*
function soma(x, y){
    const resultado = x + y;
    return resultado;
    //Tudo que está abaixo de return não é mais executado
}

console.log(soma(2, 2));
console.log(soma(5, 2));
console.log(soma(2, 7));
*/

//Podemos jogar um função dentro de uma variavel, função anonima


/*
const rQ = function (n){
    return n**0.5;

};

console.log(rQ(9));
console.log(rQ(25));
*/

//Maneira mais moderna de criar uma função (arrow function)
//Apenas substituimos a palavra function por uma arrow => ex:
/*
const rQ = (n) => {
    return n ** 0.5;
};

console.log(rQ(10));
console.log(rQ(8));
*/
//Arrow function serve para simplificar a vida do programador podemos simplificar funções de uma linha dessa maneira

const rQ = n => n ** 0.5;

console.log(rQ(10));

//Literalmente a mesma coisa da função de cima

