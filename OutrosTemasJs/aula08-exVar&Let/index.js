const nome = 'Fernando'
const sobrenome = 'Souza'
const idade = 26;
const peso = 90;
const altura = 1.85
let imc = peso / (altura*altura)
let anoAtual = new Date().getFullYear();
let anoNasc = anoAtual - idade;
console.log(`Meu nome é ${nome} ${sobrenome} tenho ${idade} anos e peso ${peso}KG, tenho ${altura}cm de altura e meu imc é ${imc.toFixed(2)}, ${nome} ${sobrenome} nasceu em ${anoNasc}`);