//Desconstruindo objetos
let pessoa = {
    nome: 'Matheus',
    sobrenome: 'Fraga',
    empresa:'Sujeito Programador',
    cargo: 'Programador FullStack'
};
//Se eu quiser mostrar uma propriedade do objeto
console.log(pessoa.nome)
//Agora se eu quiser desconstruir o objeto (Dessa maneira é criado uma variavel chamada nome e outra chamada cargo para as respectivas propriedades nome e cargo do objeto pessoa, podemos pegar as propriedades que quiser)
const {nome, cargo} = pessoa;
console.log(nome);
console.log(cargo);

//Podemos tambem renomear uma propriedade, por exemplo: se eu ja tivesse uma variavel chamada empresa e quisesse pegar a propriedade empresa do objeto
const {empresa:empresaTecnologia} = pessoa;
console.log(empresaTecnologia)

//============================================================

//Desconstruindo um array:

let nomes = ['Matheus', 'Lucas', 'Henrique', 'Fernando']

//Se eu quiser pegar um item do array
console.log(nomes[0]) //Matheus

//Se eu quiser descontruir o array(pegamos o elemento pelo indice)
let {0:nome1, 1:nome2, 2:nome3, 3:nome4} = nomes
console.log(nome4);

//Existe uma segunda maneira de descontruir um array (atraves da posição)
let [primeiroNome, segundoNome, terceiroNome, quartoNome] = nomes
console.log(segundoNome)