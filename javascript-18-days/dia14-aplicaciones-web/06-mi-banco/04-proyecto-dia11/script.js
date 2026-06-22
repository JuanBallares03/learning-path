let dataJSON; // variable global para guardar el contenido del JSON después de cargarlo

function cargarPagina() {
  // se llama al cargar la página (o en un evento). Trae el archivo JSON y lo parsea.
  fetch("resumen.json")
    .then((res) => res.json()) // convierte la respuesta en objeto JS
    .then((resultado) => {
      dataJSON = resultado; // guardo el objeto en la variable global

      mostrarResultado(dataJSON); // muestro en HTML
    })
    .catch(function (error) {
      alert(error); // si falla la carga, muestro un alerta con el error
    });
}

function mostrarResultado(array) {
  // obtengo los elementos del DOM donde se van a escribir los datos
  let nombreTitular = document.getElementById("textoNombre");
  let nroCuenta = document.getElementById("textoCuenta");
  let saldo1 = document.getElementById("montoDolares");
  let saldo2 = document.getElementById("montoEuros");
  let cbu = document.getElementById("cbuCuenta");

  // pongo en texto los valores del JSON
  nombreTitular.textContent = array.titular;
  nroCuenta.textContent = array.nro_cuenta;
  saldo1.textContent = array.saldo[0]["monto"]; // monto en dólares
  saldo2.textContent = array.saldo[1]["monto"]; // monto en euros
  cbu.textContent = array.cbu;
}