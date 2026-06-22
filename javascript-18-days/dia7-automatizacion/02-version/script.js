function extraerNumeroDesdeElemento(elemento){

let miElemento = document.getElementById(elemento);
let miTexto = miElemento.value;
let miNumero = Number(miTexto);

return miNumero
}

function calcularTotal(){

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
    
    let mensajeSalida = "Total ventas: "+ sumaTotalVentas + "/ Venta Mayor: " + ventaMayor + "/ Venta Menor: " + ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent  = mensajeSalida
}


function sumarVentas(array){
    let Total = 0;

    for(let venta of array){
        Total += venta;
    }

    return Total;
}

function calcularVentaMayor(array){
    let maximo = array[0];

    for(venta of array){
        if(venta>maximo){
            maximo = venta
        }
    }
    return maximo   

}

function calcularVentaMenor(array){
    let minimo = array[0];

    for(venta of array){
        if(venta<minimo){
            minimo = venta
        }
    }
    return minimo   

}