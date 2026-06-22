function mostrarResultado(resultadoOperacion){
    document.getElementById("mostrarResultado").value = resultadoOperacion;
}

function botonSuma(){
    let numeroUno = document.getElementById("numeroUno").value;
    let numeroDos = document.getElementById("numeroDos").value;
    let suma = +numeroUno + +numeroDos;
    
    mostrarResultado(suma)
}

function botonResta(){
    let numeroUno = document.getElementById("numeroUno").value;
    let numeroDos = document.getElementById("numeroDos").value;
    let resta = +numeroUno - +numeroDos;
    
    mostrarResultado(resta)
}

function botonMultiplicacion(){
    let numeroUno = document.getElementById("numeroUno").value;
    let numeroDos = document.getElementById("numeroDos").value;
    let multiplicacion = +numeroUno * +numeroDos;   
    mostrarResultado(multiplicacion);
}

function botonDivision(){
    let numeroUno = document.getElementById("numeroUno").value;
    let numeroDos = document.getElementById("numeroDos").value;
    let division = +numeroUno / +numeroDos;   
    mostrarResultado(division);
}

function botonPotencia(){
    let numeroUno = document.getElementById("numeroUno").value;
    let numeroDos = document.getElementById("numeroDos").value;
    let potencia = Math.pow(+numeroUno , +numeroDos);   
    mostrarResultado(potencia);
}

function botonRaiz(){
    let numeroUno = document.getElementById("numeroUno").value;
    let raiz = Math.sqrt(+numeroUno);   
    mostrarResultado(raiz);
}

function botonAbsoluto(){
    let numeroUno = document.getElementById("numeroUno").value;
    let valorAbsoluto = Math.abs(+numeroUno);
    mostrarResultado(valorAbsoluto);
}

function botonRandom(){
    let numeroUno = document.getElementById("numeroUno").value;
    let numeroDos = document.getElementById("numeroDos").value;
    numeroDos = numeroDos + 1;
    let numeroRandom = Math.floor(Math.random()*(+numeroDos- +numeroUno)+ +numeroUno);
    mostrarResultado(numeroRandom);
}

function botonRound(){
    let resultado = document.getElementById("mostrarResultado").value;
    resultado = Math.round(+resultado);
    mostrarResultado(resultado);
}

function botonFloor(){
    let resultado = document.getElementById("mostrarResultado").value;
    resultado = Math.floor(+resultado);
    mostrarResultado(resultado);
}

function botonCeil(){
    let resultado = document.getElementById("mostrarResultado").value;
    // resultado = Math.ceil(+resultado);
    mostrarResultado(Math.ceil(+resultado));
}

// control f2 para las coincidencias