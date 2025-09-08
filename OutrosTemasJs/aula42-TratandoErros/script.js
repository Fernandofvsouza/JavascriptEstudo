//Como tratar um erro: se a gente sabe que precisamos executar um codigo que pode dar algum erro, ou um codigo perigoso exemplo exibir o valor de uma variavel que nao existe ainda
//usamos o bloco try

try{
    console.log(naoExisto);
    //Caso aconteça algum erro dentro do bloco try, vai passar para o bloco catch
} catch(error){
    console.log('naoExisto não existe.');
    
}

//Podemos capturar e lançar o erro
//ex
function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser numeros.')
    }
    return x + y
}
try{
    //é executada quando não ha erros
    console.log(soma(1, 2))
    console.log(soma('1', 2))
}catch(error){
    //é executada quando ha erros
    console.log('x e y precisam ser numeros.')
}finally{
    //Vai ser executado sempre

}



