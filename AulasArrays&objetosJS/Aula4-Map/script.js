//O método .map() em JavaScript serve para criar um novo array com o mesmo tamanho do original, mas transformando cada elemento de acordo com a função de callback que você passar.
//Igual o filter tambem recebe valor, indice e array

//Ex1: dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosDobrados = numeros.map(valor => valor * 2)
console.log(numerosDobrados)

//Ex2:
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

//Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(valor => valor.nome)
console.log(nomes)

//Remova apenas a chave 'nome' do objeto
const idade = pessoas.map(valor => {
    delete valor.nome
    return valor
})
console.log(idade)

//Adicione uma chave de indice em cada objeto
const comIds = pessoas.map(function(valor, indice){
    valor.indice = indice; //Colocando o id com o valor do indice apenas pra ter algo 
    return valor
})
console.log(comIds)