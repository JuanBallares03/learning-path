b// Content type es un encabazado http que indica el tipo de contenido prensente en el cuerpo de la solicitud 
const crearPost = async(titulo,contenido)=>{ 
    try{
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts",{  
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                title:titulo,
                body:contenido,
                userId:1
            }),
        })

        if(!respuesta.ok){
            throw new Error("Error en la solictud: " + respuesta.statusText);
        }

        let data = await respuesta.json(); 
        console.log("Registro creado: ", data);


    }catch(error){
        console.error("Algo salio mal: ", error);
    }

}

crearPost("Mi tutulo de ejemplo","Mi contenido de ejemplo");