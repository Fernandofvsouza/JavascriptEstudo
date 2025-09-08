//Dom
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")



function relogio(){
    function atualizarHora(){
        const data = new Date()
        const hoursNow = data.getHours()
        const minutesNow = data.getMinutes()
        const secondsNow = data.getSeconds()
        hours.textContent = hoursNow
        minutes.textContent = minutesNow
        seconds.textContent = secondsNow
    }
  
    atualizarHora()
    setInterval(atualizarHora, 1000)
}


relogio()