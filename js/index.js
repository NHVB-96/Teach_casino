document.getElementById("miFormulario").addEventListener("submit", function(event) {
    let isValid = true;

    // Validar el campo de usuario
    let usuario = document.getElementById("Usuario");
    let usuarioError = document.getElementById("usuarioError");
    if (usuario.value.trim() === "") {
        usuarioError.style.display = "block";
        isValid = false;
    } else {
        usuarioError.style.display = "none";
    }

    // Validar el campo de contraseña
    let contrasena = document.getElementById("Contrasena");
    let contrasenaError = document.getElementById("ContrasenaError");
    if (contrasena.value.trim() === "") {
        contrasenaError.style.display = "block";
        isValid = false;
    } else {
        contrasenaError.style.display = "none";
    }

    // Prevenir el envío del formulario si no es válido
    if (!isValid) {
        event.preventDefault();
    }
});
