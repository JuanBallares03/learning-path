//Captura el elemento loader para mostrarlo y ocultarlo desde cualquier función.
let gif = document.getElementById("cargarGif");

// Muestra el gif, hace las peticiones de divisas y pasa los resultados a mostrarDatos.
const obtenerDatos = async () => {
  try{
    gif.style.display = "block";

    let dolar = await fetch("https://open.er-api.com/v6/latest/USD");
    let resDolar = await dolar.json();
    resDolar = resDolar.rates.EUR;

    let euro = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR");
    let resEuro = await euro.json();
    resEuro = resEuro.rates.MXN;

    let pesoArg = await fetch("https://open.er-api.com/v6/latest/ARS");
    let resPesoArg = await pesoArg.json();
  
    resPesoArg = resPesoArg.rates.USD;
    mostrarDatos(resDolar, resEuro, resPesoArg);
  }catch(error){
    console.error(error);
    gif.style.display = "none";
  };
  
};

//Cambia el texto del título y actualiza la imagen del logo.
const infoEtiquetas = () => {
  let titulo = document.getElementById("titulo");
  let logo = document.getElementById("imagen");
  titulo.innerText = "Bienvenidos";
  logo.src = "./img/imagen-logo.jpg";
};

//Inserta los valores en los divs y oculta el gif al terminar la carga.
const mostrarDatos = (dolar, euro, arg) => {
  if (dolar != null || euro != null || arg != null) {
    let divDolar = document.getElementById("mostrarDolar");
    let divEuro = document.getElementById("mostrarEuro");
    let divArg = document.getElementById("mostrarArg");

    divDolar.innerText = "USD a EUR:    " + dolar;
    divEuro.innerText = "EUR a MXN: " + euro;
    divArg.innerText = "ARG a USD: " + arg;

    gif.style.display = "none";
  }else{
    return;
  }
};

//Lanza la obtención de datos y la actualización de etiquetas al iniciar la página.
const cargarFunciones = async() => {
  obtenerDatos();
  infoEtiquetas();
};
