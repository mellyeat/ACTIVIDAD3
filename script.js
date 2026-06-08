// Lista de colores
const colores = [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bf6ff"
];

// Seleccionar el botón
const boton = document.querySelector("button");

// Evento al hacer clic
boton.addEventListener("click", function() {
    // Generar un índice aleatorio
    const indice = Math.floor(Math.random() * colores.length);

    // Cambiar el color de fondo
    document.body.style.backgroundColor = colores[indice];
});