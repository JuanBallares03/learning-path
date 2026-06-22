
import { useState } from "react";

const InteraccionUsuario=({min,max})=>{

   let[numero, actualizarValor] = useState(0);
   let[numeroAleatorio,cambiarNumero] = useState(()=>{
        return Math.floor(Math.random()*(max-min+1)+min);
   });
   

    const cambioValor=(evento)=>{
        let cambio= evento.target.value
        actualizarValor(cambio) 
    };

    const generarNumeroMaquina=()=>{
        if(numero <= numeroAleatorio){
            alert("La maquina a ganado");
            let  nuevoNumero = Math.floor(Math.random()*(max-min+1)+min);
            cambiarNumero(nuevoNumero)
        }else{
            alert("El usuario a ganado");
        }
    }



    return(
        <div className="usuario"> 
            <input onChange={cambioValor} type="number" value={numero} placeholder="Ingresa un numero"/>
            <button onClick={generarNumeroMaquina}>Adivinar</button>
        </div>      
    )

}

export default InteraccionUsuario;
