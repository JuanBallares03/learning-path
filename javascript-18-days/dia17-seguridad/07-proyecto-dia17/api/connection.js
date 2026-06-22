// Importamos el módulo mysql2 para establecer la conexión con la base de datos
const mysql = require("mysql2");

// Creamos la conexión a la base de datos MySQL con las credenciales y configuración necesaria
// Se establece la conexión al servidor local en el puerto por defecto (3306)
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Camiloing0329_",
  database: "viajes"
});

// Intentamos conectar a la base de datos y manejamos posibles errores de conexión
connection.connect(err => {
  if (err) {
    // Si ocurre un error, lo mostramos en la consola para identificar el problema
    console.error("Error al conectar:", err);
    return;
  }
  // Confirmamos que la conexión a la base de datos fue exitosa
  console.log("Conectado a la base de datos");
});

// Exportamos la conexión para que pueda ser utilizada en otros módulos de la aplicación
module.exports = { connection };