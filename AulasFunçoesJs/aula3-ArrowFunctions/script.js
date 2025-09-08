/*
O que são arrow functions?

Arrow functions são uma forma mais concisa de escrever funções em JavaScript, elas foram introduzidas no es6(ECMAscript 2015) e oferecem uma sintaxe mais curta e simples especialmente util para funções anonimas.

Elas utilizam a sintaxe ()=> (parece uma seta, dai o nome arrow function)

*/

//Função tradicional
function soma(a, b){
    return a + b;
}

//Arrow function
const somaArrow = (c, d) =>{
    return c + d;
}

/*Podemos notar algumas diferenças:
- A palavra chave function foi removida
- adicionamos uma seta entre os parametros e o corpo da função
*/

/*Simplificação adicional
se a função tiver apenas uma linha que retorna um valor, podemos simplifica-la anda mais removendo as chaves{} e a palavra return
*/
//ARROW FUNCTION MAIS SIMPLIFICADA
const soma3 = (e, f) => e + f;

/*Nas arrows functions temos algumas regras para os parametros das funções
Quando a arrow function tem so um parametro os parenteses são opicionais. quando a arrow function não tem nenhum parametro ou mais que dois os parenteses são obrigatorios
ex:
*/
//Função tradicional sem parametros:
function digaOi(){
    return 'Oi!';
}
//Arrow function sem parametros:
const digaOla = () => 'Olá!';

//Função tradicional com 1 parametro:
function quadrado(n){
    return n * n;
}

//Arrow function com 1 parametro:
const cubo = n => n * n * n;

//Arrow function com 2 ou mais parametros:
const soma4 = (g, h, i) => g + h + i;

/*A verdadeira vantagem da sintaxe mais curta se torna evidente em contextos onde funções anonimas são usadas frequentemente, como callbacks
*/
//Exemplo com função tradicional
const numeros = [1, 2, 3, 4, 5]
const quadrados = numeros.map(function(numero){
        return numero * numero;
})

//Exemplo com arrow function
const quadradox = numeros.map(numero => numero * numero);

//Outro exemplo: Função tradicional de callback de evento
document.getElementById('meuBotão').addEventListener('click', function(){
    console.log('Botão clicado!');
});

//Com arrow function
document.getElementById('meuBotão').addEventListener('click', () => {
    console.log('Botão clicado!');
});

//Outro exemplo: funções temporizadas tradicionas
setTimeout (function(){
    console.log('Executado após 1 segundo');
}, 1000);

//Arrow function:
setTimeout(()=> {
    console.log('Executado apos 1 segundo');
}, 1000)


/*Diferenças mais tecnicas
-Não possuem 'this' proprio: O valor de this dentro de uma arrow function é herdado do contexto onde a função foi definida */

//Exemplo função tradicional
document.getElementById('meuBotão').addEventListener('click', function(){
    console.log('Função tradicional:', this);
    //This se refere ao elemento que disparou o evento (o botão)

    function funcaoInterna(){
        console.log('Dentro de uma Função tradicional interna: ', this); //Dentro de uma função tradicional interna, this se refere ao contexto  global (undefined)
    }
    funcaoInterna()
})

//Exemplo com arrow function
document.getElementById('meuBotao').addEventListener('click', function(){
    console.log('Função tradicional:', this);
    //this se refere ao elemento que disparou o evento (o botão)

    const arrowFuncao = () => {
        console.log('Dentro de uma arrow fucntion:', this)
        /*Dentro de uma arrow function, 'this' herda o valor do contexto onde foi definida neste caso seria o botão
         */
    };

    arrowFuncao();

})

/*
.Não possuem arguments:
As arrow function não tem a variavel arguments, que é disponivel em funções tradicionais para acessar todos os argumentos passados. para obter todos os argumentos em uma arrow function, pode-se usar o rest parameter (...args).
*/

//Exemplo função tradicional
function fazerBolo(){
    console.log(arguments);
}
fazerBolo('farinha', 'ovos', 'leite'); //['farinha', 'ovos', 'leite']

//arrow function
let fazerBolo = (...ingredientes) => {
    console.log(ingredientes);
}
fazerBolo('farinha', 'ovos', 'leite'); //['farinha', 'ovos', 'leite']