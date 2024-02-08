// Datos de ejemplo de licores artesanales mexicanos
const licoresMexicanos = [
    {
      name: 'Mezcal',
      img: '/Tienda/Licores/Img/Licor-de-cafe.png',
      description: 'El mezcal es una bebida alcohólica originaria de México, obtenida a partir de la destilación de jugos de diversas variedades de agave.',
      price: 370,
    },
    {
      name: 'Tequila',
      img: '/ruta/a/tequila.jpg',
      description: 'El tequila es un licor originario de México, elaborado a partir de la fermentación y destilación del agave azul.'
    },
    // Agrega más licores mexicanos según sea necesario
  ];
  
  // Función para mostrar los licores artesanales mexicanos en miniaturas
  function mostrarMiniaturasLicoresMexicanos() {
    const grid = document.getElementById('liquor-grid');
  
    licoresMexicanos.forEach((licor, index) => {
      const productThumbnail = document.createElement('div');
      productThumbnail.classList.add('product-thumbnail');
  
      // Crear la imagen
      const image = document.createElement('img');
      image.src = licor.img;
      image.alt = licor.name;
      image.addEventListener('click', () => mostrarDetallesProducto(licor));
  
      // Crear el texto "Ver más"
      const overlayText = document.createElement('div');
      overlayText.classList.add('overlay-text');
      overlayText.textContent = 'Ver más';
  
      // Agregar evento click al texto "Ver más"
      overlayText.addEventListener('click', () => mostrarDetallesProducto(licor));
  
      // Agregar la imagen y el texto "Ver más" al thumbnail del producto
      productThumbnail.appendChild(image);
      productThumbnail.appendChild(overlayText);
  
      grid.appendChild(productThumbnail);
    });
  }
  

  // Función para mostrar los detalles del producto en el modal
  function mostrarDetallesProducto(producto) {
    const modalBody = document.getElementById('productModalBody');
    modalBody.innerHTML = `
      <h2>${producto.name}</h2>
      <img src="${producto.img}" alt="${producto.name}">
      <p>${producto.description}</p>
      <p>Precio: $${producto.price}</p>
      <button class="btn btn-primary" onclick="echarAlHuacal('${producto.name}')">Echar al Huacal</button>
      <button class="btn btn-secondary" onclick="agregarAListaDeDeseos('${producto.name}')">Agregar a Lista de Deseos</button>
    `;
  
    $('#productModal').modal('show');
  }
  
  // Llama a la función para mostrar las miniaturas de los licores artesanales mexicanos
  mostrarMiniaturasLicoresMexicanos();

  // Función para agregar un producto a la lista de deseos
  function echarAlHuacal(nombreProducto) {
    const producto = licoresMexicanos.find(licor => licor.name === nombreProducto);
    console.log('Producto añadido al huacal:', producto);
    // Incrementar el contador de productos en el huacal
    const huacalNumber = document.getElementById('huacal-number');
    huacalNumber.textContent = parseInt(huacalNumber.textContent) + 1;
}

// Obtener referencia al botón "Ver más"
const verMasButton = document.getElementById('verMasButton');

// Obtener referencia al modal
const productModal = new bootstrap.Modal(document.getElementById('productModal'));

// Agregar evento clic al botón "Ver más" para abrir el modal
verMasButton.addEventListener('click', () => {
    productModal.show(); // Mostrar el modal al hacer clic en el botón "Ver más"
});
  
  // Función para agregar un producto a la lista de deseos
  function agregarAListaDeDeseos(nombreProducto) {
    const producto = licoresMexicanos.find(licor => licor.name === nombreProducto);
    console.log('Producto añadido a la lista de deseos:', producto);
  }