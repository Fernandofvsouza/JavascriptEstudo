//Revisão factory functions
//Factory functions é uma função que retorna um objeto
//São praticas quando precisamos criar muitos objetos com as mesmas propriedades e métodos mas com pequenas variações
//Exemplo, imagina que precisamos criar objetos com todas as pessoas da sua familia
function personFactory(name){
    const person = {
        name,
        talk(){
            return `I'am ${name}`
        }
    }
    return person
}
const me = personFactory('Fernando')
const you = personFactory('João')
console.log(me.talk())//saida I'am Fernando
console.log(you.talk())//saida I'am João

/*
Beneficios:
-simples
-facil de ler
-sem codigos repetidos
-privacidade de dados
-facil de manter
-facil de testar
-facil de usar
-facil de entender
-facil de modificar
-facil de adicionar novas funcionalidades

*/

//Exemplo 2 e mais pratico :
function createElement(type, text, color){
    const el = document.createElement(type)
    el.innerText = text
    el.style.color = color
    document.body.append(el)
    return {
        el: el,
        setText(text){
            el.innerText = text
        },
        setColor(color){
            el.style.color = color
        }
    }
}
const h1 = createElement('h1', 'Hello World', 'red')
h1.setText('Bye World')
h1.setColor('blue')
const p = createElement('p', 'Hello World', 'green')
p.setText('Bye World')
p.setColor('yellow')