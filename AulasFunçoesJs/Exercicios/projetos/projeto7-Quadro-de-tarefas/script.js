//dom
const cards = document.querySelectorAll(".card") 
const lists = document.querySelectorAll(".list")

for(const card of cards){
    card.addEventListener("dragstart", dragStart)
    card.addEventListener("dragend", dragEnd)
}

for (const list of lists){
    list.addEventListener("dragover", dragOver)
    list.addEventListener("dragenter", dragEnter)
    list.addEventListener("dragleave", dragLeave)
    list.addEventListener("drop", dragDrop)
}

function dragStart(e){
    //Isso permite o drop location saber qual elemento está sendo movido 
    e.dataTransfer.setData('text/plain', this.id)
}

function dragEnd(){
    console.log('Drag ended')
}

function dragOver(e){
    //Essa linha é importante porque por padrao, browsers nao permitem que voce deixe um elemento em outro elemento
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault();
    this.classList.add("over")
}

function dragLeave(e){
    this.classList.remove("over")
}

function dragDrop(e){
    const id = e.dataTransfer.getData("text/plain")
    const card = document.getElementById(id)
    this.appendChild(card)
    this.classList.remove("over")

}