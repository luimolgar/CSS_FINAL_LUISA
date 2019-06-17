

//Slideshow
/* Javascript de Slideshow */

var slideIndex = 1;
showSlides(slideIndex);

// Controles de siguiente imagen y anterior.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles imagenes
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Funcion que controla que ocurre cuando se acaban las imagenes, que pasa a la primera de nuevo.
//Tanto de los circulos como de los cursores anterior y siguiente
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("misimagenes");
  var dots = document.getElementsByClassName("circulo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    // Añade resalto sobre el circulo correspondiente a la imagen activa
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    // block para que ocupe la linea entera (elemento de bloque)
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//FIN Slideshow

//JS PARA Acordeon (presupuestos)

var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Entre la activaciçon y desactivacion */
    this.classList.toggle("active");


    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//SALDO DISPOINIBLE

function movimientos_buscar() {

  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('movimientos');
  filter = input.value.toUpperCase();
  ul = document.getElementById("cuentas_lista");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


//FIN SALDO
function ocultarcarac(){
document.getElementById('saldo').style.display = 'none';
document.getElementById('presupuestos').style.display = 'none';
}


function mostrarsaldo(){
document.getElementById('saldo').style.display = 'block';
document.getElementById('presupuestos').style.display = 'none';
document.getElementByClass('contenedor-imagenes').style.display = 'none';
}

function mostrarpresu(){
document.getElementById('presupuestos').style.display = 'block';
document.getElementById('saldo').style.display = 'none';
}
