
// Agrega un evento click a las imágenes de los artesanos para abrir el modal correspondiente
document.querySelectorAll('.carousel-item img').forEach((img, index) => {
  img.addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('artesanoModal'));
    const nombreArtesano = `Artesano ${index + 1}`;
    const descripcionArtesano = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum cumque possimus aut voluptate iure alias quaerat temporibus recusandae explicabo velit nisi ab, doloremque veniam perferendis amet deserunt eum! Ea.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate exercitationem suscipit laudantium, quod dicta, sint nostrum recusandae libero sed voluptatem, in excepturi. Eaque debitis fugit, asperiores eum vitae eveniet magni.`;
    const imagenArtesano = img.src;
    document.getElementById('artesanoModalLabel').innerText = nombreArtesano;
    document.getElementById('artesanoDescripcion').innerText = descripcionArtesano;
    document.getElementById('artesanoImagen').innerHTML = `<img src="${imagenArtesano}" class="img-fluid" alt="${nombreArtesano}">`;
    modal.show();
  });
});
