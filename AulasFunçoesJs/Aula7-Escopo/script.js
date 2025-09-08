//Regras sobre o escopo de uma função
//1: Uma variavel definida dentro de uma função, não pode ser acessada em nenhum outro lugar fora da função
//2: Uma função consegue acessar todas as variaveis que estão definidas no escopo global
//E a regra é a mesma para funções dentro de outras funções
//* uma variavel definida dentro de uma função interna nao pode ser acessada em uma variavel externa
//*A função interna pode acessar a variavel da função externa
//Exemplo nos codigos:
//1
function doSomething(){
    let x = 10;
    const y = 20;
    var z = 30;
    console.log(x, y, z)
};
doSomething();
//y = x + 20;
//console.log(y) - //Vai dar undefined porque x não está definido no escopo global e sim dentro da função

//2
let f = 10;
function doSomething2(){
    console.log(f)
}
doSomething2()
//Essa função vai funcionar porque uma função consegue acessar uma variavel do escopo global