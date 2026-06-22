let usuario = "Camilo";
let password = "IngenieroCamilo";
let token = "miToken";

//Basic se usa usuario y contraseña, ademas se debe pasar esos dos campos en el formato base 6 

// fetch("https://jsonplaceholder.typicode.com/posts/",{
//     method: "GET",
//     credentials: "include",
//     headers:{
//         "Authorization": "Basic " + btoa(usuario + ":" + password),
//         "Content-Type": "application/json"
//     }

// })

"Tipos de cache"
// default sigue las reglas que estan establecidas en el servidor
// no-cache el navegador siempre solicita al servidor, sin importar que haya algo en cache
// no-store el navegador cuando reciba la informacion no va almacenar una copia en el cache
// reload fuerza al navegador a descargar el recurso que solicito al servidor incluso si ya existe una copia en cache
// force-cache hace que el navegador siempre utilice la copia que se encuentre en cache asi este caducada, lo hace sin consultar al servidor
// el navegador solamente va utilizar la copia que se encuentre en cache, no va realizar solicitud al servidor asi no haya copia en cache

fetch("https://jsonplaceholder.typicode.com/posts/",{
    method: "GET",
    credentials: "include",
    cache: "only-if-cached",
    redirect: "manual",
    headers:{
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response=>{
    if(response.type==="opaqueredirect"){
        let nuevaUbicacion = response.headers.get("Location");
        console.log("Redirigiendo a :",nuevaUbicacion);
    }else{
        return response.json();
    }
})
.then(data=>console.log(data))
.catch(error=>console.error(error));

