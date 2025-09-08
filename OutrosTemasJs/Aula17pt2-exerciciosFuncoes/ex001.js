function ParOuImpar (a){
    if(a % 2 === 0){
        return 'O numero é par'
    } else{
        return 'O numero é impar'
    }
}

let entrada = prompt('Digite um numero: ');
let numero = Number(entrada);

let resultado = ParOuImpar(numero);
document.getElementById('res').innerHTML = `<h1>${resultado}</h1>`
