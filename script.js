// esta madre es la del tooltip
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })
     

var textos=[
 "Mis gafas en el escritorio",
 "Camino a la perdición",
 "Paseando en bicicleta",
 "Vias de el tren"
]


function cargarfoto(img, txt){
document.getElementById("galeria").src="https://picsum.photos/id/"+img+"/400/400";
document.getElementById("mitexto").innerHTML=textos[txt];
}
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
