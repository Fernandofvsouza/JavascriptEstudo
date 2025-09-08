/*Arrays
os arrays em javascript são usados para armazenar varios valores em um unica variavel.Diferente dos objetos, que funcionam com propriedades ou 'Nomes' que voce da para os itens dentro dele, os arrays nao possuem propriedades. o item dentro dele é encontrado por sua posição

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

ex: const lista = ['arroz', 'feijão', 'macarrão', 'leite']

A lista[0](lista na posição 0) vai conter o valor arroz
a lista[1](lista na posição 1) vai conter o valor feijão
e assim por diante
*/

const lista = ['Arroz', 'Feijão', 'Macarrão', 'Leite']

//Para alterar o valor de um array:
lista[0] = 'Café'

//Os arrays podem armazenar qualquer coisa dentro dele:
lista[1] = {Supermercado: 'Carrefour',
            Item: 'Carne'
}

console.log(lista[1].Item)

//Para saber quantos itens tem dentro do array:
lista.length //4

//Como posso pegar o ultimo valor de um array:
lista[lista.length - 1]

//Se eu quiser adicionar um item dentro da matriz:
lista.push('Açucar')

//Como descobrir se é um array
Array.isArray(lista) //True
