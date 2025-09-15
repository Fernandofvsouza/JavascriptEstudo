//Com base no array abaixo, voce pode percorrer e encontrar o produto com preço igual a 20$ e o resultado deve mostrar apenas o produto que tem o preço igual a 20
const produtos = [
    {name: 'Maça', price: 2.5},
    {name: 'Coca cola', price: 8},
    {name: 'Guarana', price: 5},
    {name: 'Chcocolate', price: 20},
]

let busca = produtos.find((item)=>{
    return item.price === 20
})
console.log(busca);

//Com o mesmo array de produtos acima como voce pode filtrar produtos com preço menor que 8r$
let filtragem = produtos.filter((item)=>{
    return item.price < 8 
})
console.log(filtragem)