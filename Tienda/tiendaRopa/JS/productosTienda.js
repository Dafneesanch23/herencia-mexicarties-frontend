const fs = require('fs');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const productos = [
    { id: 1, nombre: 'Huipil Floral', tipo: 'Huipil', artesano: 'Artesano1', imagen: { url: 'url_imagen_1.jpg', alt: 'Huipil Floral' }, precio: 200, lugarFabricacion: 'México', descripcion: 'Hermoso huipil bordado artesanal' },
    { id: 2, nombre: 'Vestido Étnico', tipo: 'Vestido', artesano: 'Artesano2', imagen: { url: 'url_imagen_2.jpg', alt: 'Vestido Étnico' }, precio: 150, lugarFabricacion: 'México', descripcion: 'Hermoso vestido etnico bordado' },
    { id: 3, nombre: 'Alebrije Colorido', tipo: 'Alebrije', artesano: 'Artesano3', imagen: { url: 'url_imagen_3.jpg', alt: 'Alebrije Colorido' }, precio: 80, lugarFabricacion: 'México', descripcion: 'Alebrije colorido tradicional mexicano' },
];

for (let i = 4; i <= 25; i++) {
    const tipoProductos = ['Huipil', 'Vestido', 'Alebrije', 'Guayabera'];
    const tipo = tipoProductos[getRandomNumber(0, 3)];

    const nuevoProducto = {
        id: i,
        nombre: `${tipo} ${i}`,
        tipo: tipo,
        artesano: `Artesano${i}`,
        imagen: { url: `url_imagen_${i}.jpg`, alt: `${tipo} ${i}` },
        precio: getRandomNumber(50, 300),
        lugarFabricacion: 'México',
        descripcion: `descripcion del producto ${i}`,
        talla: '',
    };

    productos.push(nuevoProducto);
}
const csvContent = 'id,nombre,tipo,artesano,imagen_url,imagen_alt,precio,lugar_fabricacion,descripcion,talla\n' +
    productos.map(producto =>
        `${producto.id},"${producto.nombre}","${producto.tipo}","${producto.artesano}","${producto.imagen.url}","${producto.imagen.alt}",${producto.precio},"${producto.lugarFabricacion}","${producto.descripcion}"`
    ).join('\n');

fs.writeFileSync('productosTienda.csv', csvContent, 'utf-8');

console.log('Archivo CSV generado exitosamente.');
