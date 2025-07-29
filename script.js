// Array para almacenar los nombres de los amigos
let amigos = [];

// Función que agrega un nombre al array 'amigos'
function agregarAmigo() {
    let nombreInput = document.getElementById('nombreAmigo');
    let nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    nombreInput.value = "";
    nombreInput.focus();
}

// Función que actualiza la lista visible en el HTML
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función que selecciona aleatoriamente un amigo del array
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById('amigoSecreto').textContent = amigoSecreto;
}
