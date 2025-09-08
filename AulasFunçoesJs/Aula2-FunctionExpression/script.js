/*

Functions declaration x function expression

*/
/*
//Function declaration:
essaPalavraEUmPalindrome(rever) //A function declaration permite ser chamada antes do bloco de codigo da função (hoisting)

//Essa é a maneira de declarar a function declaration
function essaPalavraEUmPalindrome(palavra){
    let separandoAsLetrasDaPalavra = palavra.split('');
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join('');

    if(palavra == palavraInvertida){
        console.log(`A palavra ${palavra} é um palindrome`)
    }else{
        console.log(`A palavra ${palavra} não é um palindrome`)
    }

}*/

//Function expression: 
const essaPalavraEUmPalindrome = function(palavra){
    let separandoAsLetrasDaPalavra = palavra.split('');
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join('');

    if(palavra == palavraInvertida){
        console.log(`A palavra ${palavra} é um palindrome`)
    }else{
        console.log(`A palavra ${palavra} não é um palindrome`)
    }
}
essaPalavraEUmPalindrome('radar') //A function expression nao aceita esse comportamento de hoisting por isso que a função tem que ser chamada apos a função


