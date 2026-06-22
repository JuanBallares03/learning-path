// npm install crypto
// npm install bcrypt
// npm install cors

const bcrypt = require("bcrypt");
const crypto = require("crypto");

function miHash(clave){

    const ciclos = 10;
    const salt = bcrypt.genSaltSync(ciclos);

    const claveConHash = bcrypt.hashSync(clave,salt);

    return claveConHash;
}

function miEncriptado(dato){

    const algoritmo = 'aes-128-gcm';
    const clave = 'pass 16 caracter';
    const vectorIni = crypto.randomBytes(16);
  
    const cifrado = crypto.createCipheriv(algoritmo,clave,vectorIni);

    let encriptado = cifrado.update(dato,'utf-8','hex');

    encriptado += cifrado.final('hex');

    return encriptado;
}

module.exports={miHash,miEncriptado};

