//O operador spread (...) é usado para espalhar os elementos de um array, objeto ou string. Ele desmonta esses valores em partes individuais. ou seja ele descompacta os elementos
//ex: queremos encontrar o maior e o menor numero desse array
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers)
let minimum = Math.min(...numbers)
console.log(maximum, minimum)

//EX: com string separando as letras de um nome e colocando um hifen no meio de cada letra
let username = 'Fernando';
let letters = [...username].join('-');
console.log(letters)

//Ex: juntando dois arrays
let fruits = ['Maçã', 'Banana', 'Laranja']
let vegetables = ['Batata', 'Cenoura', 'Abobora']

let foods = [...fruits, ...vegetables, 'Eggs', 'Leite'];
console.log(foods)