
//FORMA DO CHATGPT
function DataCompleta() {
    let data = new Date();
    let diaSemana = data.getDay();
    let diaMes = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let horas = data.getHours();
    let minutos = data.getMinutes();

    // Arrays para nomes
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const mesesAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho','julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    // Formatar minutos e horas para dois dígitos
    let horasFormatadas = horas.toString().padStart(2, '0');
    let minutosFormatados = minutos.toString().padStart(2, '0');

    let resultado = document.getElementById('titulo');
    resultado.innerHTML = `${diasSemana[diaSemana]}, ${diaMes} de ${mesesAno[mes]} de ${ano} ${horasFormatadas}:${minutosFormatados}`;
}

DataCompleta();
