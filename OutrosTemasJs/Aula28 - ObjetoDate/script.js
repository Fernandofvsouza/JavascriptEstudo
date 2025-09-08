//Sempre que usamos a palavra new significa que é uma função construtora ou seja:
/*
	•	A função construtora é como um molde.
	•	Você usa new para criar objetos novos com esse molde.
	•	É uma forma de evitar repetir código.

*/
//As datas são baseadas em milisegundos desde o dia 1/1/1970
// new Date() é a hora exata executada o codigo
const data = new Date();

//.toString() é um método que transforma o objeto em uma string legível. No caso do Date, ele transforma a data e hora em texto.
console.log(data.toString())

//Podemos tambem selecionar uma data Manualmente exemplo meu aniversario de 2017
//                           ano   mes(começa do 0) dia hora minuto segundo
const dezoitoAnos = new Date(2017, 10, 22, 15, );
console.log(dezoitoAnos.toString());

//Enviando uma data no formato string
//                         ano mes(começa do 1) dia hora,min,seg
const dataNova = new Date('2019-02-20 20:08:59');
console.log(dataNova.toString());

//Obter algo exato da data, tipo dia ou minutos
console.log(`Dia ${dataNova.getDate()}`);
console.log(`Mes ${dataNova.getMonth()}` /*Começa do 0*/);
console.log(`Ano ${dataNova.getFullYear()}`);
console.log(`Hora ${dataNova.getHours()}`);
console.log(`Minuto ${dataNova.getMinutes()}`);
console.log(`Segundos ${dataNova.getSeconds()}`);
console.log(`Milisegundos ${dataNova.getMilliseconds()}`);
console.log(`Dia da semana ${dataNova.getDay()}` /*0 é domingo e 6 é sabado*/);

//Voce consegue tambem obter a data atual em formato de milisegundos usando
//Representa de 01/01/1970 ate hoje em milisegundos
console.log(Date.now());

//Exemplo criando uma função que formata uma data:
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data01){
    const dia = zeroAEsquerda(data01.getDate());
    const mes = zeroAEsquerda(data01.getMonth() + 1);
    const ano = zeroAEsquerda(data01.getFullYear());
    const hora = zeroAEsquerda(data01.getHours());
    const min = zeroAEsquerda(data01.getMinutes());
    const seg = zeroAEsquerda(data01.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} `;
    
}

const data01 = new Date();
const dataBrasil = formataData(data01);
console.log(dataBrasil);



