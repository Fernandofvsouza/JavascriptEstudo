/*O que são funções de callback:
Em JavaScript, funções de callback são funções passadas como argumento para outra função, que serão chamadas (executadas) depois que a primeira função terminar sua execução — ou em algum momento dentro dela.
A função de callback está ligada ao processo assincrono ou seja uma coisa que nao acontece exatemente naquele momento
ex: o evento de click não começa quando declaramos a função e sim quando clicamos no botão
*/ 
//EX:
function foo(bar){
    bar()//isso é um callback uma função passada como parametro de outra função
}

foo(function(){
    console.log('bar');
});

//Exemplo basico:
function saudacao(nome, callback) {
    console.log("Olá, " + nome + "!");
    callback();
}
  
function depoisDaSaudacao() {
    console.log("Essa mensagem vem depois da saudação.");
}
  
saudacao("Maria", depoisDaSaudacao);

//EX COM O ADDEVENTLISTENER
const button = document.querySelector('button')
button.addEventListener('click', () =>{
    console.log('Button foi clicado');
}// aqui começa a função de callback, pois é uma função que está aguardando o momento pra ser executada, qual momento ? o evento de click
);

//Criando uma função de callback, exemplo do dia-a-dia
//Ex: escrevendo um botão usando o javascript, e usando callback para alterar o texto do botão sempre que quiser e alterar o css do botão da maneira que eu quiser
function newButton(text, callback){
    const button2 = document.createElement('button');//Criando o elemento
    button2.textContent = text;//inserindo o texto dentro do botão

    callback(button2);//Inserindo o css no button atraves de callback antes da inserção
    
    document.body.insertAdjacentElement('beforeend', button2);//Inserindo o elemento na tela




    return button2

}
newButton('Logout', (button) => {
    button.style.cssText = `background-color: blue;`

    button.addEventListener('click', ()=>{
        document.body.style.cssText = `Background-color: green;`
    })
});
newButton('Signup', (button) => {
    button.style.cssText = `background-color: red;`
});
