//Metodos(Funções já prontas) no javascript para trabalhar com arrays
const pessoa = ['Dimitri', 'Teixeira', 30, 'Professor']

//Metodo join: adicionar um item ou caractere entre os itens do array ex:
pessoa.join(" - ")

//Adicionando e removendo itens na matriz
//remover o ultimo item da matriz:
pessoa.pop();
//Adicionar um item na lista:
pessoa.push(1.80)
//Remover o primeiro item da matriz:
pessoa.shift() //Automaticamente todos os indices são alterados
//Adicionar um item no primeiro item do array:
pessoa.unshift('Marcelo')
//Apagar um item:
delete pessoa[1]
//Juntar varias matrizes em uma só
const lista1 = ['Arroz', 'Feijão', 'Açucar', 'Leite']
const lista2 = ['Limão', 'Tomate', 'Abacaxi']
const lista3 = ['Frango', 'Picanha']
const superLista = lista1.concat(lista2, lista3)

//Fatiar ou dividir um array
const jogadores = ['Patrick brey', 'Marquinhos', 'Pelé', 'Maradona', 'Neymar','Messi','Cristiano Ronaldo', 'Romarinho', 'Vampeta', 'Ramiro']
const craques = jogadores.slice(2, 7)//Passamos como argumento a posição pra frente que queremos dividir, se a lista tiver um limite que voce quer fatiar, voce passa como segundo parametro ate a posição que é para fatiar

//Mostrar os itens em ordem alfabetica
const jogadoresOrdemAlfabetica = jogadores.sort()

//Mostrar os itens em ordem desalfabetica
jogadoresOrdemAlfabetica.reverse()

//Colocando os numeros em ordem numerica
const numeros = [40,100,30,2,5,7,900,120354]
numeros.sort(function(a,b){
    return a-b
})
//Colocando os numeros em ordem decrescente
numeros.sort(function(a,b){
    return b - a
})
//Pegar o maior numero
function maiorNumero(array){
    return Math.max.apply(null, array)
}
maiorNumero(numeros)
//Pegar o menor numero
function menorNumero(array){
    return Math.min.apply(null, array)
}
menorNumero(numeros)

//Filtragem de numeros
//EX: MOSTRAR APENAS OS NUMEROS MAIORES QUE 20
const maior20 = numeros.filter(filtragem);
function filtragem(value, index, array){
    return value > 20
}
console.log(maior20)