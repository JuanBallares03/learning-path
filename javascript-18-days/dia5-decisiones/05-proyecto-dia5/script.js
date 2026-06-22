function elegirGenero(genero,edad){
    
    let mostrarTexto = document.getElementById("mostrarTexto");
     if (edad<=0 || edad>100){
                alert("Porfavor digite una edad valida.")
        }
        
    switch(genero){
        
        case "comedia":
           
            if(edad<13){
                mostrarTexto.textContent = "Buscando a Nemo";
            }else{
                if (edad<16){
                    mostrarTexto.textContent = "Chicas Malas";
                }
                else{
                    mostrarTexto.textContent = "Kick-Ass";
                }
            }   
            break;
        case "drama":
         if(edad<13){
                mostrarTexto.textContent = "Un puente hacia Terabithia";
            }else{
                if (edad<16){
                    mostrarTexto.textContent = "La red social";
                }
                else{
                    mostrarTexto.textContent = "Ventaja de ser invisible";
                }
            }   
            break;
        case "musical":
            if(edad<13){
                mostrarTexto.textContent = "El libro de la selva";
            }else{
                if (edad<16){
                    mostrarTexto.textContent = "High School Musical";
                }
                else{
                    mostrarTexto.textContent = "La La Land";
                }
            }   
            break;
        case "crimen":
            if(edad<13){
                mostrarTexto.textContent = "Los increibles";
            }else{
                if (edad<16){
                    mostrarTexto.textContent = "Sherlock Holmes";
                }
                else{
                    mostrarTexto.textContent = "El Padrino";
                }
            }
            break;
    }

}

function botonComedia(){
    let generoSeleccionado ="comedia";
    let ingresoEdad = +document.getElementById("numeroEdad").value;
    elegirGenero(generoSeleccionado,ingresoEdad)
}

function botonDrama(){
    let generoSeleccionado ="drama";
    let ingresoEdad = +document.getElementById("numeroEdad").value;
    elegirGenero(generoSeleccionado,ingresoEdad)
}

function botonMusical(){
    let generoSeleccionado ="musical";
    let ingresoEdad = +document.getElementById("numeroEdad").value;
    elegirGenero(generoSeleccionado,ingresoEdad);
}

function botonCrimen(){
    let generoSeleccionado ="crimen";
    let ingresoEdad = +document.getElementById("numeroEdad").value;
    elegirGenero(generoSeleccionado,ingresoEdad);
}
