const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Souza',
    idade:30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
console.log(pessoa);

//Supondo que queira pegar o nome da pessoa e jogar numa variavel
/*
const nome = pessoa.nome;
console.log(nome);
*/
//Usando a atribuição via desestruturação
//Estamos pedindo pra extrair do objeto pessoa essa chave nome e ja cria uma variavel 
const { nome, sobrenome: segundoNome, idade, peso = 80, endereco:{rua: r, numero} } = pessoa;
console.log(nome, segundoNome, idade, peso, r, numero);
//se existe uma chave que não esta no objeto igual o peso, podemos criar dentro da const
//Podemos tambem modificar o nome da variavel igual foi feito no sobrenome, que foi mudado o nome da var para segundoNome
//Podemos pegar coisas de outro objeto que esta dentro do objeto igual fizemos com rua e numero que estava dentro de endereco
//Podemos tambem modificar o nome da variavel que está dentro do objeto que esta no objeto igual fizemos com rua que mudou pra r

const carro = {
    marca: 'hyundai',
    cor: 'Branco',
    modelo: 'hb20',
    ano: 2015
}
//Podemos tambem usar o operador rest igual nos arrays
const{marca, ...resto} = carro
console.log(resto);//Vai mostrar tudo menos a marca