//Escreva uma função chamada ePiasagem que recebe dois argumentos, largura e altura de uma imagem.
//retorne true se a imagem estiver no modo paisagem

function ePaisagem(l, alt){
    if(l > alt){
        return true;
    }
    return false
}

console.log(ePaisagem(400, 200));

//Refatorado 
const paisagem = (largura, altura) => largura >= altura 
console.log(paisagem(300, 300))