//Desafio Mega Sena JS
function megaSena(numero){
    if(numero < 6 || numero > 9){
        console.log('Não é possivel usar esse numero')
        return [];
    }else{
        const numeros = Array.from({length: numero}, ()=>{
            return Math.floor(Math.random() * 60)+1
        })
        console.log(numeros)
    }
}
megaSena(7)