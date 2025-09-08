//Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.
let array = []
function maior(x, y, z){
    array = [x, y, z];
    return Math.max(...array)
}
console.log(maior(10, 30, 70))

function menor(n1, n2, n3){
    array = [n1, n2, n3]
    return Math.min(...array)
}
console.log(menor(30, 2, 7))