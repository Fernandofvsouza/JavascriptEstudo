//Escreva uma função que recebe um numero e retorne o seguinte
//Numero é divisivel por 3 = fizz
//numero é divisivel por 5 = buzz
//numero é divisivel por 3 e 5 = fizzbuzz
//numero nao é divisivel por 3 e 5 = retorna o proprio numero
//checar se o numero é realmente um numero = retorna NaN
//use a função com numeros de 0 a 100
function div(rand){
    
    if (typeof rand !== 'number'){
        return NaN
    }else if (rand % 5 === 0 && rand % 3 === 0){
        return 'FizzBuzz'
    } else if (rand % 5 === 0){
        return 'Buzz'
    } else if (rand % 3 === 0){
        return 'Fizz'
    } else {
        return rand
    }


}
/*
console.log(`Número sorteado: ${rand}`);
console.log(div(rand));
*/

//Rodar para todos os numeros
for (let i = 0; i <= 100; i++) {
    console.log(`${i}: ${div(i)}`);
}