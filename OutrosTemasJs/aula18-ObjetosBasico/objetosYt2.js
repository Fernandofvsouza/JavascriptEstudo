/*
-Objetos são basicamente variaveis com muitos valores dentro

ex: const carro = {marca:'ford', modelo:'ka', ano:2015}

os valores dentro de um objeto são chamados de propriedades

objetos tambem podem ter métodos. Um método é uma função colocadas dentro de uma propriedade.

*/
//Objeto literal, quando determinamos as propriedades do objeto
const carro = {
    marca:'Ford',
    modelo:'Ka',
    ano:2015,
    placa: 'ABC-1234',
    //Metodo: uma funcção colocada dentro da propriedade
    buzina: function(){
        alert('biiiiiiiiiii')
    },
    completo: function(){
        return `A marca é ${this.marca}, o modelo é ${this.modelo}`    }
};

//Como pegar e mostrar um valor 
console.log(carro.marca);
console.log(carro.placa);
carro.buzina();
alert(carro.completo());