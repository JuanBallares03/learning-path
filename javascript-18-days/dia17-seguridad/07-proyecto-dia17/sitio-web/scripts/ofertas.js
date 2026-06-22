function ofertas() {
    try {
        fetch('http://localhost:3000/ofertas', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(respuesa => respuesa.json())
        .then(data => cargarOfertas(data))
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

function cargarOfertas(data) {
    const contenedor = document.getElementById('div-ofertas');

    // Iteramos sobre cada oferta y creamos su representación visual en el DOM
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = "div-item";        
                
        const imagen = document.createElement('img');
        imagen.src = "../img/fly.png";
        imagen.alt = "Avion";
      
        // Creamos la sección que muestra el origen y destino del viaje
        const ruta = document.createElement('div');
        ruta.className = "item-ruta";        
        const origen = document.createElement('div');
        origen.textContent = item.origen;
        const destino = document.createElement('div');
        destino.textContent = item.destino;
        ruta.appendChild(origen);
        ruta.appendChild(destino);
      
        // Creamos la sección que contiene información adicional del viaje
        const info = document.createElement('div');
        info.className = "item-info";        
        const salida = document.createElement('div');
        salida.textContent = item.salida;  
        const cupos = document.createElement('div');
        cupos.textContent = 'Cupos: ' + item.cupos;           
        const llegada = document.createElement('div');
        llegada.textContent = item.llegada;
        info.appendChild(salida);
        info.appendChild(cupos);
        info.appendChild(llegada);
         
        const precio = document.createElement('div');
        precio.textContent = '$ ' + item.precio; 
        precio.className = "item-precio";       
      
        // Agregamos todos los elementos creados al contenedor principal
        div.appendChild(imagen);
        div.appendChild(ruta);
        div.appendChild(info);
        div.appendChild(precio);

        contenedor.appendChild(div);
      });
}

// Función que valida los permisos del usuario autenticado antes de redirigirlo a una página protegida
// Parámetro: name (nombre del permiso a validar)
function redirigir(name) {
    const token = localStorage.getItem('token');
    try {
        fetch('http://localhost:3000/validate', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                permiso: name
            })
        })
        .then(respuesta => respuesta.text())
        .then(data => {
            // Si el usuario no tiene permisos, mostramos una alerta
            if(data === "") {
                alert("El usuario no tiene acceso a la pagina solicitada")
            } else {
                // Si tiene permisos, redirigimos al usuario a la página autorizada
                window.location.href = data;
            }
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

