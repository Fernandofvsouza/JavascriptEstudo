
const nomes = ['Luiz', 'Otavio', 'Henrique']

//Usando o for classico
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}
console.log('----------')
//usando o forIn
for (let i in nomes){
    console.log(nomes[i]);
}
console.log('----------')
//Usando o forOf pra pegar o valor de cada indice, nao funciona com objetos por objetos não ser iteraveis, ou seja nao tem indices
for (let valor of nomes){
    console.log(valor);
}
console.log('----------')
//Usando o forEach
nomes.forEach(function(elemento, indice){
    console.log(elemento, indice);
})