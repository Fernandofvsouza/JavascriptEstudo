//Rest operator
//O rest operator em JavaScript é um recurso que permite agrupar múltiplos valores em um único array ou objeto.

//Exemplo lista de convidados que não sabemos a quantidade total
function convidados(...nomes){
    //Estamos falando pra função: eu nao sei a quantidade de parametros que vou precisar então recebe tudo e trata como um array
    console.log('Seja bem vindo todos convidados')
    console.log(nomes)
}

convidados('Matheus', 'Lucas', 'Maria')


//Outro exemplo: sorteador de numeros
function sorteador(...numeros){
    console.log(numeros)
    //Quero sortear um numero aleatorio dentro da minha lista
    const numeroGerado = parseInt(Math.random() * numeros.length);
    console.log(numeros[numeroGerado])
}

sorteador(1, 4, 5, 6, 7, 8, 20, 300, 550, 430, 65)

