/*                  Parte teorica das promises                     */

//Promises: são como promessas da vida real, ela está esperando algum retorno, ou seja quando criamos uma promise estamos dizendo que algo vai acontecer nesse codigo, por exemplo: esperando uma resposta de um servidor externo e assim que a resposta for recebida vamos resolver essa promessa, dando uma mensagem de sucesso ou uma mensagem de erro

//Para criar uma promessa instanciamos a classe promise

//A promise leva dois argumentos RESOLVE(SOLUÇÃO) e REJECT(ERRO)

//Podemos encadear mais processos(Continuar a promessa), para isso utilizamos o metodo then

//Alguns recursos de js(ex: fetch api) e bibliotecas retornam promises, por isso que temos que saber lidar com elas 


/*                   Parte pratica das promises                    */

//Criação de promise
const myPromise = new Promise((resolve, reject)=>{
    const nome = 'Matheus'

    if(nome === 'Matheus'){
        resolve('Usuario Matheus encontrado')
    }else {
        reject('O usuario Matheus nao foi encontrado')
    }

})

//como utilizamos a promise para ver o resultado final
myPromise.then((data) =>{
    console.log(data)
})
//O then serve para executar de fato a promise
//O data ou (dados) basicamente é a resposta do resolve ou do reject, se o usuario foi encontrado ou não


//Como podemos utilizar o then para tirar mais vantagens da promessa, encadeamentos de then, podemos usar quantos then a gente quiser para modificar o dado e transformar o dado como a gente quiser para o nosso software 
const myPromise2 = new Promise((resolve, reject)=>{
    const nome = 'Matheus'

    if(nome === 'Matheus'){
        resolve('Usuario Matheus encontrado')
    }else {
        reject('O usuario Matheus nao foi encontrado')
    }

})


myPromise2.then((data) =>{
    return data.toLowerCase() //Modificamos o dado, manipulado ele para caixa baixa
}).then((stringModificada)=>{
    console.log(stringModificada)
})


//Como tratar o reject ou o erro usando o metodo catch
const myPromise3 = new Promise((resolve, reject)=>{
    const nome = 'João'

    if(nome === 'Matheus'){
        resolve('Usuario Matheus encontrado')
    }else {
        reject('O usuario Matheus nao foi encontrado')
    }
})

myPromise3.then((data) =>{
    console.log(data)
}).catch((error)=>{
    console.log(`Aconteceu um erro, ${error}`)
})
//Geralmente usamos o then e o catch juntos para processar sucessos e dar um fim 'bom' aos erros do nosso programa

//Resolvendo varias promessas de uma vez só usando o metodo all, pegando varias promessas em um array e tentar executar elas, exibindo uma resposta
const p1 = new Promise((resolve, reject)=>{
    resolve('p1, ok')
})

const p2 = new Promise((resolve, reject)=>{
    resolve('p2, ok')
})

const p3 = new Promise((resolve, reject)=>{
    resolve('p3, ok')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data)=>{
    console.log(data)//O data vai mostrar em formato de array todas promises resolvidas, ['P1, OK', 'P2, OK', 'P3, OK']
})


//Varias promessas com race(corrida), vai exibir a primeira promessa resolvida
const p4 = new Promise((resolve, reject)=>{
    resolve('p4, ok')
})

const p5 = new Promise((resolve, reject)=>{
    resolve('p5, ok')
})

const p6 = new Promise((resolve, reject)=>{
    resolve('p6, ok')
})

const resolveAllrace = Promise.race([p4, p5, p6]).then((data)=>{
    console.log(data)//O data vai mostrar o p4, pois foi a primeira promise encontrada e resolvida
})


//Exemplo de um caso real, de um fetch request na api do github
const userName = 'Fernandofvsouza'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response)=>{
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data)=>{
    console.log(data)
    console.log(`O nome do usuario é ${data.name}`)
}).catch((err)=>{
    console.log(`Houve um erro: ${err}`)
})