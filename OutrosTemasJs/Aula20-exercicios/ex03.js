const identificador = (lista) => {
    if(lista.length === 0){
        console.log('Informe uma lista não vazia')
        return;
    }
    let maiorElemento = lista[0];
    let menorElemento = lista[0];

    for (let posicaoElemento = 0; posicaoElemento < lista.length; posicaoElemento += 1){
        // tentando achar o menor elemento
        if(lista[posicaoElemento] < menorElemento){
            menorElemento = lista[posicaoElemento];
        }
        //tentando achar o maior elemento
        if(lista[posicaoElemento] > maiorElemento){
            maiorElemento = lista[posicaoElemento];
        }
    }
    console.log(`O menor elemento é ${menorElemento} e o maior elemento é ${maiorElemento}`);


} 

identificador([20, 45, 89, 13, 47, 98, 57, 11, 9, 92]);