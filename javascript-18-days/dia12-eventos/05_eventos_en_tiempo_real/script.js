//Protocolo de comunicacion en tiempo rea, permite la transmision de datos entre el navegador y el servidor

//Un socket es un enlance de comunicacion que permite conectar dos programas y se hablen por la red
let socket = new WebSocket('ws//localhost:8080');
let mensajeIngresado = document.getElementById("mensajeIngresado");
let botonEnviar = document.getElementById("botonEnviar");

const mostrarMensajes=(contenido)=>{
    let contenedorMensajes = document.getElementById("mensajeChat");
    let elementoMensaje = document.createElement("p");
    elementoMensaje.innerHTML = contenido;
    contenedorMensajes.appendChild(elementoMensaje);
}

botonEnviar.onclick = function() {
    let mensaje = mensajeIngresado.value;
    mostrarMensajes(mensaje);
    socket.send();
};

socket.onmessage = function(event) {
    let mensaje = event.data;
    mostrarMensajes(mensaje);
};