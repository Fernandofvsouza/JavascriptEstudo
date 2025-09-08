//O que é o this ?: this é uma palavra chave que referencia o escopo atual de execução, sempre retorna um objeto ou seja: Em JavaScript, this se refere ao contexto de execução atual. Em outras palavras, depende de como e onde a função é chamada

//Ex1: quando chamamos o this no escopo global ela retorna o objeto global, ou window{}
console.log(this)//saida window{}

//ex2: Dentro de um objeto
const pessoa = {
    nome: 'Ana',
    falar() {
      console.log(this.nome);
    }
  };
  
  pessoa.falar(); // Ana

//Ex3 dentro de uma função no strict
function teste() {
    console.log(this.nome);
}
  
teste(); //Retorna o objeto window

//Ex4: dentro de uma função use strict

function teste() {
    "use strict";
  console.log(this);
}

teste(); // retorna undefined

//Ex5: Com call e apply, você pode forçar o valor de this.
function saudacao() {
    console.log(`Olá, ${this.nome}`);
  }
  
  const user = { nome: 'João' };
  
  saudacao.call(user); // Olá, João
