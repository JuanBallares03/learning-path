//Configurar con express js el servidor de la app

const express = require("express");
const app = express();

app.set("port",3000);
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

//Llamar al objeto mongoCliente del componento mongoDB

const{MongoClient}= require('mongodb');

//Funcion asincrona para las peticiones al servidor

const usar=async()=>{
    //Crear nueva instancia de mongoClient

    const client = new MongoClient("mongodb://127.0.0.1:27017/mibase");

    //Nos conectamos y hacemos nuestras peticiones

    try{
        const conexion = await client.connect();
        const controlador = conexion.db().collection("clientes");


        let respuesta,filas,filtro;

        //Insertar un nuevo registro
        const nuevoCliente ={
            nombre:"Camilo",
            genero:0,
            telefono:1201010,
            domicilio:"Ambala pa arriba"
        };

        respuesta = await controlador.insertOne(nuevoCliente);
        console.log("Insertado", respuesta);


        //Realizar una consulta
        filas = await controlador.find().toArray();
        console.log("Seleccion: ", filas);

        //Modificar el registro anterior
        const cambiarCliente = {$set: {genero:1,telefono:12345}};
        filtro = {nombre:"Camilo"};
        respuesta = await controlador.updateOne(filtro,cambiarCliente);
        console.log("Actualizado: ", respuesta);

        //Realizar consulta
        filtro = {genero:1};
        filas = await controlador.find(filtro).toArray();
        console.log("Seleccion: ",filas);


        //Eliminar un registro

        filtro = {nombre:"Camilo"};
        respuesta = await controlador.deleteOne(filtro);
        console.log("Eliminado: ",respuesta);


        //Realizar consulta
        filas = await controlador.find().toArray();
        console.log("Seleccion: ", filas);
    }catch(error){
        console.log(error);
    }
}

usar();