 //Metodos principais para manipulação de strings
 //.toUpperCase() - Converte a string para maiuscula
 console.log('fernando'.toUpperCase())
 //.toLowerCase() - Converte a string para minuscula
 console.log('FERNANDO'.toLowerCase())
 //.startsWith() - Verifica se a string começa com o valor passado como parametro
 console.log('fernando'.startsWith('fer')) //saida booleana, true ou false
 //.endsWith() - Verifica se a string termina com o valor passado como parametro
 console.log('fernando'.endsWith('do')) //Saida true ou false
 //.replace() - Substitui o valor passado como parametro pelo valor passado como parametro
 console.log('Fernando'.replace('F', 'f'))//Saida fernando
 //.replaceAll() - Substitui todos os valores passados como parametro pelo valor passado como parametro
 console.log('f e r n a n d o'.replaceAll(' ', '')) //Saida fernando
 //.trim() - Remove os espaços em branco da string, do começo e do final da string
 //.trimStart() - Remove os espaços em branco da string, do começo da string
 //.trimEnd() - Remove os espaços em branco da string, do final da string
 //.length - Retorna o tamanho da string
 console.log('fernando'.length) //Saida 8
 //.substring() - Retorna uma parte da string, a partir do indice passado como parametro
 console.log('fernando'.substring(0, 5)) //Saida ferna
 //.includes() - verifica se a string contém o valor passado como parametro
 console.log('Fernando'.includes('Fer')) //Saida true
 //.indexOf() - Retorna o indice da primeira ocorrência do valor passado como parametro
 console.log('Fernando'.indexOf('r'))//Saida 2, caso nao encontre, retorna -1
 //.lastIndexOf() - Retorna o indice da ultima ocorrência do valor passado como parametro
 console.log('Fernando'.lastIndexOf('n'))//Saida 5, caso nao encontre, retorna -1
 //.split() - Divide a string em um array de strings
 const email = 'fernando@gmail.com'
 console.log(email.split('@')) //Saida ['fernando', 'gmail.com']
 //.join() - Junta um array de strings em uma string
 console.log(['fernando', 'gmail.com'].join('@')) //Saida fernando@gmail.com
 //.repeat() - Repete a string o numero de vezes passado como parametro
 console.log('fernando'.repeat(3)) //Saida fernando fernando fernando
//.some() - verifica se algum valor do array satisfaz a condição passada como parametro
const nomes = ['Fernando', 'João', 'Maria', 'Pedro', 'Ana']
console.log(nomes.some(nome => nome === 'Fernando')) //Saida true
//.every() - verifica se todos os valores do array satisfazem a condição passada como parametro
console.log(nomes.every(nome => nome === 'Fernando')) //Saida false




 