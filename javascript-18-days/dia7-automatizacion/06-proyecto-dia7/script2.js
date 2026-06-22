//Codigo hecho por el tutor para darle solucion al proyecto del dia 7

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
  let ventaMayor = calcularVentaMayor(ventas);
  let ventaMenor = calcularVentaMenor(ventas);4


  for(let item of elementosVentas.children){
    let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

    item.children[1].className = "menuNeutro";
  
    if(valorVenta==ventaMayor){
        item.children[1].className="menuInputMayor";
    }

    if(valorVenta==ventaMenor){
        item.children[1].className="menuInputMenor";
    }
    
  }

  let mensajeSalida ="Total ventas: " + sumaTotalVentas;
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
