/*
Eventos de tempo com javascript
os eventos de tempo permitem a execução do codigo em intervalos de tempo especificados. Esses intervalos de tempo sao chamados de cronometragem

Os dois metodos chaves são:
setTimeout(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um numero especificado de milisegundos

setInterval(function, milliseconds)
->é o mesmo que o setTimeout(), mas repete a execução da função continuamente

*/

function ativarContagem(){
    /*
    Set timeOut
    document.getElementById('tempo').innerHTML ='Começou a contar'
    //Ativa a função apenas uma vez quando der o tempo especificado
    tempo = setTimeout(function(){
        document.getElementById('tempo').innerHTML ='Executou o setTimeOut'
    }, 5000)
    */

    tempo = setInterval(function(){
        let cronometro = document.getElementById('tempo').innerHTML;
        let soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma
    }, 1000)


}

function pararContagem(){
    /*
    Set timeout
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML ='Parou a contagem'
    */

    clearInterval(tempo)


}
