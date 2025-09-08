const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto:'frase 3'},
    {tag: 'section', texto:'frase 4'},
    {tag: 'span', texto: 'frase 5'}
];

const container = document.querySelector('.container')
const div = document.createElement('div');

for(i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    div.appendChild(tagCriada);
    tagCriada.innerHTML = texto;
    
}

container.appendChild(div)