document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // <- Isso impede a atualização da página

    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let resultado = peso / (altura * altura);
    let textResultado = document.getElementById('res')

  if(isNaN(peso) || peso <= 0 || isNaN(altura)||altura <= 0){
    textResultado.innerHTML = `Altura ou peso invalido`
  }
  else if(resultado < 18.5){
    textResultado.innerHTML = `Seu imc é ${resultado.toFixed(2)} (Abaixo do peso)`
  } else if(resultado >= 18.5 && resultado <= 24.9){
    textResultado.innerHTML = `Seu imc é ${resultado.toFixed(2)}(Peso normal)`
  }else if(resultado >= 25 && resultado <= 29.9){
    textResultado.innerHTML = `Seu imc é ${resultado.toFixed(2)}(acima do peso)`
  }else if(resultado >= 30 && resultado <= 34.9){
    textResultado.innerHTML = `Seu imc é ${resultado.toFixed(2)}(Obesidade grau I)`
  }else if(resultado >= 35 && resultado <= 39.9){
    textResultado.innerHTML = `Seu imc é ${resultado.toFixed(2)}(Obesidade grau II)`
  }else{
    textResultado.innerHTML = `Seu imc é ${resultado.toFixed(2)}(Obesidade grau III)`
}
  });

