const formularioRegistro = document.getElementById("formularioRegistro");
const formularioLogin = document.getElementById("formularioLogin");
const modalLogin = document.getElementById("modalLogin");
const abrirLogin = document.getElementById("abrirLogin");
const abrirLoginHero = document.getElementById("abrirLoginHero");
const cerrarLogin = document.getElementById("cerrarLogin");
const abrirRecuperacion = document.getElementById("abrirRecuperacion");
const volverLogin = document.getElementById("volverLogin");
const formularioRecuperacion = document.getElementById("formularioRecuperacion");
const mensajeRegistro = document.getElementById("mensajeRegistro");
const mensajeLogin = document.getElementById("mensajeLogin");
const mensajeRecuperacion = document.getElementById("mensajeRecuperacion");
let ultimoBotonLogin = abrirLogin;

// Muestra mensajes debajo de los formularios
function mostrarMensaje(elemento, texto) {
    elemento.textContent = texto;
    elemento.classList.add("activo");
}

// Guarda el perfil temporal en el navegador
function guardarPerfilTemporal(perfilTemporal) {
    perfilTemporal.imagen = perfilTemporal.imagen || "https://placedog.net/500/500?id=1";

    try {
        localStorage.setItem("perfilTemporal", JSON.stringify(perfilTemporal));
    } catch (error) {
        sessionStorage.setItem("perfilTemporal", JSON.stringify(perfilTemporal));
    }
}

// Abre la página del perfil
function abrirPaginaPerfil() {
    window.location.assign(new URL("perfil.html", window.location.href).href);
}

// Abre el modal de login
function abrirModalLogin(evento) {
    ultimoBotonLogin = evento.currentTarget;
    modalLogin.classList.add("activo");
    modalLogin.classList.remove("recuperando");
    modalLogin.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("nombreLogin").focus();
}

// Cierra el modal de login
function cerrarModalLogin() {
    modalLogin.classList.remove("activo");
    modalLogin.classList.remove("recuperando");
    modalLogin.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    ultimoBotonLogin.focus();
}

// Cambia a recuperación de contraseña
function mostrarRecuperacion() {
    modalLogin.classList.add("recuperando");
    document.getElementById("emailRecuperacion").focus();
}

// Vuelve al formulario de login
function mostrarLogin() {
    modalLogin.classList.remove("recuperando");
    document.getElementById("nombreLogin").focus();
}

// Registro de nuevo perfil temporal
formularioRegistro.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombreRegistro").value.trim();
    const email = document.getElementById("emailRegistro").value.trim();
    const password = document.getElementById("passwordRegistro").value.trim();
    const confirmarPassword = document.getElementById("confirmarPassword").value.trim();

    if (nombre === "" || email === "" || password === "" || confirmarPassword === "") {
        mostrarMensaje(mensajeRegistro, "Completa todos los campos para crear tu perfil.");
        return;
    }

    if (password.length < 6) {
        mostrarMensaje(mensajeRegistro, "La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    if (password !== confirmarPassword) {
        mostrarMensaje(mensajeRegistro, "Las contraseñas no coinciden.");
        return;
    }

    const perfilTemporal = {
        nombre: nombre,
        email: email,
        password: password
    };

    guardarPerfilTemporal(perfilTemporal);
    mostrarMensaje(mensajeRegistro, "Perfil temporal creado correctamente.");
    formularioRegistro.reset();
    abrirPaginaPerfil();
});

abrirLogin.addEventListener("click", abrirModalLogin);
abrirLoginHero.addEventListener("click", abrirModalLogin);
cerrarLogin.addEventListener("click", cerrarModalLogin);
abrirRecuperacion.addEventListener("click", mostrarRecuperacion);
volverLogin.addEventListener("click", mostrarLogin);

// Cierra el modal al hacer clic fuera
modalLogin.addEventListener("click", function (evento) {
    if (evento.target === modalLogin) {
        cerrarModalLogin();
    }
});

// Cierra el modal con la tecla Escape
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && modalLogin.classList.contains("activo")) {
        cerrarModalLogin();
    }
});

// Inicio de sesión temporal
formularioLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombreLogin").value.trim();
    const email = document.getElementById("emailLogin").value.trim();
    const password = document.getElementById("passwordLogin").value.trim();

    if (nombre === "" || email === "" || password === "") {
        mostrarMensaje(mensajeLogin, "Completa todos los campos para iniciar sesión.");
        return;
    }

    const perfilTemporal = {
        nombre: nombre,
        email: email,
        password: password
    };

    guardarPerfilTemporal(perfilTemporal);
    mostrarMensaje(mensajeLogin, "Datos recibidos. Abriendo perfil temporal.");
    formularioLogin.reset();
    abrirPaginaPerfil();
});

// Recuperación de contraseña temporal
formularioRecuperacion.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const email = document.getElementById("emailRecuperacion").value.trim();

    if (email === "") {
        mostrarMensaje(mensajeRecuperacion, "Escribe tu email para recuperar la contraseña.");
        return;
    }

    mostrarMensaje(mensajeRecuperacion, "Se ha enviado un correo de recuperación.");
    formularioRecuperacion.reset();
});

// Configuración del slider

const swiper = new Swiper(".miSlider", {

    loop: true,

    slidesPerView: 1,

    spaceBetween: 0,

    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
