let calificaciones = [5.0, 5.0, 5.0, 4.1, 5.0];

function mostrarNotas() {
  let imprimirNotas = document.getElementById("notaTotal");
  for (calificacion of calificaciones) {
    let itemLista = document.createElement("li");
    itemLista.innerText = calificacion;
    imprimirNotas.appendChild(itemLista);
  }
}

function mostrarPromedio() {
  let sacarPromedio = 0;
  for (let x = 0; x < 5; x++) {
    sacarPromedio = sacarPromedio + calificaciones[x];
  }
  let total = Math.round(sacarPromedio / 5);
  document.getElementById("notaPromedio").textContent = total;
}

function mostrarNotaAlta() {
  let notaMasAlta = 0;
  let x = 0;

  while (x < 5) {
    if (notaMasAlta < calificaciones[x]) {
      notaMasAlta = calificaciones[x];
    }
    x++;
  }
  document.getElementById("notaAlta").textContent = notaMasAlta;
}

function mostrarAplazos() {
  let x = 0;
  document.getElementById("verificarAplazos").textContent = "No";

  do{
    if(calificaciones[x]<4.0){
      document.getElementById("verificarAplazos").textContent = "Si";
      break;
    }else{
      x++
    }
      

  }while(x<5)
    
}
