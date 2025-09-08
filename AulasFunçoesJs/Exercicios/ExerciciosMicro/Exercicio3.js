//Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.
function somaImposto(taxaImposto, custoAntesImposto){
    const decimal = taxaImposto/100
    const resultado = decimal * custoAntesImposto
    const valorTotal = resultado + custoAntesImposto
    return valorTotal
}
console.log(somaImposto(25, 500))