// Importamos las dependencias necesarias para configurar el servidor Express
const express = require("express");
const cors = require("cors");
const app = express();

// Importamos los módulos personalizados de conexión a base de datos y funciones de seguridad
const mySQL = require("./connection");
const hashImport = require("./hashed");

// Configuramos los middleware globales de la aplicación
app.use(cors()); // Habilitamos CORS para permitir peticiones desde otros dominios
app.use(express.json()); // Configuramos el parser para recibir datos en formato JSON

// Ruta POST para autenticar usuarios en el sistema
// Valida las credenciales del usuario y retorna un token JWT si son correctas
app.post("/usuarios/login", (pedido, respuesta) => {

    let emailEncriptado = hashImport.miEncriptado(pedido.body.email);
    let contraseñaHasheada = hashImport.miHash(pedido.body.pass);
    
    // Consultamos la base de datos para verificar las credenciales del usuario
    mySQL.connection.query('SELECT id FROM usuarios WHERE (administrador = 0 AND email = "' + emailEncriptado + '" AND pass = "' + contraseñaHasheada + '") ' + 
                           'OR (administrador = 1 AND email = "' + pedido.body.email + '" AND pass = "' + pedido.body.pass + '")', function(error, resultados) {
        if (error) throw error;
        
        // Si no encontramos coincidencias, retornamos undefined
        if(resultados.length === 0)
            respuesta.send(undefined);
        else    
            // Si las credenciales son válidas, generamos y retornamos un token JWT
            respuesta.send(hashImport.crearToken(resultados[0]['id'], pedido.body.user));
    });

})

// Ruta POST para registrar nuevos usuarios en la plataforma
// Valida que la contraseña cumpla con los requisitos de seguridad antes de crear la cuenta
app.post("/usuarios/create", (pedido, respuesta) => {
    let contraseñaUsuario = pedido.body.pass;
    let emailEncriptado = hashImport.miEncriptado(pedido.body.email);
    let contraseñaHasheada = hashImport.miHash(pedido.body.pass);
    
    // Validamos que la contraseña contenga al menos un número, una mayúscula y una minúscula
    if(contraseñaUsuario.match(/\d/)&&(contraseñaUsuario.match(/[A-Z]/))&&(contraseñaUsuario.match(/[a-z]/))){
        // Insertamos el nuevo usuario en la base de datos
        mySQL.connection.query('INSERT INTO usuarios (email, pass, administrador) VALUES ("' + emailEncriptado + '", "' + contraseñaHasheada + '", 0)', function(error, resultados) {
        if (error) throw error;
        
        // Asignamos permisos por defecto al nuevo usuario
        mySQL.connection.query('INSERT INTO permisosxusuario VALUES (' + resultados['insertId'] + ', 2)', function(error, resultados) {
            if (error) throw error;
            respuesta.send(true);
        });
    });
  } else {
    // Si la contraseña no cumple los requisitos, retornamos un error
    respuesta.status(400).send({ error: "Contraseña inválida" })
  }
})

// Ruta GET para obtener todas las ofertas disponibles en la plataforma
app.get("/ofertas", (pedido, respuesta) => {    
    mySQL.connection.query('SELECT * FROM ofertas', function(error, resultados) {
        if (error) throw error;
        respuesta.send(resultados);
    });
})

// Ruta POST protegida que valida los permisos del usuario autenticado
// Utiliza middleware de autenticación JWT antes de procesar la petición
app.post("/validate", hashImport.validarToken, (pedido, respuesta) => {    
    // Consultamos la base de datos para verificar si el usuario tiene permiso para acceder a la página solicitada
    mySQL.connection.query('SELECT p.pagina FROM permisos p JOIN permisosxusuario u ON u.permiso_id = p.id ' +
                           'WHERE u.usuario_id = "' + pedido.user.usuario_id + '" AND p.nombre = "' + pedido.body.permiso + '"', function(error, resultados) {
        if (error) throw error;
        
        // Si el usuario no tiene permiso, retornamos undefined
        if(resultados.length === 0)
            respuesta.send(undefined);
        else    
            // Si tiene permiso, retornamos la página autorizada
            respuesta.send(resultados[0]['pagina']);
    });
})

// Iniciamos el servidor en el puerto 3000 y confirmamos que está activo
app.listen(3000, () => {
    console.log("El servidor esta en línea")
})

