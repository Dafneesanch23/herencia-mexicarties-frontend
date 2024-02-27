const fs = require('fs');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const productos = [
    { id: 1, nombre: 'Huipil Floral', tipo: 'Huipil', artesano: 'Artesano1', imagen: { url: 'url_imagen_1.jpg', alt: 'Huipil Floral' }, precio: 200, lugarFabricacion: 'México' },
    { id: 2, nombre: 'Vestido Étnico', tipo: 'Vestido', artesano: 'Artesano2', imagen: { url: 'url_imagen_2.jpg', alt: 'Vestido Étnico' }, precio: 150, lugarFabricacion: 'México' },
    { id: 3, nombre: 'Alebrije Colorido', tipo: 'Alebrije', artesano: 'Artesano3', imagen: { url: 'url_imagen_3.jpg', alt: 'Alebrije Colorido' }, precio: 80, lugarFabricacion: 'México' },
    { id: 4, nombre: 'Licor de Blueberry 750ml.', tipo: 'Licor', artesano: 'Sr. Joaquin', imagen_url: './img/Licor-de-blueberry.png', imagen_alt: 'Licor de blueberry 750ml', precio: 370, lugar_fabricacion: 'Puebla', descripcion: 'Sorprende a tus invitados preparando espléndidos cócteles con el característico toque agridulce del arándano azul, solo basta combinar con hielo, un poco de vodka y estará listo para brindar en esa ocasión especial. Este licor es un producto elaborado por “Comercializadora Apulco”, a partir de las bayas de mora azul obtenidas en la región Noreste del Estado de Puebla, en la comunidad de Zacapoaxtla, donde  las familias y grupos de trabajo se dedican a su producción y comercialización, lo que ayuda a dinamizar su economía y   aprovechar al máximo este fruto, a través de una bebida de concentración media – baja de alcohol con los sabores intensos que le otorgan un exquisito sabor y un distintivo aroma de la fruta, además de es conocido por ser alto en antioxidantes y bueno para la salud. Gracias a los conocimientos tradicionales  del Sr Joaquín y de los productores de la sierra Nahua, es posible elaborar esta bebida 100% natural, orgánica y artesanal. ' },
    { id: 5, nombre: 'Licor de Limón 750ml.', tipo: 'Licor', artesano: 'Sr. Joaquin', imagen_url: './img/Licor-de-limon.jpg', imagen_alt: 'Licor de Limón 750ml', precio: 372, lugar_fabricacion: 'Puebla', descripcion: 'Además de refrescar tu paladar, el limón es utilizado en beneficio del cuerpo, gracias a sus poderes digestivos, una copa al final de la comida te ayudará a tener mejor digestión. Comercializadora Apulco presenta un licor 100% artesanal y natural de limón, hecho de sus conocimientos tradicionales con aguardiente de caña y miel de azúcar, obteniendo un sabor suave y natural. Su cuidadosa elaboración es gracias a las manos expertas de los artesanos de Apulco como el Sr. Joaquín, que han dedicado años de trabajo y perfeccionamiento en su técnica para la obtención de una bebida para el goce que conserve las propiedades del limón, haciéndola ideal para combatir el malestar intestinal y la hinchazón, por lo que un trago de este licor después de la comida cae de maravilla. “Comercializadora Apulco” es de un pueblo indígena conformado por Nahuas, quienes se han desarrollado como productores artesanales dentro de las Sierra Norte de Puebla en el municipio de Zacapoaxtla.' },
    { id: 6, nombre: 'Vino artesanal de Maracuyá 750 ml.', tipo: 'Licor', artesano: 'Sr. Joaquin', imagen_url: './img/Licor-de-maracuya.png', imagen_alt: 'Licor de Maracuya 750ml', precio: 390, lugar_fabricacion: 'Puebla', descripcion: 'Si buscas nuevas experiencias de sabores únicos y refrescantes, los licores de Apulco son la opción ideal, deleita su sabor acompañado de un dulce postre o con frutos frescos como el mango y la naranja, incluso, si lo tomas solo, su sabor te sorprenderá, pues el sabor y olor agridulce resalta con tan solo abrirlo. La elaboración del licor de frutas ha sido fuente de trabajo, desarrollo y tradición en la Región Noreste del Estado de Puebla, en el Municipio de Zacapoaxtla, allí, los artesanos de la comunidad Nahua como el Sr. Joaquín de “Comercializadora Apulco” elabora esta bebida tradicional a base de ingredientes naturales como aguardiente de caña, maracuyá y es endulzada con miel de azúcar. Como no disfrutar la bebida tropical de Maracuya, símbolo de tradición y progreso para las familias de Zacapoaxtla. Conoce más del Emprendimiento “Comercializadora Apulco” y sus bebidas.' },

];

for (let i = 4; i <= 25; i++) {
    const tipoProductos = ['Huipil', 'Vestido', 'Alebrije', 'Guayabera', 'Licor', 'Vino'];
    const tipo = tipoProductos[getRandomNumber(0, 3)];

    const nuevoProducto = {
        id: i,
        nombre: `${tipo} ${i}`,
        tipo: tipo,
        artesano: `Artesano${i}`,
        imagen: { url: `url_imagen_${i}.jpg`, alt: `${tipo} ${i}` },
        precio: getRandomNumber(50, 300),
        lugarFabricacion: 'Puebla'
    };

    productos.push(nuevoProducto);
}

const csvContent = 'id,nombre,tipo,artesano,imagen_url,imagen_alt,precio,lugar_fabricacion,descripcion\n' +
    productos.map(producto =>
        `${producto.id},"${producto.nombre}","${producto.tipo}","${producto.artesano}","${producto.imagen.url}","${producto.imagen.alt}",${producto.precio},"${producto.lugarFabricacion}"`
    ).join('\n');

fs.writeFileSync('productos.csv', csvContent, 'utf-8');

console.log('Archivo CSV generado exitosamente.');