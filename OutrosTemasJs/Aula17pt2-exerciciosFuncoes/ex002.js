function texto(a){
    return a.toUpperCase();
}

let frase = prompt('Digite uma frase: ');
let resultado = texto(frase);

document.getElementById('res').innerHTML = `<br>${resultado} </br>`