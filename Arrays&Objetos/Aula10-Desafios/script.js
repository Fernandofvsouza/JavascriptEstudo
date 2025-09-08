/*
Crie uma lista de produtos
*/
let produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado']

//1. Exiba essa lista no console
console.log(produtos)

//2.Mostre no console quantos produtos tem nessa lista
console.log(produtos.length)

//3.Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes
produtos.splice(2, 1)
console.log(produtos)

//4.Faça uma busca na sua lista por algum produto, por exemplo procure por computador e caso exista esse produto exiba um console falando que este produto existe e mostre tambem o nome deste produto caso nao exista mostre uma mensagem avisando que o produto nao foi encontrado

let computadorExist = produtos.find((item) =>{
    return item === 'Computador'
})

if(computadorExist){
    console.log(`O produto ${computadorExist} existe`)
}else{
    console.log(`O produto nao existe`)
}

//5.remova o quinto item da sua lista
produtos.splice(2, 1)
console.log(produtos)


/*
Crie uma lista de apenas numeros 1,3,5,7,0,9
*/
let numeros = [1,3,5,7,0,9]

//1.ORDENE ESSA LISTA DO MENOR PARA O MAIOR
let ordemCrescente = numeros.sort(function(a,b){
    return a-b
})
console.log(ordemCrescente)

//2.Retir o primeiro numero desta lista
ordemCrescente.splice(0, 1)
console.log(ordemCrescente)

//3.Inverta toda ordem da sua lista
let ordemDecrescente = ordemCrescente.sort(function(a,b){
    return b-a
})
console.log(ordemDecrescente)

/*
Crie uma string que contenha o dia de hoje
*/
let dia = '29/08/2025'
//1.Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes e ano onde contenha apenas o ano
let partes = dia.split("/")
let diaHoje = partes[0]
let mes = partes[1]
let ano = partes[2]
console.log(`O dia: ${diaHoje}, o mes: ${mes}, e o ano: ${ano}`)