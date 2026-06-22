let divTextArea= document.getElementById("mostrarInfoId");

// Esta función hace un GET y trae todos los registros de la API
const peticionMostrarDatos=async()=>{
    try{
        let peticion = await fetch("https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
        if(!peticion.ok){
            throw new Error("Error en la solictud: " + peticion.statusText);
        }

        let datos = await peticion.json()
        await mostrarDatos(datos)
    
    }catch(error){
        console.error("Algo ha salido mal",error);
    }
    
}

// Esta función muestra los datos en la tabla creando filas y celdas
const mostrarDatos=(array)=>{

    let idMiTabla = document.getElementById("miTabla");
    for(let dato of array){
           let tr = document.createElement("tr");
        for(let x in dato){     
           let td = document.createElement("td");
           let celdaInfo = dato[x];
           td.textContent = celdaInfo;
           tr.appendChild(td);
        }
        idMiTabla.appendChild(tr);
    }
}

// Esta función hace un POST y agrega un nuevo registro con los valores de los inputs
const agregarRegistro= async()=>{
    try{

        let marca = document.getElementById("infoMarca").value;
        let modelo = document.getElementById("infoModelo").value;
        let color = document.getElementById("infoColor").value;
        let almacenamiento = document.getElementById("infoAlmacenamiento").value;
        let procesador = document.getElementById("infoProcesador").value;
        

        let peticion = await fetch("infoId",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                marca: marca,
                modelo: modelo,
                color: color,
                almacenamiento: almacenamiento,
                procesador: procesador
            })
        })

        if(!peticion.ok){
            throw new Error("Error en la solictud: " + peticion.statusText);
        }

        alert("Se ha registrado correctamente los datos");

    }catch(error){
        console.error("Algo salio mal: ", error);
    }
    
}

// Esta función hace un GET por id y consulta un registro específico
const generarPeticion= async()=>{
    let idIngresado = document.getElementById("infoId").value;
    let peticion = await fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${idIngresado}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    if(!peticion.ok){
        throw new Error("Error en la solictud: " + peticion.statusText);
    }
    let respuesta = await peticion.json()
    mostrarDatosIndividuales(respuesta);
}

// Esta función muestra un registro en textareas para poder editarlo
const mostrarDatosIndividuales=(objeto)=>{
    divTextArea.innerHTML = ""
    for(let elemento in objeto){
        let crearTextArea = document.createElement("textarea");
        crearTextArea.value = objeto[elemento];
        crearTextArea.name = elemento
        divTextArea.appendChild(crearTextArea);
    }

}

// Esta función hace un PUT y modifica un registro existente usando el id
const modificarRegistro= async()=>{
    try{
        let json = {} 
        for(let item of divTextArea.children){
            json[item.name]=item.value
        }

        let peticion = await fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${json.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(json)
        })

        if(!peticion.ok){
            throw new Error("Error en la solictud: " + peticion.statusText);
        }

        let respuesta = await peticion.json();
        console.log(respuesta);

    }catch(error){
        console.error(error);
    }
    
} 

// Esta función hace un DELETE y elimina un registro según el id
const eliminarRegistro=async()=>{
    try{
        let peticion = await fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${json.id}`,{
            method:"DELETE"
        })

        if(!peticion.ok){
                throw new Error("Error en la solictud: " + peticion.statusText);
        }

        alert("Se ha borrado el registro con exito");
    }
    catch(error){
        console.error(error);
    }

}