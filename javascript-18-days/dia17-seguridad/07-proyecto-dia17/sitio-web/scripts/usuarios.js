// Función que gestiona el proceso de autenticación del usuario en la plataforma
// Valida el formato de la contraseña y realiza la petición al servidor para verificar credenciales
function login() {
  let miEmail = document.getElementById("txtEmail").value;
  let miPass = document.getElementById("txtPass").value;

  // Expresión regular que permite solo letras y números en la contraseña
  let passRegex = /^[a-zA-Z0-9]+$/;
  if (miPass.match(passRegex)) {
    try {
      fetch("http://localhost:3000/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: miEmail,
          pass: miPass,
        }),
      })
        .then((respuesta) => respuesta.text())
        .then((data) => {
          // Si no se retorna un token, significa que las credenciales son incorrectas
          if (data === "") {
            alert("Login incorrecto");
          } else {
            // Almacenamos el token JWT en el almacenamiento local del navegador
            localStorage.setItem("token", data);
            // Redirigimos al usuario a la página de inicio después del login exitoso
            window.location.href = "home.html";
          }
        })
        .catch((error) => {
          throw new Error("Error en la solicitud: " + error);
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("No se permiten caracteres especiales, solo letras y numeros");
  }
}

// Función que gestiona el registro de nuevos usuarios en la plataforma
// Valida que la contraseña cumpla con los requisitos antes de enviar la solicitud
function crear() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;

    // Expresión regular que permite solo letras y números en la contraseña
    let contraseñaRegex = /^[a-zA-Z0-9]+$/
    
    if (miPass.match(contraseñaRegex)) {
        try {
            fetch('http://localhost:3000/usuarios/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: miEmail,
                    pass: miPass
                })
            })
            // Mostramos confirmación cuando el usuario se crea correctamente
            .then(alert("Usuario creado"))
            .catch(error => { throw new Error("Error en la solicitud: " + error) })
        } catch (error) {
            console.error(error)
        }
    } else {
        alert("La contraseña no cumplen las condiciones mínimas")
    }
}
