const numero = document.getElementById('numero')
function somar(){
    const n = Number(numero.innerText)
    numero.innerHTML = n + 1
}

function subtrair(){
    const n = Number(numero.innerText)
    numero.innerHTML = n - 1
}

function resetar(){
    numero.innerHTML = 0
}

