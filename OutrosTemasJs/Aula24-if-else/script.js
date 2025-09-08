//Estruturas condicionas if e else: servem para desviar o fluxo do nosso codigo quando necessario

//If pode ser usado sozinho
//A palavra else precisa de um if antes
//Eu posso ter varios else if na checagem
//So posso ter um else na checagem

//Ex: Bom dia?? se for menos de 12:00 sera dito bom dia
const hora = new Date().getHours();

if (hora <= 12 && hora >= 5){
    console.log('Bom diaa')
} else if (hora <= 18 && hora >= 13){
    console.log('Boa tarde')
} else if (hora >= 19 && hora <= 23){
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}

//Outro exemplo
const tenhoGrana = true;
if (tenhoGrana){
    console.log('Vou sair de casa')
} else {
    console.log('Nao vou sair de casa')
}