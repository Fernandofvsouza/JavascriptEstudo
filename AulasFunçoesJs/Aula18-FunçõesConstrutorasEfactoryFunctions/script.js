/*Funções construtoras e Funções factory
Uma função construtora é uma função usada para criar objetos novos com as mesmas propriedades e métodos.

Ela funciona como uma fábrica de objetos.

*/
//Maneira SEM função construtora e factory
const pessoa1 = {
    nome: 'Fernando',
    idade: 25,
    andar:() => console.log('Andando')
}

const pessoa2 = {
    nome: 'Josevildo',
    idade: 75,
    andar:() => console.log('Andando')
}

const pessoa3 = {
    nome: 'Josias',
    idade: 15,
    andar:() => console.log('Andando')
}

//Usando função factory
/*
	•	Não usa new
	•	Não usa this
	•	Sempre retorna um objeto explícito com return
	•	Mais simples, fácil de ler
	•	Ideal para criar objetos com lógica ou dados internos mais complexos (como closures)
*/
//Exemplo 1:
function Pessoa(nome, idade,){
    return {
        nome,
        idade,
        andar: () => console.log(`${nome} tem ${idade} anos e está andando`)
    }
}

const pessoa4 = Pessoa('Geison', 23)
pessoa4.andar()
const pessoa5 = Pessoa('Carlos', 90)
pessoa5.andar()

//Exemplo 2:


//Exemplo usando função construtora
/*
	•	Usa a palavra-chave new para instanciar
	•	Usa this para definir propriedades e métodos
	•	Não precisa de return
	•	Por convenção, o nome começa com letra maiúscula
	•	Usa protótipos (melhor para desempenho se usado certo)
*/
function Animal(nome, classe){
    this.nome = nome
    this.classe = classe
    this.andar = () => console.log(`${this.nome} é um ${this.classe} e está andando`)
}
const animal1 = new Animal('Zeca', 'Coelho')//A palavra-chave new é usada para criar uma instância (cópia) de um objeto a partir de uma função construtora ou classe.
//Instanciar = criar um objeto novo com base em um molde (função construtora ou classe).
animal1.andar()
const animal2 = new Animal('João pires', 'Gato')
animal2.andar()

