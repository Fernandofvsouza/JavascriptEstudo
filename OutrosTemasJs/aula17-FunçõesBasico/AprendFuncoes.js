/*Functions // Funções
  -Trecho de codigo que é executado somente quando solicitado
  -Trecho de codigo que pode ser reutilizado varias vezes

  [x]O que é uma funcão e como usar
  [x]Função void ( vazia )
  [x]Função com pârametros
  [x]Função return
  [x]Arrow function
*/
//Essa é um tipo de função chamada de void (vazia) pois nao retorna nada
function digaMeuNome(){
    const name = 'Fernando Souza'
    console.log(name);
}

//A função so é executada quando solicitada
digaMeuNome();

//função com parametros, parametros é o que colocamos nos parenteses
function digaQualquerNome(nome){
    console.log(nome);
}

digaQualquerNome('Maria Jose');
digaQualquerNome('Maria João');
digaQualquerNome('Maria das pleias');

function soma(numero1, numero2){
    const resultado = numero1 + numero2
    console.log(resultado);
}

soma(6, 2);

// Funções com return

function multi(numero5, numero6){
    const result = numero5 * numero6;
    return result;
}

const resultDaMulti = multi(30, 40);
console.log(resultDaMulti);

//Outro exemplo

function estaEndividado(receita, gastos){
    if(receita > gastos){
        return 'Está no azul'
    }else{
        return 'Está no vermelho'
    }
}

const Maria = estaEndividado(5000, 7000);
const Gustavo = estaEndividado(1000, 500);
console.log(Maria);
console.log(Gustavo);

// Arrow function, uma forma moderna para representar funções
const digaTeuNome = (nome0) => {
    console.log(nome0)
}

digaTeuNome('Fernando');