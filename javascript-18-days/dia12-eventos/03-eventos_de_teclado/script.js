let campo = document.getElementById("miCampo");

const verificarNumero = (event)=>{
    if(event.key < "0" || event.key >"9"){
        event.preventDefault();
    };
};

campo.addEventListener('keydown',verificarNumero);

campo.addEventListener('keyup',function(event){
    console.log("Entrada del usuario: " + event.target.value);
})

campo.addEventListener('keypress',function(event){
    console.log("Caracter ingresado: " + event.key)
})