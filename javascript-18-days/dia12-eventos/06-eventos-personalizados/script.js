//Un evento personalizado nos permite comunicar distintos componentes de nuestra aplicacion
let audio = document.getElementById("audio");
let listaCanciones = document.getElementById("listaCanciones");

const cambiarCancion=()=>{
    let cancionElegida = listaCanciones.value;
    audio.src = cancionElegida;
    audio.play();
    let evento = new CustomEvent('cambioDeCancion');
    audio.dispatchEvent(evento);

}

const mostrarCancion = ()=>{
    console.log("La cancion actual es: " + listaCanciones.value);
}

listaCanciones.addEventListener('change',cambiarCancion);

audio.addEventListener('cambioDeCancion',mostrarCancion)
