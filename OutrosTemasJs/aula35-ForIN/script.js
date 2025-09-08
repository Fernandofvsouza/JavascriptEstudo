const frutas = ['pera', 'maçã', 'uva'];

//For in: le os indices ou chaves do objeto
//EX: COM ARRAY
for (let indice in frutas){
    console.log(frutas[indice]);
}
//Essa seria a maneira de fazer com o for
//for(let i = 0; i < frutas.length; i++){
  //  console.log(frutas[i])
//}

//EX:OBJETOS
const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Souza',
    idade: 25
};

//Pegando o item das chaves em um objeto, as duas maneiras:
console.log(pessoa.nome)//ou
console.log(pessoa['nome'])

//Usando o for in
for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}


