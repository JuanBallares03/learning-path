// variables globales para acceder al DOM
let inputUsuario = document.getElementById("ingresoUsuario");
let categoria = document.getElementById("seleccionCategoria");
let boton = document.getElementById("botonBuscar");
let lista = document.getElementById("mostrarResultados");

// aqui guardo los datos del json y lo que eligio el usuario
let dataJson;
let capturarEleccion;

// avisa que cambio el archivo cuando se dispara el evento personalizado
const mensajeCambio=()=>{
    alert("El archivo ha cambiado : " + categoria.value);
}

// solo deja pasar letras minusculas, espacio y borrar
// si no cumple eso se bloquea con preventDefault
const verificarEntrada=(event)=>{
    if(event.key>= "a" && event.key<="z" || event.key === "Backspace"|| event.key === " "){
        return;
    }
    else{
        event.preventDefault();
    };
};

// hace el fetch segun el archivo que eligio el usuario y guarda el array en dataJson
// el json tiene una propiedad data que es donde esta el array
const extraerInformacion=(datos)=>{
    fetch("data/"+datos)
    .then((res)=>res.json())
    .then((salida)=>{dataJson = salida.data
        if(dataJson == null){
            return; // por si el archivo viene vacio
        };            
    });  
};

// cuando cambia el select actualiza la variable, dispara el evento y cargo el json nuevo
const categoriaCambio=()=>{
    capturarEleccion= categoria.value;
    let cambioArchivo = new CustomEvent("cambioArchivoBase"); // evento personalizado
    categoria.dispatchEvent(cambioArchivo);
    extraerInformacion(capturarEleccion);
};

// busca en dataJson los nombres que empiecen con lo que escribio el usuario
// crea un li por cada resultado y un p con la sinopsis que se muestra al hacer hover
const busquedaUsuario=()=>{
    lista.innerHTML = ""; // se limpia la lista antes de cada busqueda
    
    if(dataJson != null && inputUsuario.value != " " && capturarEleccion!=" "){
        for(let dato of dataJson){
            if(dato.nombre.startsWith(inputUsuario.value.toUpperCase())){ // pasa a mayusculas para que coincida
                let p = document.createElement("p");
                p.id = dato.nombre;
                
                p.innerHTML = dato.sinopsis;
                p.style.display = "none"; // se oculta por defecto
                
                let li = document.createElement("li");
                li.innerHTML = dato.nombre;

                // muestro la sinopsis cuando el mouse esta encima
                li.addEventListener("mouseover",function(){
                    let p = document.getElementById(dato.nombre);
                    p.style.display = "block";
                });

                // la vuelvo a ocultar cuando el mouse sale
                li.addEventListener("mouseout",function(){
                    let p = document.getElementById(dato.nombre);
                    p.style.display = "none";
                });

                //agrega el p como hijo y este se agrega como hizo a la lista ul
                li.appendChild(p);
                lista.appendChild(li);
            }
        
        }
    }else{
        alert("Escribe o elige algo porfavor");
    };
};

// eventos
categoria.addEventListener("change",categoriaCambio);
categoria.addEventListener("cambioArchivoBase", mensajeCambio);
inputUsuario.addEventListener("keydown",verificarEntrada);
boton.addEventListener("click",busquedaUsuario);