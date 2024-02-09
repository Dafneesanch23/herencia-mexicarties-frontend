$(document).ready(function() {
    $('#customCarousel1').carousel({
       interval: 5000
    });
    
    
    $('#customCarousel1').hover(function() {
       $(this).carousel('pause');
    }, function() {
       $(this).carousel('cycle');
    });
 });

 
 function showButtons(box) {
    box.querySelector('.options').style.display = 'flex';
 }
 
 function hideButtons(box) {
    box.querySelector('.options').style.display = 'none';
 }

 $(document).ready(function() {
   $("#tiendaDropdown").click(function() {
     $(".dropdown-menu").toggle();
   });
 });

 function rotateCard(event) {
  const card = event.currentTarget;
  card.classList.toggle('rotate');
}

// Función para mostrar los botones al pasar el ratón
function showButtons(event) {
  const buttons = event.currentTarget.querySelector('.options');
  buttons.style.opacity = '1';
}

// Función para ocultar los botones al quitar el ratón
function hideButtons(event) {
  const buttons = event.currentTarget.querySelector('.options');
  buttons.style.opacity = '0';
}

//Funcion para ocultar la img al pasar el raton


// Obtener todas las tarjetas y agregar eventos
const cards = document.querySelectorAll('.box');
cards.forEach(card => {
  card.addEventListener('mouseenter', rotateCard);
  card.addEventListener('mouseleave', rotateCard);
  card.addEventListener('mouseenter', showButtons);
  card.addEventListener('mouseleave', hideButtons);
});
