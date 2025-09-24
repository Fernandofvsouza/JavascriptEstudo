//This
//Fora de escopo locais o this sempre se refere ao objeto global window;
//Em objetos o this se refere ao objeto que está sendo usado;
//exemplo:

//Ex1:Escopo global
console.log(this)//saida window{}
var teste = 5;
console.log(this.teste)//saida 5

//Ex2:Escopo de objeto
let pessoa = {
    nome:'Matheus',
    idade: 29,
    estudo: 'JavaScript',
    falar: function(){
        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    },
   aniversario: function(){
    this.idade++; //Alteramos o valor da propriedade atraves do this
   },
   linguagem: function(){
    return this.estudo;
   }

}
pessoa.falar();
pessoa.aniversario();
console.log(pessoa.idade)//saida 30
let linguagem = pessoa.linguagem();
console.log(`Eu estou aprendendo ${linguagem}`)



