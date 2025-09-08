//Operador ternario ? :
//Pode substituir e encurtar seu codigo em partes de if e else
//ex: Um site que tenha usuarios vips e usuarios normais dependendo da pontuação

/*
const pontuacaoUsuario = 999;
if (pontuacaoUsuario >= 1000){
    console.log('Usuario VIP');
} else {
    console.log('Usuario normal');
}
*/

const pontuacaoUsuario = 1000;
//                   Se essa expressão for true, executa a primeira ação (usuario vip), se for falso executa a segunda ação
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip ' : 'usuario normal';
console.log(nivelUsuario);






