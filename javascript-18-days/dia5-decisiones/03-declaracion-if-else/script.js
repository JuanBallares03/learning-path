function evaluarCompra(){
    let elementoRespuesta = document.getElementById("decision");
    let precio = document.getElementById("textoPrecio").value; // let precio = elementoPrecio.value

    if(+precio<5){
        elementoRespuesta.textContent = "Comprar dos de leche";
    }
    else{
        if (+precio<8){
            elementoRespuesta.textContent = "Comprar una de leche";
        }
        else{
            elementoRespuesta.textContent = "No comprar leche";
        }
        
    }

}