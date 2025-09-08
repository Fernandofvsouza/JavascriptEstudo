//Map = percorrer todo um array
let lista = ['Matheus', 'Maria', 'Jose']
lista.map((item, indice) => {
    console.log(`Passando: ${item} e ${indice}`)  
})

//Reduce = o reduce busca reduzir um array
let numeros = [5, 3, 2];
let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`total ate o momento ${acumulador}`)
    console.log(`${numero} valor atual`)
    console.log(`${indice} posição atual`)
    console.log(`${original} array original`)

    return acumulador += numero
})

console.log(`total do reduce ${total}`)

//Find = buscar alguma coisa 
let listagem = [5, 3, 'Jose', 2, 'Matheus']
let busca = listagem.find((item) => {
    return item === 'Jose'
    //Se ele encontrar ele vai retornar o item encontrado, e por mais que haja itens iguais, ele retorna apenas o primeiro que encontrar
    //caso o item nao exista e ele nao encontre, ele irá retornar undefined

    //Caso voce nao queira retornar o item encontrado voce pode fazer
    /*
    if(item === 'Jose'){
        return console.log('Item encontrado com sucesso')
    }
    */
})
console.log(busca)


//Filter = FILTRAR ALGO DENTRO DE UM ARRAY

let palavras = ['Matheus', 'Ana', 'Jose', 'Ricardo Silva', 'Ronaldinho']
//Supondo que voce queira filtrar os nomes que tem letras menor ou igual a 4

let resultado = palavras.filter((item) => {
    return item.length <= 4;
})
console.log(resultado)