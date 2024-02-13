document.addEventListener("DOMContentLoaded", function() {
    const cardInners = document.querySelectorAll(".card-inner");

    cardInners.forEach(function(cardInner) {
      cardInner.addEventListener("mouseenter", function() {
        cardInner.classList.add("rotate");
      });

      cardInner.addEventListener("mouseleave", function() {
        cardInner.classList.remove("rotate");
      });
    });
  });

/*tarjetas sobre los estados*/
