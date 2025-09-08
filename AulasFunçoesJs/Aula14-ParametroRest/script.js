//O rest parameter (...) é uma forma de dizer:

//“junte todos os valores restantes em um array.”

//É muito útil quando você não sabe quantos argumentos uma função vai receber.
//ex:  Exemplo 2 – Separar o primeiro argumento do resto:
function mostrarPrimeiroEOutros(primeiro, ...resto) {
    console.log("Primeiro:", primeiro);
    console.log("Outros:", resto);
  }
  
  mostrarPrimeiroEOutros("Lucas", "João", "Maria", "Ana");

  //Saida: Primeiro: Lucas
 //Outros: [ 'João', 'Maria', 'Ana' ]

//Outro Exemplo
function numeros(num1, num2, ...restNums){
    console.log('Numero 1:' + num1)
    console.log('Numero 2:' + num2)
    console.log('Outros numeros: ' + restNums)
}

console.log(numeros(1, 2, 3, 4, 5, 6, 7, 8, 9))

//Outro exemplo
const showName = (...fullName) =>{
    console.log(fullName)
}
showName('Fernando', 'Figueiredo', 'Venceslau',  'de Souza')