let img = document.getElementById('lampada')
let box = document.getElementById('box')
function on(){
        img.src = 'imgs/ligada.jpg' 

    
}

function off(){
    
        img.src = 'imgs/desligada.jpg' 
    
}

img.addEventListener('dblclick', function broke(){
    img.src = 'imgs/quebrada.jpg'
});

box.addEventListener('click', function(){
    img.src= 'imgs/ligada.jpg'
})
