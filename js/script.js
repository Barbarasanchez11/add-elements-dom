const boton = document.getElementById("agregar")
const lista = document.getElementById("lista")

function addElement(elemento) {
    const nuevoItem = prompt("introduce un item")
    if(nuevoItem){
        let li = document.createElement("li")
        li.textContent = nuevoItem
        lista.appendChild(li)
    } else { 
        alert ("Escribe algo por favor")
    }
}

boton.addEventListener("click", addElement)
  