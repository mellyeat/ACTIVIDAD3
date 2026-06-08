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
