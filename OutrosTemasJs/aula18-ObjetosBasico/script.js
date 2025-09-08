//
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Fernando',
    sobrenome: 'Souza',
    idade: 24
};
//Para acessar o atributo da pessoa1 ex:
console.log(pessoa1.nome);
console.log(pessoa2.idade);

//Podemos criar funções que cria esse objeto
function criaPessoa(nome, sobrenome, idade){
    return {
       /* nome: nome,
        sobrenome : sobrenome,
        idade: idade (Maneira completa)*/
        //Maneira abreviada
        nome, sobrenome, idade
    };
}

const pessoa3 = criaPessoa('João', 'Souza', 23);
const pessoa4 = criaPessoa('Jose', 'Figueiredo', 27);
const pessoa5 = criaPessoa('Claudio', 'Junior', 33);
const pessoa6 = criaPessoa('Gabriela', 'Silva', 55);
const pessoa7 = criaPessoa('Maria', 'Souto', 80);

console.log(pessoa4.nome, pessoa5.sobrenome);
console.log(pessoa6.idade);

//Uma função dentro do objeto
const pessoa8 = {
    nome: 'Lindenbergh',
    sobrenome: 'Jeca',
    idade: 70,

    //função
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando Oi, a minha idade atual é ${this.idade}`)
    },

    //Incrimentar +1 na idade 
    incrementaIdade(){
        this.idade++;
        
    }
}

pessoa8.fala();
pessoa8.incrementaIdade();
pessoa8.fala();
pessoa8.incrementaIdade();
pessoa8.fala();
pessoa8.incrementaIdade();
pessoa8.fala();

