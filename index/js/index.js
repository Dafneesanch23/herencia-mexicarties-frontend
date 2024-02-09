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

