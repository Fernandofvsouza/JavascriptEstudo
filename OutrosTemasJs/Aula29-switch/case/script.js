//Comparação com if e quando usar o switch
const data = new Date('1999-11-22 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto
console.log(diaSemana);7//Vai retornar um numero no caso 2, terça feira
//supomos que queira mostrar o dia da semana em texto
/*
if (diaSemana === 0){
    diaSemanaTexto = 'domingo';
} else if(diaSemana === 1){
    diaSemanaTexto = 'Segunda'
}else if(diaSemana === 2){
    diaSemanaTexto = 'Terça'
}else if(diaSemana === 3){
    diaSemanaTexto = 'Quarta'
}else if(diaSemana === 4){
    diaSemanaTexto = 'Quinta'
}else if(diaSemana === 5){
    diaSemanaTexto = 'Sexta'
}else if(diaSemana === 6){
    diaSemanaTexto = 'Sabado'
}else{
    diaSemanaTexto = ''
}
console.log(diaSemana, diaSemanaTexto);
*/

//Como fazer usando o switch

switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3: 
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        break;     
    default:
        diaSemanaTexto = '';
        break;                       
}

console.log(diaSemana, diaSemanaTexto)

//Colocando dentro de uma função
function getDiaSemanaTexto(diaSemana2){
    let diaSemanaTexto2;
    switch (diaSemana2){ 
    case 0:
        diaSemanaTexto2 = 'Domingo';
        return diaSemanaTexto2;
    case 1:
        diaSemanaTexto2 = 'Segunda';
        return diaSemanaTexto2;
    case 2:
        diaSemanaTexto2 = 'Terça';
        return diaSemanaTexto2;
    case 3: 
        diaSemanaTexto2 = 'Quarta';
        return diaSemanaTexto2;
    case 4:
        diaSemanaTexto2 = 'Quinta';
        return diaSemanaTexto2;
    case 5:
        diaSemanaTexto2 = 'Sexta';
        return diaSemanaTexto2;
    case 6:
        diaSemanaTexto2 = 'Sabado';
        return diaSemanaTexto2;    
    default:
        diaSemanaTexto2 = '';
        return diaSemanaTexto2;     
    } 

    
}
const diaSemana2 = data.getDay();
const diaSemanaTexto2 = getDiaSemanaTexto(diaSemana2);

console.log(diaSemanaTexto2);