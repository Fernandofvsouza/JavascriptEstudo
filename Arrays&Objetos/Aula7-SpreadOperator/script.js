//Spread operator: Podemos usar tanto em objetos como em arrays
//O spread operator (...) serve para espalhar (ou “desempacotar”) os elementos de um array, objeto ou string em outro lugar.
//Ele foi introduzido no ES6 e é super útil para copiar, combinar e passar valores.

//Array
//Ex: se eu quiser que o segundo array contenha o primeiro
let primeiros = [1, 2, 3];
let numeros = [...primeiros, 4, 5, 6];
console.log(numeros)

//Objetos
let pessoa = {
    nome:'Fernando',
    sobrenome: 'Souza',
    idade: 25
}

let dadosCompleto = {
    ...pessoa,
    cargo: 'Garçom',
    estudos: 'Engenharia de software'
}

console.log(dadosCompleto)

//Exemplo mais real
function novoUsuario(info){
    let dados = {
        ...info,
        status:'Ativo',
        inicio: '20/03/2023',
        codigo: '1234567' 
    }
    console.log(dados)
}

novoUsuario({
    nome: 'José',
    sobrenom: 'Silva',
    cargo: 'Dev'
})
