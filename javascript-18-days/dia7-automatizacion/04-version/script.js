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
  let miElemento = document.getElementById(elemento);
  let miTexto = miElemento.value;
  let miNumero = Number(miTexto);

  return miNumero;
}

function calcularTotal() {
  let ventas = [];

  ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
  ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
  ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
  ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
  ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
  ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

  let sumaTotalVentas = sumarVentas(ventas);
  let ventaMayor = calcularVentaMayor(ventas);
  let ventaMenor = calcularVentaMenor(ventas);

  let mensajeSalida =
    "Total ventas: " +
    sumaTotalVentas +
    "/ Venta Mayor: " +
    ventaMayor +
    "/ Venta Menor: " +
    ventaMenor;
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

function calcularVentaMayor(array) {
  let maximo = array[0];

  for (venta of array) {
    if (venta > maximo) {
      maximo = venta;
    }
  }
  return maximo;
}

function calcularVentaMenor(array) {
  let minimo = array[0];

  for (venta of array) {
    if (venta < minimo) {
      minimo = venta;
    }
  }
  return minimo;
}
