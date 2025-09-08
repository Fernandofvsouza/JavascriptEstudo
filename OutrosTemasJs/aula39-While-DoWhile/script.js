/*
While ou Do while, geralmente não sabemos quantas vezes a repetição vai ocorrer ate terminar
*/

let i = 0;
while(i <= 10){
    console.log(i);
    i++; //Não pode esquecer do i++ se nao gera um laço de repetição infinita
}

const nome = 'Luiz'

while(i < nome.length){
    console.log(nome[i]);
    i++;
}

//Exemplo mais real, gerando um numero aleatorio entre 1 e 50 e enquanto o numero for diferente de 10 continue executando o laço
function random(min, max){
    const r = Math.random()* (max-min) + min;
    return Math.floor(r);
}
const min = 1
const max = 50
let rand = random (min, max)

while (rand !== 10){
    rand = random(min, max);
    console.log(rand)

}

//Diferença entre while e do while.. o while checa a condição e executa o codigo, o do while executa o codigo e depois checa a condição

do {
    rand = random(min, max);
    console.log(rand) 
}while (rand !== 10)