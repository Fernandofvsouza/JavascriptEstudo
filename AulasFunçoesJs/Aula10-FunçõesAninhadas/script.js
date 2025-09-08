//Funções aninhadas são funções definidas dentro de outras funções.
//Ou seja, você tem uma função interna que só existe dentro do escopo da função externa.
//ex: Uma função de soma mas que antes calcule o quadrado desses numeros
function addSquares(value1, value2){
    function square(value){
        return value * value;
    }
    return square(value1) + square(value2);
}
console.log('resultado: ', + addSquares(2, 3))

//Outro exemplo: 
function saudacao(nome) {
    function formatarNome(n) {
      return n.toUpperCase();
    }
  
console.log("Olá, " + formatarNome(nome));
}
  
saudacao("Lucas"); // Olá, LUCAS

//Exemplo com closures:
function contador() {
    let numero = 0;
  
    function incrementar() {
      numero++;
      console.log(numero);
    }
  
    return incrementar;
  }
  
  const minhaContagem = contador();
  minhaContagem(); // 1
  minhaContagem(); // 2