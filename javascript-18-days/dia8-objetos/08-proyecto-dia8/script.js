// Array para almacenar la lista de empleados
let listaEmpleados = [];

// Constructor para crear objetos Empleado
function CrearEmpleado(
  textoLegajo,
  textoNombre,
  textoApellido,
  textoFechaNac,
  textoCargo,
) {
  this.legajo = textoLegajo;
  this.nombre = textoNombre;
  this.apellido = textoApellido;
  this.fechaNac = textoFechaNac;
  this.cargo = textoCargo;
}

// Función para crear un nuevo empleado a partir de los valores del formulario
function nuevoEmpleado() {
    // Obtener valores del formulario
  let textoLegajo = document.getElementById("infoLegajo").value;
  let textoNombre = document.getElementById("infoNombre").value;
  let textoApellido = document.getElementById("infoApellido").value;
  let textoFechaNac = document.getElementById("infoFechaNacimiento").value;
  let textoCargo = document.getElementById("infoCargo").value;
  
  // Crear nueva instancia de Empleado
  let nuevoEmpleado = new CrearEmpleado(
    textoLegajo,
    textoNombre,
    textoApellido,
    textoFechaNac,
    textoCargo,
  );

  // Agregar a la lista
  listaEmpleados.push(nuevoEmpleado);

  // Limpiar el formulario
  limpiarFormulario();
}

// Función para limpiar los campos del formulario
function limpiarFormulario() {
  document.getElementById("infoLegajo").value = "";
  document.getElementById("infoNombre").value = "";
  document.getElementById("infoApellido").value = "";
  document.getElementById("infoFechaNacimiento").value = "";
  document.getElementById("infoCargo").value = "";
}

// Función para mostrar la lista de empleados en una alerta
function mostrarEmpleados(){
    let mostrarInfo = "";
    for(let x of listaEmpleados){
        for(let empleado in x){
            let guardarInfo = empleado+ ": " + x[empleado];
            mostrarInfo = mostrarInfo +","+guardarInfo;   
        }
        mostrarInfo += "\n"
    }
    alert(mostrarInfo)
}
