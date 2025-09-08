//Funções de primeira classe ou first class functions
//Isso significa que Funções são tratadas como valores, assim como qualquer outro tipo de dado(como numeros string ou objetos), isso permite que:

//1:Atribuir funções a variaveis
const nome = function DigaSeuNome(){
    console.log('Fernando')
};

//2:Passar funções como argumentos para outras funções
function executar(func){
    func(); //Executa a função recebida como argumento
}
executar(DigaSeuNome()) //Saida: Fernando

//3:Retornar funções de outras funções
function criarSaudacao(nome) {
    return function() {
      console.log("Olá, " + nome + "!");
    };
  }
  
const saudacaoJoao = criarSaudacao("João");
saudacaoJoao(); // Saída: Olá, João!

//4:Armazenar estruturas de dados como arrays
//Ex com array
const funcoes = [
    function() { console.log("Função 1"); },
    function() { console.log("Função 2"); },
    function() { console.log("Função 3"); }
  ];
  
funcoes[0](); // Saída: Função 1
funcoes[1](); // Saída: Função 2
funcoes[2](); // Saída: Função 3

//Ex com objetos:
const operacoes = {
    somar: function(a, b) { return a + b; },
    multiplicar: function(a, b) { return a * b; }
  };
  
console.log(operacoes.somar(2, 3));       // Saída: 5
console.log(operacoes.multiplicar(2, 3)); // Saída: 6  

/*
Por que isso é importante?

Isso torna o JavaScript uma linguagem muito poderosa para programação funcional. Com funções de primeira classe, é possível:
	•	Criar funções de ordem superior (funções que recebem ou retornam outras funções),
	•	Trabalhar com callbacks (como em setTimeout, map, filter, etc),
	•	Usar closures (funções que “lembram” do escopo onde foram criadas).
*/