let boton = document.getElementById("miBoton");

const mostrarMensaje=()=>{
    alert('El boton ha sido presionado');
}

const otroMensaje=()=>{
    alert('Flotar');
}

boton.addEventListener('click', mostrarMensaje);
boton.addEventListener('mouseover', otroMensaje);