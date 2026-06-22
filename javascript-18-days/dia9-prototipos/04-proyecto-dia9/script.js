// Constructor para crear objetos Auto
function CrearAuto(marca,modelo,color,anio,titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
};
// Método para vender el auto (cambiar titular)
CrearAuto.prototype.venderAutomovil = function(titular){
    this.titular = titular;
};

//Método para obtener una descripción del auto
CrearAuto.prototype.verAuto = function(){
    let string = `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`;
    return string
};

// Método para encender el auto (muestra alerta)
CrearAuto.prototype.encender = function(){
    alert("El automovil fue encendido");
};

// Instancias de autos
let auto1 = new CrearAuto("Bmw","x6","negro",2025,"Camilo Ballares");
let auto2 = new CrearAuto("Mercedes Benz","C200","blanco",2023,"Camilo Ballares");
let auto3 = new CrearAuto("Range Rover","Sport","gris",2026,"Teresa Maz");
let auto4 = new CrearAuto("Roll royce","Cullinan","negro",2026,"Sandra Diaz");

// Array de autos
array = [auto1,auto2,auto3,auto4];

// Función para mostrar autos en la página
function mostrarAutos(){
    let traerID = document.getElementById("textoMostrarAutos")
    for(let x of array){

        let creaEtiqueta = document.createElement("li");
        let instancias = x.verAuto();
        creaEtiqueta.innerHTML = instancias;
        traerID.appendChild(creaEtiqueta);

    }
};


