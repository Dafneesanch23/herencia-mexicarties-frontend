// Datos de ejemplo de licores artesanales mexicanos
const licoresMexicanos = [
    {
      name: 'Licor de café 750ml.',
      img: '/Tienda/Licores/Img/Licor-de-cafe.png',
      description: 'Un trago de licor de café es para disfrutar como aperitivo o después de la comida, con los amigos y la familia, en un día cualquiera, en una fiesta o celebración importante como se guste tomar, el café guarda los recuerdos en el alma. El café en infusión es exquisito sea frío o caliente, pero en licor también tiene su encanto, más cuando se realiza con un proceso artesanal y con ingredientes naturales, haciendo que conserve sus propiedades. Esto es lo que hace el Sr. Joaquín de “Comercializadora Apulco” quienes son un grupo de productores artesanales integrantes de una de las comunidades Nahuas de Zacapoaxtla, en la Sierra Norte de Puebla. Para la elaboración de sus licores artesanales, utilizan frutos de la región, como el café, el cual es uno de los más reconocidos a nivel nacional por su calidad y sabor; al que le añada el licor natural de caña, así como la miel de azúcar, obteniendo una lírica de sabor única expresada en esta bebida. Tomarlo se puede ya sea como rutina, en fines de semana o en festividades ayuda a la digestión.',
      price: 370,
    },
    {
      name: 'Vino de granada',
      img: '/Tienda/Licores/Img/Vino-de-granada.jpg',
      description: 'Si quieres disfrutar una deliciosa bebida que además aporte beneficios para la salud, el vino de Fabech es la opción ideal. “Fabech” para su vino, no vió uvas, sino que este vino es elaborado a partir de granos de granada roja como una alternativa deliciosa para elaborar esta bebida, que al igual que los vinos tradicionales aporta algunos beneficios a la salud gracias a los antioxidantes de la granda. Esta bebida con la graduación de vino tinto es 100% natural elaborada por las manos de productores artesanos como el Sr. Joel, quien en conjunto de los integrantes de “Fabech”, no solo son un grupo de trabajo, sino una comunidad identitaria del pueblo indígena Hñahñu, en Pueblo de Cerro colorado, Chilcuautla, Hidalgo, que a través de su trabajo son partícipes de los cambios sociales y económicos de la comunidad.',
      price: 170,
    },
    {
        name: 'Yolixpa 750 ml.',
        img: '/Tienda/Licores/Img/Yolixpa.png',
        description: 'La presión del día a día se muestra en algo más que simple estrés, las defensas de nuestro cuerpo bajan y el sistema inmunológico tampoco está al 100, podemos sentirnos más cansados y estamos propensos a enfermarnos, ayuda mejor tu salud y disfruta con la bebida tradicional milenaria. Licor Yolixpa de “Comercializadora Apulco”, es una infusión de la tradicional herbolaria indígena, propiamente de la comunidad Nahua de la sierra Nororiental del Estado de Zacapoaxtla, Puebla. Preparada por las manos del artesano Joaquín; al macerar una mezcla de 23 de hierbas aromáticas en aguardiente de caña, se obtiene la bebida que alegra la vida, sana el cuerpo y corazón, pues es fuente para aliviar las penas de amor, aliviar la tristeza y enfermedades respiratorias como la gripe y la bronquitis e incluso sirve como un digestivo. Al adquirir un licor artesanal de Yolixpa no sólo alivias los pesares de cuerpo y alma, también, los pesares económicos de los productores artesanales como el sr. Joaquín, ya que les permites generar ingresos para su familia y la de los colaboradores.',
        price: 372,
      },
      {
        name: 'Licor de Blueberry 750ml.',
        img: '/Tienda/Licores/Img/Licor-de-blueberry.png',
        description: 'Sorprende a tus invitados preparando espléndidos cócteles con el característico toque agridulce del arándano azul, solo basta combinar con hielo, un poco de vodka y estará listo para brindar en esa ocasión especial. Este licor es un producto elaborado por “Comercializadora Apulco”, a partir de las bayas de mora azul obtenidas en la región Noreste del Estado de Puebla, en la comunidad de Zacapoaxtla, donde  las familias y grupos de trabajo se dedican a su producción y comercialización, lo que ayuda a dinamizar su economía y   aprovechar al máximo este fruto, a través de una bebida de concentración media – baja de alcohol con los sabores intensos que le otorgan un exquisito sabor y un distintivo aroma de la fruta, además de es conocido por ser alto en antioxidantes y bueno para la salud. Gracias a los conocimientos tradicionales  del Sr Joaquín y de los productores de la sierra Nahua, es posible elaborar esta bebida 100% natural, orgánica y artesanal. ',
        price: 371,
      },
    {
      name: 'Licor de Limón 750ml.',
      img: '/Tienda/Licores/Img/Licor-de-limon.jpg',
      description: 'Además de refrescar tu paladar, el limón es utilizado en beneficio del cuerpo, gracias a sus poderes digestivos, una copa al final de la comida te ayudará a tener mejor digestión. Comercializadora Apulco presenta un licor 100% artesanal y natural de limón, hecho de sus conocimientos tradicionales con aguardiente de caña y miel de azúcar, obteniendo un sabor suave y natural. Su cuidadosa elaboración es gracias a las manos expertas de los artesanos de Apulco como el Sr. Joaquín, que han dedicado años de trabajo y perfeccionamiento en su técnica para la obtención de una bebida para el goce que conserve las propiedades del limón, haciéndola ideal para combatir el malestar intestinal y la hinchazón, por lo que un trago de este licor después de la comida cae de maravilla. “Comercializadora Apulco” es de un pueblo indígena conformado por Nahuas, quienes se han desarrollado como productores artesanales dentro de las Sierra Norte de Puebla en el municipio de Zacapoaxtla.',
      price: 371,
    },
    {
      name: 'Licor artesanal de Maracuyá 750 ml.',
      img: '/Tienda/Licores/Img/licor-de-maracuya.png',
      description: 'Si buscas nuevas experiencias de sabores únicos y refrescantes, los licores de Apulco son la opción ideal, deleita su sabor acompañado de un dulce postre o con frutos frescos como el mango y la naranja, incluso, si lo tomas solo, su sabor te sorprenderá, pues el sabor y olor agridulce resalta con tan solo abrirlo. La elaboración del licor de frutas ha sido fuente de trabajo, desarrollo y tradición en la Región Noreste del Estado de Puebla, en el Municipio de Zacapoaxtla, allí, los artesanos de la comunidad Nahua como el Sr. Joaquín de “Comercializadora Apulco” elabora esta bebida tradicional a base de ingredientes naturales como aguardiente de caña, maracuyá y es endulzada con miel de azúcar. Como no disfrutar la bebida tropical de Maracuya, símbolo de tradición y progreso para las familias de Zacapoaxtla. Conoce más del Emprendimiento “Comercializadora Apulco” y sus bebidas',
      price: 372,
    },
    {
      name: 'Vino seco de San José de la Zorra 750 ml',
      img: '/Tienda/Licores/Img/vino-tinto.png',
      description: 'Es así como una bebida rica y tradicional, a la mente me VINO. Directo del Viñedo San José de la Zorra ubicado en Baja California, el Sr. Rito, integrante de “los Kumiai”, uno de los pueblos indígenas más antiguos de la región, preservan sus conocimientos tradicionales aplicándolos al manejo de los racimos de la uva cabernet Sauvignon para elaborar esta bebida. El vino artesanal representa para ellos una alternativa socio productiva y ecológica para elaborar una bebida con propiedades saludables y accesibles que a la vez que les permite generar ingresos a las familias kumiai que se involucran en esta actividad. Te invitamos a probar y conocer el delicioso vino de San José de la Zorra, como dice Bernado Piuma “El que al mundo vino y no toma vino, ¿A qué vino?”.',
      price: 580,
    },
    {
      name: 'Vino de Naranja 750 ml. Casa Stivalet',
      img: '/Tienda/Licores/Img/stivalet-vinodenaranja.jpg',
      description: 'Producto 100% natural elaborado artesanalmente por el proceso de fermentación del jugo de los cítricos, debe por lo menos tener un mínimo de 3 años de añejamiento para llegar a su mesa, adquiriendo con el tiempo más cuerpo y mejor sabor, únicos en su tipo. Actualmente el de naranja tiene 9 años de añejamiento. Es un vino dulce que se utiliza como aperitivo y digestivo y para elaborar guisos en carnes, ensaladas y postres. El vino de naranja se compara en sabor con un Grand Marnier.  Este producto no tiene caducidad, una vez abierto puede dejarse en un lugar fresco, bien sellado.  Frío es excelente.',
      price: 320,
    },
    {
      name: 'Vino de Toronja 750 ml. Casa Stivalet',
      img: '/Tienda/Licores/Img/stivalet-vinodetoronja.jpg',
      description: 'Producto 100% natural elaborado artesanalmente por el proceso de fermentación del jugo de los cítricos, debe por lo menos tener un mínimo de 3 años de añejamiento para llegar a su mesa, adquiriendo con el tiempo más cuerpo y mejor sabor, únicos en su tipo. Actualmente el de toronja tiene 11 años de añejamiento. Es un vino dulce que se utiliza como aperitivo y digestivo y para elaborar guisos en carnes, ensaladas y postres. El vino de toronja es único en su tipo un poco seco debido al briz de la fruta.  Este producto no tiene caducidad, una vez abierto puede dejarse en un lugar fresco, bien sellado.  Frío es excelente.',
      price: 320,
    },
    {
      name: 'Licor de Chile Ancho Reyes 750ml',
      img: '/Tienda/Licores/Img/Ancho-reyes.png',
      description: 'Este tradicional licor de chile exalta las bebidas y cocteles con un toque mexicano dulce y picante. Una tradición de sabor que nace en Puebla después de la revolución de México. Los Licores Ancho Reyes Original y Ancho Reyes Verde son elaborados de manera artesanal con chiles originarios de Puebla cultivados en el fértil suelo volcánico del territorio poblano durante generaciones y utilizando técnicas tradicionales y ancestrales para preparar los menjurjes que los artesanos de Puebla en la década de 1920 dominaban a la perfección.',
      price: 335,
    },
    {
      name: 'Licor de Damiana Guaycura 750ml',
      img: '/Tienda/Licores/Img/Licor-de-damiana.png',
      description: 'Un licor de Damiana (Turnera diffusa) una hierba silvestre nativa de México y Centroamérica. La botella de vidrio posee un diseño en la semejanza de una mujer embarazada. Originario de México del estado de Baja California Sur, eran los originarios Guaycura quienes lo elaboraban y bebían durante ceremonias, con la firme creencia de que poseía poderes afrodisiacos, además de tener gran efecto digestivo y relajante. Guaycura es un licor que al presentarse en el paladar es fácil distinguir una explosión de sabores herbáceos un tanto dulces, agradable para aquellos que buscan una experiencia más allá de lo tradicional.',
      price: 409,
    },
    {
      name: 'licor de elote Nixta 750ml',
      img: '/Tienda/Licores/Img/Pina-Colada-Nixta.jpg',
      description: 'El licor de elote Nixta es una bebida 100% mexicana que es distinguida por muchos por tener un sabor a tamal de elote. Se puede disfrutar solo, en las rocas, o en compañía de un carajillo por ejemplo. Nixta es una forma original y única de capturar la esencia del elote en un licor inspirado en el alimento más popular de México cuyo sabor distintivo es reconocido en todo el mundo. Una forma muy original de disfrutar este ingrediente en un licor especial.',
      price: 371,
    },
    {
      name: 'Ginebra EV Humulus Lupulus Edición Limitada',
      img: '/Tienda/Licores/Img/Ginebra humulua.jpg',
      description: 'Gin Cannabis EV se elabora en pequeños lotes. Cannabis sativa, es una especie de la familia Cannabacea originaria de Asia. En esta Ginebra Mexicana Cannabis se destila una mezcla aromática de botánicos cítricos, herbales, florales y especiados para crear acordes complejos que brindan un sabor refrescante y único con todos los compuestos aromáticos del Cannabis. Se puede mezclar este gin para dar un toque refrescante a los cócteles. La combinación perfecta es con tónica premium y cáscara de limón.',
      price: 1399,
    },
    {
      name: 'Siempre vermut rojo 750ml',
      img: '/Tienda/Licores/Img/siempre-vermut.png',
      description: 'Una creación de Carlos Pellicer, quien, después de varios experimentos logró crear Siempre, un vermut rojo artesanal que es uno de los pocos vermuts mexicanos en el mercado nacional. Sólo se producen al rededor de 120 botellas al mes y se vende en lugares muy especiales como Herencia Mexicarties. Al ser artesanal, no se utilizan concentrados o esencias, más bien todos los sabores que tiene provienen de las hierbas. El vermut es muy famoso en Italia y en España porque prepara al estomago para comer',
      price: 599,
    },
    {
      name: 'Aperitivo Amaro VILLANUEVA',
      img: '/Tienda/Licores/Img/aperitivo-villanueva.png',
      description: 'Villanueva Aperitivo Amaro es una alternativa sin alcohol que rinde homenaje a los aperitivos tradicionales italianos pero con ingredientes botánicos mexicanos. Es un elixir sin alcohol que se inspira en la rica tradición de los aperitivos amargos italianos y enriquece su sabor con ingredientes botánicos endémicos de México, ofreciendo lo mejor de ambos mundos. Este aperitivo sin alcohol se crea con una cuidadosa selección de hierbas, especias, frutas y raíces; y se caracteriza por su aroma cítrico intenso que evoca la esencia del clásico aperitivo amargo, con toques florales, complejidad herbal y un fondo especiado. Su sabor, por su parte, ofrece la misma intensidad que esperarías de un auténtico aperitivo, pero sin los efectos del alcohol.',
      price: 399,
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