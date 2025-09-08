//Array é uma lista, uma coleção de coisas
//                0        1        2         3
const alunos = ['Luiz', 'Maria', 'João', 'Fernando'];
console.log(alunos);

console.log(alunos[1]); // ACESSA O ITEM 'MARIA'
alunos[0] = 'Eduardo'; //Editando o item 0
alunos[4] = 'Mafalda'; //Adicionando um Item 
alunos.push('José'); // adicionando um item ao final do array sem precisar saber a quantidade de item
alunos.unshift('Kevin'); // adicionando um item no começo do array, no indice 0
alunos.pop(); //Removendo o item final do array
const removido = alunos.pop(); //adicionando em uma variavel o elemento removido
alunos.shift(); //Removendo o item do começo do array
delete alunos[2]; //DELETANDO O ITEM 2, O INDICE 2 FICA COMO UNDEFINED
console.log(alunos.slice(0, 2)); //Fatiando os itens
console.log(alunos.slice(0, -2));
console.log(typeof alunos); //Vai retornar object
console.log(alunos instanceof Array); //Para saber se de fato é uma array, vai retornar true or false

console.log(alunos.length); //Para saber o tamanho do array
console.log(alunos);
console.log(removido);
