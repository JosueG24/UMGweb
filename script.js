const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
        console.log("Faltan campos por completar.");
        return;
    }

    const datosFormulario = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    console.log("Datos capturados del formulario:");
    console.log(datosFormulario);

    formulario.reset();
});