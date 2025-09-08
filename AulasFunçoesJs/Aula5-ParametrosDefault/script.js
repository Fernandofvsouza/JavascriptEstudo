function calc(a, b){
    return (2 * (a + b));
}
calc(2, 3) //10
calc(3)//NaN, Porque nao estamos passando o segundo argumento e ele esta com o valor undefined: 3 + undefined = NaN
function calc(a, b =0){
    return (2 * (a + b));
}
//Definimos o valor default de b para igual a 0, o que acontece se não passar um valor para b, no argumento, o seu valor será 0