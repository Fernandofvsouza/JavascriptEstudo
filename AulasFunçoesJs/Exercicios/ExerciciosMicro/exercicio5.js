//Desafio da verificação de um elemento em um array: crie uma função que deve esperar receber 2 parametros, primeiro deve ser um array de numeros e o segundo um numero que deseja conferir de existe dentro do array e com isso voce deve mostrar o resultado se esse numero existe dentro do numero de arrays



function verificação(numeros, numeroExistente){
    let buscagem = numeros.find( item => item === numeroExistente)

    if(buscagem !== undefined){
        console.log(`o numero ${numeroExistente} está na lista`)
    }else{
        console.log(`o numero ${numeroExistente} não se encontra na lista`)
    }

}

verificação([1, 5 ,65, 98, 86, 7, 34, 90, 8, 11, 15, 23], 88)