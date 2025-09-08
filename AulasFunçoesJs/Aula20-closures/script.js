//Closure é quando uma função lembra do seu escopo lexico, mesmo quando a função é executada fora desse escopo lexico
//o que é o escopo lexico:é o escopo onde a função definida
//Ex:
const somarXMais3 = require('./index')
console.log(somarXMais3())

//Outro exemplo: 
function saudacao(nome) {
    return function() {
      console.log(`Olá, ${nome}!`);
    }
  }
  
  const saudandoJoao = saudacao("João");
  saudandoJoao(); // Saída: Olá, João!
  /*
  O que acontece aqui?
	•	A função saudacao retorna outra função.
	•	A função interna (anônima) tem acesso à variável nome, mesmo depois da execução de saudacao ter terminado.
	•	Isso é um closure.
  */