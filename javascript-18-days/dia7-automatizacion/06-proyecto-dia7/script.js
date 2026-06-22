function crearTiendas(contenedorID, min, cantidadTiendas){
  //Encontrar contenedor por su ID

  let elementoContenedor = document.getElementById(contenedorID);

  //Este loop para crear tantas tiendas como se pidan

  for(let conteoTiendas=1; conteoTiendas<=cantidadTiendas; conteoTiendas++){

    //Crear el texto de label

    let textoEtiqueta = "Tienda" + conteoTiendas;
    
    //Crear tiendas con crearParrafoTienda

    let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

    //Agregar el parrafo al contenedor

    elementoContenedor.appendChild(parrafoTienda);

  }
}


function crearParrafoTienda(textoLabel, valorMin) {
  //Crear las etiquetas de pararafo
  let elementoParrafo = document.createElement("p");

  //Crear el labale
  let elementoLabel = document.createElement("label");
  elementoLabel.innerText = textoLabel + ": "

  //Conectar con input
  elementoLabel.setAttribute("for", textoLabel);

  //Crear input
  let elementoInput = document.createElement("input");
  //Establecer atributos
  elementoInput.setAttribute("type", "number");
  elementoInput.setAttribute("id", textoLabel);
  elementoInput.setAttribute("min", valorMin);
  elementoInput.setAttribute("value", "0");

  //Agregar label y el input

  elementoParrafo.appendChild(elementoLabel);
  elementoParrafo.appendChild(elementoInput);

  //Devolver el parrafo creado
  return elementoParrafo;
}

function extraerNumeroDesdeElemento(elemento) {
  let miTexto = elemento.value;
  let miNumero = Number(miTexto);

  return miNumero;
}

function calcularTotal() {
  let ventas = [];
  let posicionVenta = 0;
  let elementosVentas = document.getElementById("itemsTiendas");

  for(let item of elementosVentas.children){

    let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
    ventas[posicionVenta] = valorVenta;
    posicionVenta = posicionVenta + 1;
    
  }


  let sumaTotalVentas = sumarVentas(ventas);
  let ventaMayor = calcularVentaMayor();
  let ventaMenor = calcularVentaMenor();
  ventaMayor.style.backgroundColor = "red";
  ventaMenor.style.backgroundColor = "blue";

  let mensajeSalida ="Total ventas: " + sumaTotalVentas 
  let elementoSalida = document.getElementById("parrafoSalida");

  

  elementoSalida.textContent = mensajeSalida;
}

function sumarVentas(array) {
  let Total = 0;

  for (let venta of array) {
    Total += venta;
  }

  return Total;
}

function calcularVentaMayor() {
  let elementosVentas = document.getElementById("itemsTiendas");
  let guardarMayor =  0;
  let valorInput;
  for(item of elementosVentas.children){

    let valorInputNumero = extraerNumeroDesdeElemento(item.children[1]);

    if(valorInputNumero> guardarMayor){
      guardarMayor = valorInputNumero;
      valorInput = item.children[1];
    }
  }

  return valorInput

}

function calcularVentaMenor() {
  let elementosVentas = document.getElementById("itemsTiendas");
  let guardarPrimerP = elementosVentas.children[0];
  let guardarInputMenor = guardarPrimerP.children[1];
  let guardarMenor = Number(guardarInputMenor.value);

  for (item of elementosVentas.children){

    let valorInputNumero = extraerNumeroDesdeElemento(item.children[1]);
    if(valorInputNumero<=guardarMenor){
      guardarMenor = valorInputNumero;
      guardarInputMenor = item.children[1];
    }

  }   

  return guardarInputMenor

}

