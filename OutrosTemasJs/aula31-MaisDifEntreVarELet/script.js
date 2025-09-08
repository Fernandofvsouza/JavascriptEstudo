//Mais diferenças entre var e let//const
const verdadeira = true;

//Let tem escopo de bloco { ..bloco}
//Var só tem escopo de função

let nome = 'Luiz' //Criando
var nome2 = 'Luiz'

if(verdadeira){
    let nome = 'Otavio' //Criando outra variavel que apesar de ter o mesmo nome não é a mesma variavel
    
    console.log(nome, nome2);

    if(verdadeira){
        let nome = 'Outra coisa'

        console.log(nome, nome2)
        //O motor do javascript sempre vai buscar a variavel primeiro no escopo do bloco, se não encontrar vai buscar no bloco maior, se nao encontrar vai buscar no escopo global
    }
}

//Com o var ele sempre busca a ultima vez que foi declarada ou redeclarada

