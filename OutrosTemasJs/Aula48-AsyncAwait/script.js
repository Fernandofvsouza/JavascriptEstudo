//Async Await ou funções assincronas

//*As funções assincronas funcionam como promises, porem com uma sintaxe mais simples

//*Precisamos declarar a função com a palvra async

//*E quando precisamos aguardar por algo a instrução precisa de await

//*Podemos aplicar o recurso em funções anonimas e metodos de classe

//*Tentar usar o await sem o async gera um erro

//*Exemplo de uso: inserção de dado no banco

//Sintaxe:
// function primeiraFuncao(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Esperou esse tempo aqui')
//             resolve()
//         }, 1000)
//     })
// }

// async function segundaFuncao(){
//     console.log('Iniciou')

//     await primeiraFuncao()

//     console.log('Terminou')
// }
// segundaFuncao()

//Exemplo pratico:

function getUser(id){
    return fetch(`https://reqres.in/api/users/id=${id}`)
    .then((data) => data.json())
    .catch((err)=>console.log(err))
}

async function showUserName(id){
    try{
        const user = await getUser(id)
        console.log(`O nome do usuario é ${user.data.first_name}`)
    }
    catch{
        console.log(`Erro: ${err}`)
    }
}

showUserName(3)

