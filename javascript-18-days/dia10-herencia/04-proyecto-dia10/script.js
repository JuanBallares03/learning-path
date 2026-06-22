// Declaración de una variable global para almacenar un array de animales
let array;

// Clase base Animal con propiedades comunes
class Animal{
    constructor(nombre,peso,edad){
          this.nombre = nombre;
          this.peso = peso;
          this.edad = edad;
    }
    
    // Método que devuelve una cadena con la información básica del animal
   informacion(){
        let string = `${this.nombre} - ${this.peso}kg - ${this.edad}años`;
        return string;
   }
}

// Clase Perro que hereda de Animal y añade la propiedad raza
class Perro extends Animal{
    // Constructor que llama al super y añade raza
    constructor(nombre,peso,edad,raza){
        super(nombre,peso,edad);
        this.raza = raza;
    }

   // Método sobrescrito que incluye la información del padre más la raza
    informacion(){
        let string = `${super.informacion()} - ${this.raza}`;
        return string;
    }

}

// Clase Gato que hereda de Animal y añade la propiedad sexo
class Gato extends Animal{

    // Constructor que llama al super y añade sexo
    constructor(nombre,peso,edad,sexo){
        super(nombre,peso,edad);
        this.sexo = sexo;
    }

    // Método sobrescrito que incluye la información del padre más el sexo
    informacion(){
        let string = `${super.informacion()} - ${this.sexo}`;
        return string;
    }
}

// Clase Conejo que hereda de Animal y añade la propiedad color
class Conejo extends Animal{
    // Constructor que llama al super y añade color
    constructor(nombre,peso,edad,color){
        super(nombre,peso,edad);
        this.color = color;
    }

    // Método sobrescrito que incluye la información del padre más el color
    informacion(){
        let string = `${super.informacion()} - ${this.color}`;
        return string;
    }

}

// Creación de instancias de cada clase de animal
let maxi = new Perro("maxi miliano",6,2,"labrador");
let lucky = new Gato("lucky",3,2,"masculino");
let snowball = new Conejo("snowball",2,5,"blanco");

// Array que contiene todas las instancias de animales
array = [maxi,lucky,snowball];

// Función que muestra la información de todos los animales en el DOM
function mostrarAnimales(){
    let traerID = document.getElementById("textoTodosAnimales")
    for(let x of array){
        let creaEtiqueta = document.createElement("li");
        let instancias = x.informacion();
        creaEtiqueta.innerHTML = instancias;
        traerID.appendChild(creaEtiqueta);

    }
};// Función que muestra la información de todos los animales en el DOM