// Datos de ejemplo de ropa mexicana
const ropaArtesanal = [
  {
    name: 'Blusa bordada chedrón',
    img: '/Inicio/images/blusabordada.png',
    description: 'Una elegante blusa chedrón con delicados bordados artesanales que realzan su belleza. Ideal para lucir con estilo y llevar consigo un pedazo de la rica herencia textil mexicana',
    price: 750,
  },
  {
    name: 'Blusa bordada blanca',
    img: './images/blusabordada2.png',
    description: 'Esta blusa blanca resalta por sus intrincados bordados, creando un diseño único y femenino. La combinación de la sencillez del blanco con la complejidad del bordado la convierte en una prenda versátil y elegante.',
    price: 800,
  },
  {
    name: 'Blusa bordada cuello V',
    img: './images/blusabordada3.png',
    description: 'Una blusa de cuello en V con exquisitos bordados que le añaden un toque distintivo. Perfecta para ocasiones informales o para realzar tu estilo casual con un toque de la artesanía mexicana.',
    price: 680,
  },
  {
    name: 'Huipil bordado',
    img: './images/huipil.png',
    description: 'El huipil bordado es una pieza tradicional mexicana que destaca por sus colores vibrantes y bordados detallados. Esta prenda representa la conexión con la cultura indígena y es una obra de arte portátil.',
    price: 870,
  },
  {
    name: 'Vestido bordado',
    img: './images/huipildama.png',
    description: 'Un vestido encantador con bordados que cuentan historias. La fusión de la elegancia y la artesanía mexicana hacen de este vestido una elección única para ocasiones especiales.',
    price: 875,
  },
  {
    name: 'Vestido bordado juvenil',
    img: './images/vestidobordado1.png',
    description: 'Este vestido juvenil destaca por su diseño fresco y moderno, combinado con bordados que reflejan la tradición. Perfecto para eventos casuales con un toque distintivo.',
    price: 858,
  },
  {
    name: 'Camisa bordada infantil',
    img: './images/camisaniño.png',
    description: 'Una camisa infantil adornada con bordados alegres y coloridos. Ideal para vestir a los más pequeños con estilo y resaltar la riqueza de la artesanía mexicana desde temprana edad.',
    price: 680,
  },
  {
    name: 'Huipil infantil',
    img: './images/huipilniña.png',
    description: 'El huipil infantil refleja la dulzura y la autenticidad de la artesanía mexicana. Un atuendo especial para los más pequeños, lleno de detalles que capturan la esencia de la cultura.',
    price: 650,
  },
  {
    name: 'Camisa infantil bordada con botones',
    img: './images/camisaniño2.png',
    description: 'Una encantadora camisa infantil con bordados y botones que añaden un toque juguetón. Perfecta para ocasiones especiales y para que los niños lleven consigo la herencia cultural desde temprana edad.',
    price: 650,
  },
  {
    name: 'Camisa bordada',
    img: './images/camisahombre.png',
    description: 'Una camisa para hombre con detalles bordados que le otorgan un toque único y sofisticado. Perfecta para aquellos que desean incorporar la artesanía mexicana en su vestimenta diaria.',
    price: 765,
  },
  {
    name: 'Camisa bordada',
    img: './images/camisahombre3.png',
    description: 'Otra opción de camisa para hombre, destacando por sus bordados cuidadosamente elaborados. Un equilibrio entre lo moderno y lo tradicional',
    price: 765,
  },
  {
    name: 'Camisa bordada',
    img: './images/camisahombre2.png',
    description: 'Una camisa que fusiona la elegancia con la tradición, gracias a sus bordados detallados. Una elección distinguida para quienes aprecian la artesanía mexicana en su vestimenta.',
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