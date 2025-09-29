//Revisão funções construtoras
//Funcoes construtoras sao funcoes que criam objetos
/*
	•	Uma constructor function nada mais é do que uma função normal, mas usada com a palavra-chave new.
	•	A convenção é que o nome da função começa com letra maiúscula para indicar que é uma “construtora”.
	•	Dentro dela, usamos this para atribuir propriedades ao objeto que será criado.
*/
//Beneficios: O benefício é criar objetos de forma estruturada, reutilizável e consistente, permitindo métodos compartilhados via protótipo.
//Exemplo:
function Person(name){
    this.name = name;
    this.talk = function(){
        return `I'am ${this.name}`
    }
}
const fernando = new Person('Fernando')
console.log(fernando.talk())//saida I'am Fernando
const joao = new Person('João')
console.log(joao.talk())//saida I'am João

//Exemplo 2:
function SuperElement(type, content){
    this.el = document.createElement(type)
    this.el.innerText = content
    document.body.append(this.el)
    this.el.addEventListener('click', () => {
        console.log('this.el')

    })   
}
const h1 = new SuperElement('h1', 'Hello World')
const p = new SuperElement('p', 'How are you?')
