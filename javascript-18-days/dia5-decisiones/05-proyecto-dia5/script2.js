function elegirGenero(genero){

    let mostrarTexto = document.getElementById("mostrarTexto");
    let edad = +document.getElementById("numeroEdad").value;
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