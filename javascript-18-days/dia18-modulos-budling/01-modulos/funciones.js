//Ventajas: Reduce contaminacion del espacio global
//Reutilizacion de codigo

let nombre = "Camilo";

export function cambiarNombre(nuevo){
    nombre = nuevo;
}

export function enviarMensaje(){
    alert(nombre + " te ha enviado un mensaje");
}
// export default

// export default{cambiarNombre,enviarMensaje}


