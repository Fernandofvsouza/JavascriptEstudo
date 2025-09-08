/*
Em JavaScript, um método de objeto é uma função associada a uma propriedade de um objeto.

Ou seja, é uma função armazenada dentro de um objeto, que geralmente é usada para definir comportamentos desse objeto.
*/

const cachorroPedro = {
    nome: 'Pedro',
    raca: 'Corgi',
    idade: 3,
    latir: function(){
        console.log('AU AU AU AU!')
    }
};
//Latir é um metodo do objeto cachorroPedro
cachorroPedro.latir()

//Sintaxe mais moderna (ES6):
const pessoa = {
    nome: "Lucas",
    falar() {
      console.log("Olá, eu sou " + pessoa.nome);
    }
  };
  
  pessoa.falar(); // Olá, eu sou Lucas