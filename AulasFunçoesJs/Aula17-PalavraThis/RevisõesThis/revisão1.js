//This = referencia ao objeto onde o this esta senndo usado
//exemplo: person.name = this.name
//O this não funciona em arrow functions

const person1 = {
    name: 'Spongebob', //this.name
    favFood: 'Hamburgers', //this.favFood
    city: 'Bikini Bottom', //this.city
    sayHello: function(){
        console.log(`Hello, my name is ${this.name} and I like ${this.favFood} and I live in ${this.city}`)
    }
}

person1.sayHello();

const person2 = {
    name: 'Patrick', //this.name
    favFood: 'Pizza', //this.favFood
    city: 'Bikini Bottom', //this.city
    sayHello: function(){
        console.log(`Hello, my name is ${this.name} and I like ${this.favFood} and I live in ${this.city}`)
    }
}

person2.sayHello();

//This no escopo global
console.log(this)//saida window{}

//This no escopo de uma função
function sayHello(){
    console.log(this)//saida window{}
}

sayHello();

