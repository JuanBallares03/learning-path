const express = require("express");
const cors = require("cors");
const app = express();

const mySQL = require("./connection");
const seguridad = require("./seguridad");

app.use(cors());
app.use(express.json());

app.post("/create", (pedido, respuesta) => {
    let usuarioEncriptado = seguridad.miEncriptado(pedido.body.user);
    let passHashing = seguridad.miHash(pedido.body.pass);

    mySQL.connection.query('INSERT INTO seguridad(user,pass)VALUES ("' + usuarioEncriptado + '", "'+ passHashing + '")',function(error,resultado){
        if(error) throw error;
        respuesta.send("Usuario creado correctamente");
    });

})

app.listen(3000, () => {
    console.log("El servidor esta en línea")
})
