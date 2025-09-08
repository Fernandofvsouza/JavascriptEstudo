//               01234567
let umaString = 'um texto';

//como pegar um elemento da string 
console.log(umaString[4]); // vai pegar a letra E do texto
console.log(umaString.charAt(4)); // serve pra pegar a letra de uma string tambem

console.log(umaString.indexOf('texto')); //pra encontrar em qual indice(posição) começa a palavra texto
console.log(umaString.lastIndexOf('texto')); // pra encontrar em indice(posição) mas começando do final da palavra

console.log(umaString.replace('um', 'outro')) // trocando as palavras da string, troquei a palavra um pela palavra outro
console.log(umaString.replace(/t/g, '#'))//Troquei a letra t por uma #

console.log(umaString.length); //Para descobrir o tamanho da string

let travaLingua = 'O rato roeu a roupa do rei de roma'
console.log(travaLingua.slice(2, 6))//Assim pegamos uma palavra da string, nesse caso seria a palavra rato 

console.log(travaLingua.toLowerCase());// a string vai ficar toda em minusculo
console.log(travaLingua.toUpperCase()); // a string vai ficar toda em maiuscula