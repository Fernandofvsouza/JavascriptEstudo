let number1 = prompt('Digite um numero: ')
number1 = Number(number1);
let texto = document.getElementById('res');

document.getElementById('title').innerHTML = 
`Seu numero é ${number1}`;

let rQuadrada = number1 ** 0.5;
texto.innerHTML =
`Raiz quadrada: ${rQuadrada}<br>`;

texto.innerHTML += `<br> ${number1} é inteiro: ${Number.isInteger(number1)} <br>`;

texto.innerHTML += `<br> É Nan: ${Number.isNaN(number1)}<br>`;

texto.innerHTML += `<br> Arredondado para baixo: ${Math.floor(number1)}<br>`;

texto.innerHTML += `<br> Arredondado para cima: ${Math.ceil(number1)}<br>`;

texto.innerHTML +=  `<br> Com duas casas decimais: ${number1.toFixed(2)}`;