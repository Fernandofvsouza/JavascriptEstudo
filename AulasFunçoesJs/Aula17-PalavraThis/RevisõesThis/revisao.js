//Revisão this dentro de funções colorCode
//no escopo global o this sempre se refere ao objeto global window
//exemplo:
console.log(this)//saida window{}

//No escopo de um objeto o this se refere ao objeto que está sendo usado
//exemplo:
const obj = {
    name: 'John',
    sayHello: function(){
        console.log(this.name)//saida John
    }
}
obj.sayHello();//saida John


//No escopo de uma função o this se refere ao objeto global window
//exemplo:
function sayHello(){
    console.log(this)//saida window{}
}
sayHello();
//Geralmente o this se refere ao objeto que esta sendo usado no lado esquerdo do ponto (.)
//Exemplo:
function talk(){
    return `I'am ${this.name}` //this.name se refere ao objeto que está sendo usado no lado esquerdo do ponto (.)
}
const me = {
    name: 'Fernando',
    talk: talk
}
const you = {
    name: 'João',
    talk: talk
}
console.log(me.talk())//saida I'am Fernando, pois o this se refere ao objeto que esta sendo usado no lado esquerdo do ponto (.) (Me)
console.log(you.talk())//saida I'am João, pois o this se refere ao objeto que esta sendo usado no lado esquerdo do ponto (.) (You)

//Podemos usar tambem o .bind sem necessidade de usar a função dentro do objeto, passando o objeto como parametro
//Exemplo:
const girlfriend = {
    name: 'Leticya'
}
const girlfriendTalk = talk.bind(girlfriend)
console.log(girlfriendTalk())//saida I'am Leticya,

//Podemos usar tambem o .call sem necessidade de usar a função dentro do objeto, passando o objeto como parametro
//Exemplo:
const person1 = {
    name: 'João'
}
const person1Talk = talk.call(person1)
console.log(person1Talk())//saida I'am João,

//Quando temos algum outro paramentro dentro da função, fazemos referencia ao this usando o .call passando primeiro o objeto como parametro e depois o outro parametro
//Exemplo:
function sayMyName(lang){
    if(lang === 'pt'){
        console.log(`Olá, meu nome é ${this.name}`)
    }else if(lang === 'en'){
        console.log(`Hello, my name is ${this.name}`)
    }
}
const myself = {
    name: 'Fernando'
}
sayMyName.call(myself, 'pt')//saida Olá, meu nome é Fernando
sayMyName.call(myself, 'en')//saida Hello, my name is Fernando

//Em funções de callback o this se refere ao objeto global window
//Exemplo:
function callback(n){
    this.name = n
    setTimeout(() => {
        console.log(this)//saida window{}
    }, 1000)
}
callback('Fernando')//saida window{}




