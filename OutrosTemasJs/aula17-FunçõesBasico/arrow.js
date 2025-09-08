//Função com mais de 1 parametro
function subtracao(a, b){
    return a - b;
}
//Arrow function da mesma função com mais de 1 parametro

const subtracao2 = (a, b) => {
    return a - b;
};

// Funcao com 1 parametro
function somar2(a){
    return a + 2;

}

//arrow function da mesma função com 1 parametro
const somar3 = (a) => {
    return a + 2;

};

// funcao sem parametro
function diaDoMes(){
    return new Date().getDate();
}
console.log(diaDoMes());

//Arrow function da mesma função sem parametro

const ano = () => {
    return new Date().getFullYear();
};
console.log(ano());


//Quando a instrução so tem uma linha que é a função de retorno podemos simplificar mais ainda
//EX:
const mes = () =>  new Date().getMonth();

console.log(mes());

//EX2: 
const somar4 = a => a + 2; //Quando a função tem um parametro so, ela nao precisa de parenteses
console.log(somar4(4))

//Ex3:
const subtracao3 = (a, b) => a - b;
console.log(subtracao3(10, 6));

//Ex de arrow function para um função grande
//Modo normal:
function superFuncao(w,z){
    let sub = w - z;
    sub -= 2;
    let dailyMonth = new Date().getDate();
    return dailyMonth;
}

//Modo arrow:
const superFuncao2 = (y, x) => {
    let sub = x - y;
    sub -= 2;
    let dailyMonth = new Date().getDate();
    return dailyMonth;

}