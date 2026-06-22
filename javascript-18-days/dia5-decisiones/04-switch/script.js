function capturarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio");
    let numeroFruta = document.getElementById("numeroFruta");
    let fruta = numeroFruta.value;

    switch(fruta)
    {
        case"1":
            elementoRespuesta.textContent = "$8.45";
            break;
        case"2":
            elementoRespuesta.textContent ="$5";
            break;
        case"3":
            elementoRespuesta.textContent ="$7.30";
            break;
        case"4":
            elementoRespuesta.textContent ="$6.50";
            break;
        case"5":
            elementoRespuesta.textContent ="$4.10";
            break;
    }
}