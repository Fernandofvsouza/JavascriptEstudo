// Funciona em todos laços de repetição
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let numero of numeros){
    if (numero === 3){
        continue;// SIGNIFICA QUE QUANDO CHEGAR NO NUMERO 3 VAI VERIFICAR SE A CONDIÇÃO É VERDADEIRA E VAI ENCONTRAR A PALAVRA CONTINUE, AI SIM VAI PULAR PARA A PROXIMA ITERAÇÃO DO LAÇO SEM EXECUTAR O CODIGO ABAIXO 
    }
    //Exemplo se não quiser que apareça o numero 3
    console.log(numero);
    //A palvra break sai do laço quando achar a condição exemplo:
    if (numero === 7){
        break;
    }// quando chegar no numero 7 vai dar break e sair do laço
    
}
