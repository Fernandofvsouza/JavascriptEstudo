//Includes, StartWith, endsWith: são facilitadores

//O includes serve para verificar se inclui algo que voce esta querendo buscar
//ex:
let nomes = ['Matheus', 'Lucas', 'José'];

console.log(nomes.includes('Matheus'));
//Se incluir vai devolver true, se não incluir false

if(nomes.includes('Lucas')){
    console.log('Está na lista')
}else{
    console.log('Não está na lista')
}

//startsWith: serve para verificar se algum texto começa com o que voce passar
//ex:

let nome = 'Matheus';
console.log(nome.startsWith('Mat')); //Tambem devolve um booleano


//endsWith: Serve para verificar se algum texto termina com o que voce passar

let sobrenome = 'Souza'
console.log(sobrenome.endsWith('za'))