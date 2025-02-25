
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo () {
    let nombreDeAmigo = document.getElementById('amigo').value;
        if (nombreDeAmigo === "") {
            alert("Por favor, inserte un nombre.")}
        else { amigos.push(nombreDeAmigo)
        actualizaListaAmigos();
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = "";
}

function actualizaListaAmigos(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i]
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length)
    let amigoSorteado = amigos[indiceAleatorio];
    if (amigos.length === 0) {
        asignarTextoElemento('ul', 'No hay amigos en la lista.')
    } else {
        let resultadoSorteo = document.getElementById('resultado')
        resultadoSorteo.innerHTML = amigoSorteado;
    }
    return;

    
}