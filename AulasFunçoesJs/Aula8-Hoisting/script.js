//Hoisting é um comportamento javascript em que as funções são lançadas para o topo do codigo, quer dizer que voce pode acessar a função antes da declaração, funciona apenas usando a palavra function (Não funciona com arrow functions)
//EX com funções:
digaOla()

function digaOlá(){
    console.log('Olá')
}

//Ex com variaveis:
//Vai resultar undefined, pois por mais que sua inicialização foi feita, o valor dela ('joão') ainda nao foi definido
console.log(nome);
var nome = 'joão'