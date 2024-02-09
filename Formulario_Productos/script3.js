// const fs = require('fs');

// const producto = {
//     idProducto: Math.floor(Math.random() * 1000),
//     idUsuario: req.user.id, //Tendría que estar autenticado
//     nombre: req.body['Nombre de producto'],
//     categoria: req.body['categoria'],
//     descripcion: req.body['descripcion'],
//     artesano: req.body['artesano'],
//     precio: req.body['precio'],
//     lugarFabricacion: req.body['lugar']
// };

// const input = document.getElementById('nombre-producto');
// input.addEventListener('input', (e) => {
//     //console.log(e);
//     console.log(e.target.value);
// });

// const csvContent = 'idProducto,idUsuario,nombre,tipo,descripcion,artesano,precio,lugarFabricacion\n' +
//     productos.map(producto =>
//         `${producto.idProducto},${producto.idUsuario},"${producto.nombre}","${producto.tipo}","${producto.descripcion}","${producto.artesano}",${producto.precio},"${producto.lugarFabricacion}"`
//     ).join('\n');

// fs.writeFileSync('productos.csv', csvContent, 'utf-8');



function save() {
    let producto = {
        idProduct: Math.floor(Math.random() * 1000),
        idUser: Math.floor(Math.random() * 1000),
        nombre: document.getElementById("nombre-producto").value,
        descripcion: document.getElementById("descripcion-producto").value,
        categoria: document.getElementById("categoria").value,
        tipo: document.getElementById("categoria").value,
        artesano: document.getElementById("artesano").value,
        lugar: document.getElementById("lugar").value,
        precio: document.getElementById("precio").value
    };

    // for (let key in producto) {
    //     if (producto[key] === "") {
    //         alert("Campos obligatorio");
    //         return; 
    //     }
    // }

    console.log(JSON.stringify(producto));
    return true;
}