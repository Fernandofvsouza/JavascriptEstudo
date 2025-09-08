//O método reduce é usado em arrays para reduzir todos os elementos a um único valor. Esse valor pode ser um número, string, objeto ou até outro array.
//Exemplos:
//Some todos os numeros (reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
//Some todos os numeros
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador = acumulador + valor
    return acumulador

}, 0) //Valor inicial do acumulador);

console.log(total)

/*
	•	acumulador → guarda o resultado parcial (vai sendo atualizado a cada iteração).
	•	valorAtual → o elemento atual do array.
	•	índice → (opcional) índice do elemento atual.
	•	array → (opcional) o próprio array sendo percorrido.
	•	valorInicial → (opcional) valor inicial do acumulador. Se não passar, ele começa com o primeiro elemento do array.

*/