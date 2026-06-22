function Calcular(){
    let respuesta1= document.getElementById("texto1");
    let respuesta2= document.getElementById("texto2");
    let respuesta3= document.getElementById("texto3");

    // let elementoEdad = +document.getElementById("textoEdad").value;
    let elementoEdad = document.getElementById("textoEdad");
    let edad = elementoEdad.value

    // respuesta 1
    let puedeBeber = edad >= 18;
    respuesta1.textContent = puedeBeber;

    // respuesta 2

    let puedeIngresar = edad >= 18 && edad <=30;
    respuesta2.textContent = puedeIngresar;

    //respuesta 3
    let entradaGratis = edad == 20 || edad ==25;
    respuesta3.textContent = entradaGratis

}