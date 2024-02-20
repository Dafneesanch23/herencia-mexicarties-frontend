// Datos de ejemplo de ropa mexicana
const ropaArtesanal = [
  {
    name: 'Blusa bordada chedrón',
    img: '/Inicio/images/blusabordada.png',
    description: '',
    price: 750,
  },
  {
    name: 'Blusa bordada blanca',
    img: './images/blusabordada2.png',
    description: '',
    price: 800,
  },
  {
    name: 'Blusa bordada cuello V',
    img: './images/blusabordada3.png',
    description: '',
    price: 680,
  },
  {
    name: 'Huipil bordado',
    img: './images/huipil.png',
    description: '',
    price: 870,
  },
  {
    name: 'Vestido bordado',
    img: './images/huipildama.png',
    description: '',
    price: 875,
  },
  {
    name: 'Vestido bordado juvenil',
    img: './images/vestidobordado1.png',
    description: '',
    price: 858,
  },
  {
    name: 'Camisa bordada infantil',
    img: './images/camisaniño.png',
    description: '',
    price: 680,
  },
  {
    name: 'Huipil infantil',
    img: './images/huipilniña.png',
    description: '',
    price: 650,
  },
  {
    name: 'Camisa infantil bordada con botones',
    img: './images/camisaniño2.png',
    description: '',
    price: 650,
  },
  {
    name: 'Camisa bordada',
    img: './images/camisahombre.png',
    description: '',
    price: 765,
  },
  {
    name: 'Camisa bordada',
    img: './images/camisahombre3.png',
    description: '',
    price: 765,
  },
  {
    name: 'Camisa bordada',
    img: './images/camisahombre2.png',
    description: '',
    price: 765,
  }

    // Agrega más ropa
  ];
  
  // Función para mostrar la ropa artesanal mexicana en miniaturas
  function mostrarMiniaturasRopaArtesanal() {
    const grid = document.getElementById('liquor-grid');
  
    ropaArtesanal.forEach((ropa, index) => {
      const productThumbnail = document.createElement('div');
      productThumbnail.classList.add('product-thumbnail');
  
      // Crear la imagen
      const image = document.createElement('img');
      image.src = ropa.img;
      image.alt = ropa.name;
      image.addEventListener('click', () => mostrarDetallesProducto(licor));
  
      // Crear el texto "Ver más"
      const overlayText = document.createElement('div');
      overlayText.classList.add('overlay-text');
      overlayText.textContent = 'Ver más';
  
      // Agregar evento click al texto "Ver más"
      overlayText.addEventListener('click', () => mostrarDetallesProducto(ropa));
  
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
  mostrarMiniaturasRopaArtesanal();

  // Función para agregar un producto a la lista de deseos
  function echarAlHuacal(nombreProducto) {
    const producto = ropaArtesanal.find(ropa=> ropa.name === nombreProducto);
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
    const producto = ropaArtesanal.find(ropa => ropa.name === nombreProducto);
    console.log('Producto añadido a la lista de deseos:', producto);
  }