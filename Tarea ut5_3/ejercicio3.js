
// Elementos del DOM
const inNombre   = document.getElementById("nombre");
const inApellido = document.getElementById("apellidos");

const btnAdd = document.getElementById("boton");
const btnDel = document.getElementById("boton2");

const msg   = document.getElementById("mensaje");
const tabla = document.getElementById("tabla");

// Mostrar mensaje de error
function mostrarError(texto) {
    msg.textContent = texto;
}

// Buscar persona en la tabla
function buscarPersona(nombre, apellido) {
    const filas = tabla.querySelectorAll("tr");

    for (let i = 1; i < filas.length; i++) { // empezamos en 1 para saltar la cabecera
        const celdas = filas[i].querySelectorAll("td");

        if (celdas[0].textContent === nombre &&
            celdas[1].textContent === apellido) {
            return filas[i];
        }
    }
    return null;
}

// define función para añadir persona a la tabla
function anadirPersona(nombre, apellido) {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${nombre}</td><td>${apellido}</td>`;
    tabla.appendChild(fila);
}

// Datos iniciales
const personasIniciales = [
    ["Raul",  "Serrano"],
    ["Pedro", "Lopez"],
    ["Ana",   "Perez"],
    ["Maria", "Carrasco"]
];

personasIniciales.forEach(p => anadirPersona(p[0], p[1]));

//Evento añadir persona a la
btnAdd.addEventListener("click", () => {
    const nombre   = inNombre.value.trim();
    const apellido = inApellido.value.trim();

    if (nombre === "" || apellido === "") {
        mostrarError("Debe ingresar nombre y apellido");
        return;
    }

    if (buscarPersona(nombre, apellido)) {
        mostrarError("La persona ya existe en la tabla");
        return;
    }

    anadirPersona(nombre, apellido);
    mostrarError("");
});

// Evento eliminar persona
btnDel.addEventListener("click", () => {
    const nombre   = inNombre.value.trim();
    const apellido = inApellido.value.trim();

    if (nombre === "" || apellido === "") {
        mostrarError("Debe ingresar nombre y apellido");
        return;
    }

    const fila = buscarPersona(nombre, apellido);

    if (!fila) {
        mostrarError("La persona no existe en la tabla");
        return;
    }

    fila.remove();
    mostrarError("");
});
