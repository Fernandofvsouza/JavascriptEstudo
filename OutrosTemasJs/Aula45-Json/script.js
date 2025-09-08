/* JSON

*Json significa javaScript object notatio que significa: notação de objeto javascript

*Explicando de um modo simples json é basicamente uma forma de converter um objeto em texto e o contrario tambem, um texto em objeto

*Ele é usado principalmente para transmitir dados entre sistemas de forma simples, ja que o formato de texto é lido praticamente por toda linguagem de programção

*Para trabalhar com json no javascript usamos dois metodos:
JSON.parse() -> converte texto no padrão json em objetos
JSON.stringfy() -> converte objetos em texto padrão JSON

*/

//ex, se a gente quiser colocar esse objeto em um html, temos que tranformar o objeto em um padrão de texto
const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2001
}

//Convertendo o objeto para texto
let texto = JSON.stringify(carro)

//Colocou o texto no html
//document.getElementById('area').innerHTML = texto

//Agora o objeto está em formato de texto
//Vamos supor que queremos mostrar apenas o modelo no console.log

//Convertemos o texto para objeto
let obj = JSON.parse(texto) 

//Pegamos um valor desse objeto
console.log(obj.modelo)

//Exemplo na pratica pegando uma api em texto e transformando em objetos para conseguir trabalhar com os itens do objeto:
const ajax =  new XMLHttpRequest()
ajax.open('GET', 'https://viacep.com.br/ws/30260360/json/');
ajax.send();

/* 
ajax.onload = function(){
    document.getElementById('area').innerHTML = this.responseText //Ta mostrando um texto no html
    //Agora quero mudar para objeto para trabalhar com uma propriedade do objeto
    let obj = JSON.parse(this.responseText);
    alert(obj.ddd)
}
*/

function buscarCep(){
    let campoTexto = document.getElementById('cep').value;
    const ajax =  new XMLHttpRequest()
    ajax.open('GET', 'https://viacep.com.br/ws/' + campoTexto + '/json/');
    ajax.send();

    ajax.onload = function(){
        //document.getElementById('text').innerHTML = this.responseText;//Retornou em texto json

        //Agora convertendo o texto para objeto json
        let obj = JSON.parse(this.responseText);
        let logradouro = obj.logradouro
        let bairro = obj.bairro
        let cidade = obj.localidade
        document.getElementById('text').innerHTML = `Logradouro: ${logradouro}, cidade: ${cidade}, bairro: ${bairro}`
    }

    


}
