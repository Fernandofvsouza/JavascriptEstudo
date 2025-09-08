/*FUNÇÕES
Uma função Javascript é um bloco de codigo projetado para executar uma tarefa específica.

é como uma pequena 'Fabrica' onde voce faz uma entrada e ela te da uma saida

pode ser encarado como mini programas projetados para fazer uma tarefa que vai contribuir para todo codigo

uma função javascript é executada quando algo a invoca (chama-a)
*/
//Função de soma
//            parametros
function soma(valor1, valor2){
    //Bloco de codigo:
    //retorno é a saída da função
    return valor1 + valor2;
}
document.getElementById('texto').innerHTML = soma(10, 20);


//OutroExemplo
//Função de cotação do dolar
function realParaDolar(real, cotaçãoDoDolar){
    return real * cotaçãoDoDolar;
}
let valorReal = 7.89
let cotacao = 5.08
let total = realParaDolar(valorReal, cotacao);
alert(`O valor em real é R$ ${valorReal}, e o valor em dolar é U$: ${total.toFixed(2)}`)

//As funções tambem podem ser chamadas atraves de eventos
//Exemplo
function mudarCor(){
    document.body.style.backgroundColor = 'blue'
}

