const imagenesPerfil = [
    "https://placedog.net/500/500?id=1",
    "https://placedog.net/500/500?id=2",
    "https://placedog.net/500/500?id=3",
    "https://placedog.net/500/500?id=4",
    "https://placedog.net/500/500?id=5"
];

const imagenPorDefecto = imagenesPerfil[0];
const perfilImagen = document.getElementById("perfilImagen");
const abrirImagenPerfil = document.getElementById("abrirImagenPerfil");
const cerrarImagenPerfil = document.getElementById("cerrarImagenPerfil");
const modalImagenPerfil = document.getElementById("modalImagenPerfil");
const carruselImagenes = document.getElementById("carruselImagenes");
const imagenAnterior = document.getElementById("imagenAnterior");
const imagenSiguiente = document.getElementById("imagenSiguiente");
const seleccionarImagen = document.getElementById("seleccionarImagen");
let indiceImagenActual = 0;
let perfilTemporal = {
    nombre: "",
    email: "",
    password: "",
    imagen: imagenPorDefecto
};

function obtenerPerfilGuardado() {
    let datosGuardados = null;

    try {
        datosGuardados = localStorage.getItem("perfilTemporal");
    } catch (error) {
        datosGuardados = sessionStorage.getItem("perfilTemporal");
    }

    if (!datosGuardados) {
        datosGuardados = sessionStorage.getItem("perfilTemporal");
    }

    return datosGuardados ? JSON.parse(datosGuardados) : null;
}

function guardarPerfil() {
    try {
        localStorage.setItem("perfilTemporal", JSON.stringify(perfilTemporal));
    } catch (error) {
        sessionStorage.setItem("perfilTemporal", JSON.stringify(perfilTemporal));
    }
}

function renderizarPerfil() {
    document.getElementById("perfilNombre").textContent = perfilTemporal.nombre || "Sin registro";
    document.getElementById("perfilEmail").textContent = perfilTemporal.email || "Sin registro";
    document.getElementById("perfilPassword").textContent = perfilTemporal.password || "Sin registro";
    perfilImagen.src = perfilTemporal.imagen || imagenPorDefecto;
}

function renderizarCarrusel() {
    carruselImagenes.innerHTML = imagenesPerfil.map((imagen, indice) => `
        <button type="button" class="opcion-imagen ${indice === indiceImagenActual ? "activa" : ""}" data-indice="${indice}" aria-label="Seleccionar perro ${indice + 1}">
            <img src="${imagen}" alt="Perro ${indice + 1}">
        </button>
    `).join("");

    carruselImagenes.style.transform = `translateX(-${indiceImagenActual * 100}%)`;
}

function abrirModalImagen() {
    const indiceGuardado = imagenesPerfil.indexOf(perfilTemporal.imagen);
    indiceImagenActual = indiceGuardado >= 0 ? indiceGuardado : 0;

    renderizarCarrusel();
    modalImagenPerfil.classList.add("activo");
    modalImagenPerfil.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function cerrarModalImagen() {
    modalImagenPerfil.classList.remove("activo");
    modalImagenPerfil.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    abrirImagenPerfil.focus();
}

function moverCarrusel(direccion) {
    indiceImagenActual = (indiceImagenActual + direccion + imagenesPerfil.length) % imagenesPerfil.length;
    renderizarCarrusel();
}

const datosPerfil = obtenerPerfilGuardado();

if (datosPerfil) {
    perfilTemporal = {
        ...perfilTemporal,
        ...datosPerfil
    };
}

renderizarPerfil();
renderizarCarrusel();

abrirImagenPerfil.addEventListener("click", abrirModalImagen);
cerrarImagenPerfil.addEventListener("click", cerrarModalImagen);
imagenAnterior.addEventListener("click", function () {
    moverCarrusel(-1);
});
imagenSiguiente.addEventListener("click", function () {
    moverCarrusel(1);
});

carruselImagenes.addEventListener("click", function (evento) {
    const opcion = evento.target.closest(".opcion-imagen");

    if (!opcion) {
        return;
    }

    indiceImagenActual = Number(opcion.dataset.indice);
    renderizarCarrusel();
});

seleccionarImagen.addEventListener("click", function () {
    perfilTemporal.imagen = imagenesPerfil[indiceImagenActual];
    guardarPerfil();
    renderizarPerfil();
    cerrarModalImagen();
});

modalImagenPerfil.addEventListener("click", function (evento) {
    if (evento.target === modalImagenPerfil) {
        cerrarModalImagen();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && modalImagenPerfil.classList.contains("activo")) {
        cerrarModalImagen();
    }
});
