//Uma IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é definida e executada imediatamente após sua criação.
//Como invocar uma função da maneira tradicional
function x(){
    return `Função invocada da maneira tradicional`
}
//Invocando uma iife
(function (){
    return `Função IIFE`
})();
/*
Caracteristicas de uma iife
	•	Função anônima: geralmente sem nome.
	•	Parênteses externos (): transformam a declaração da função em uma expressão.
	•	Parênteses finais (): executam a função imediatamente.


*/

// Com arrow function também funciona:
(() => {
    console.log("IIFE com arrow function!");
  })();