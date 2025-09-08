let botao = document.getElementById('button')
let soma = document.getElementById('soma')
let subtracao = document.getElementById('subtracao')
let multiplicacao = document.getElementById('multiplicacao')
let divisao = document.getElementById('divisao')
let resultado = document.getElementById('resultado')

botao.addEventListener('click', function(){
    let valor1 = document.getElementById('valor1').value
    let valor2 = document.getElementById('valor2').value
    let valorN1 = Number(valor1)
    let valorN2 = Number(valor2)
    let s = valorN1 + valorN2
    let m = valorN1 * valorN2
    let sub = valorN1 - valorN2
    let divi = valorN1 / valorN2
    
    if(soma.checked){
        resultado.innerHTML = `O resultado é ${s}`
        return
    }else if(subtracao.checked){
        resultado.innerHTML = `O resultado é ${sub}`
        return
    }else if(multiplicacao.checked){
        resultado.innerHTML = `O resultado é ${m}`
        return
    }else if(divisao.checked){
        resultado.innerHTML = `O resultado é ${divi}`
        return
    }


});