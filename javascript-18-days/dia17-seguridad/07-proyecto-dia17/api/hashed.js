// Importamos las librerías necesarias para seguridad y autenticación
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');

// Configuración de seguridad para tokens JWT
const claveSecreta = "esta_es_una_clave_para_token";

// Configuración de parámetros para el hash de contraseñas
const ciclos = 12; // Número de rondas de hashing (mayor = más seguro pero más lento)
const salt = bcrypt.genSaltSync(ciclos);

// Configuración de parámetros para encriptación de datos sensibles
const algoritmo = 'aes-128-gcm'; // Algoritmo de encriptación simétrica
const claveEncriptado = 'pass 16 caracter'; // Clave de encriptación (debe tener 16 caracteres)
const vectorIni = crypto.randomBytes(16); // Vector de inicialización aleatorio para mayor seguridad

// Función que genera un hash seguro de una contraseña utilizando bcrypt
// Parámetro: clave (contraseña del usuario en texto plano)
// Retorna: contraseña hasheada y lista para almacenar en la base de datos
function miHash(clave){
    const claveConHash = bcrypt.hashSync(clave, salt);
    return claveConHash;
}

// Función que encripta datos sensibles usando AES-128-GCM
// Parámetro: dato (información a encriptar)
// Retorna: dato encriptado en formato hexadecimal
function miEncriptado(dato){
    const cifrado = crypto.createCipheriv(algoritmo, claveEncriptado, vectorIni);
    let encriptado = cifrado.update(dato, 'utf-8', 'hex');
    encriptado += cifrado.final('hex');
    return encriptado;
}

// Función que genera un token JWT para autenticar usuarios
// Parámetros: idUsuario (identificador único del usuario), usuario (nombre o email del usuario)
// Retorna: token JWT válido por 1 hora
function crearToken(idUsuario, usuario) {
    const informacion = {
        usuario_id: idUsuario,
        usuario: usuario
    };
    const token = jwt.sign(informacion, claveSecreta, { expiresIn: '1h' });
    return token;
}

// Middleware que valida la autenticidad del token JWT en las peticiones protegidas
// Verifica que el token sea válido y no haya expirado antes de permitir acceso al recurso
function validarToken(req, res, next) {
    const token = req.headers.authorization;
    try {
        const decodificado = jwt.verify(token.split(' ')[1], claveSecreta);
        req.user = decodificado; // Adjuntamos los datos del usuario a la petición
        next(); // Permitimos que continúe con la siguiente función
    } catch (error) {
        return res.status(401).send('Token de autenticación inválido');
    }
}

// Exportamos las funciones de seguridad para ser utilizadas en otros módulos de la aplicación
module.exports = { miHash, miEncriptado, crearToken, validarToken };