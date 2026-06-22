`
npm init -y
npm install express
npm install mysql
`

//Configurar con express js el servidor de la app

const express = require("express");
const app = express();

app.set("port",3000);
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

//Llamar al componenete de mysql

const mysql = require("mysql");

//Establecer los parametros de la conexion
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Camiloing0329_",
    database: "dbjavascript"
});


//Nos conectamos con la base
connection.connect();

//Agregar nuevo registro
connection.query('INSERT INTO cliente VALUES (1,"camilo",1,13131)',(error,resultados)=>{
    if(error) throw error;
    console.log(resultados)
});

//Realizar consulta 
connection.query('SELECT * FROM cliente',(error,filas)=>{
     if(error) throw error;
    console.log(filas)
});

//Realizar modificacion de registro
connection.query('UPDATE cliente SET genero = 0, telefono=1313 WHERE id_cliente=1',(error,resultados)=>{
    if(error) throw error;
    console.log(resultados)
});

connection.query('SELECT * FROM cliente',(error,filas)=>{
     if(error) throw error;
    console.log(filas)
});

//Eliminar un registro
connection.query('DELETE FROM cliente WHERE id_cliente=1',(error,resultados)=>{
    if(error) throw error;
    console.log(resultados)
});


connection.query('SELECT * FROM cliente',(error,filas)=>{
     if(error) throw error;
    console.log(filas)
});

//Cerramos la conexion
connection.end()
