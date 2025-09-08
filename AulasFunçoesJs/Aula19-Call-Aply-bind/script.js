/*
O método .call() é uma função capaz de alterar o valor this
*/
//Exemplo de objeto e uma função que faz referencia ao this sem ter o this referenciado em seu escopo.
const article = {
    title: 'Descomplicando call, aply e bind',
    language: 'Javascript'
}
function print(){
    console.log(`${this.title} em ${this.language}.`);
}

print();//Saida undefined em undefined pois a função print e o objeto article nao possuem nenhuma ligação

//Então podemos usar a o call para especificar o contexto de this
print.call(article)


/*
Apply: o Apply funciona exatamente como o metodo call, porem seu segundo parametro rece um array dos parametros da função enquanto o primeiro parametro continua recebendo o valor que sera atribuido ao this
*/
//Ex com apply:
function sumNumbers(firstNumber, secondNumber){
    const sum = this + firstNumber + secondNumber;
    console.log(sum)
}
sumNumbers.apply(5, [2, 7])//Saida 14

