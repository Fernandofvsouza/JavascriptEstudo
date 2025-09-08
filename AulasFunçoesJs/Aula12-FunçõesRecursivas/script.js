//Função recursiva é uma função que ela se auto executa ou seja Uma função recursiva é uma função que chama a si mesma durante sua execução.
//EX: Numeros de tentativas de senha
const tentativasDeSenha = 0;
function verificaNumeroDeTentativasDeSenha(num){
    if (num < 2){
        console.log(num);
        num = num + 1
        return verificaNumeroDeTentativasDeSenha(num)//Chamada recursiva
    }
}
verificaNumeroDeTentativasDeSenha(tentativasDeSenha)

//Outro Exemplo: 
function contagemRegressiva(n) {
  if (n <= 0) {
    console.log("Fim!");
    return;
  }

  console.log(n);
  contagemRegressiva(n - 1); // chamada recursiva
}

contagemRegressiva(5);

// Exemplo clássico: Fatorial de um número
//5! = 5 × 4 × 3 × 2 × 1 = 120
function fatorial(n) {
    if (n === 0 || n === 1) {
      return 1; // caso base
    }
  
    return n * fatorial(n - 1); // chamada recursiva
  }
  
  console.log(fatorial(5)); // 120