


/*Productos de tienda*/
let productosMostrados = 0;
const productosPorPagina = 15;

async function cargarProductos() {
    const response = await fetch('../../../Tienda/tiendaArtesanias/JS/productos.csv');
    const csvData = await response.text();

    const productos = parseCSV(csvData);

    mostrarProductos(productos);
}

function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');

    const productos = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(',');
        const producto = {};

        for (let j = 0; j < headers.length; j++) {
            producto[headers[j]] = currentLine[j];
        }

        productos.push(producto);
    }

    return productos;
}

//filtrar productos
async function filtrarProductos() {
    const searchBar = document.getElementById('searchBar');
    const filtro = searchBar.value.toLowerCase();
    const response = await fetch('../../../Tienda/tiendaArtesanias/JS/productos.csv');
    const csvData = await response.text();
    const productos = parseCSV(csvData);

    const productosFiltrados = productos.filter(producto =>
        producto.lugar_fabricacion.toLowerCase().includes(filtro) ||
        producto.tipo.toLowerCase().includes(filtro) ||
        producto.artesano.toLowerCase().includes(filtro)
    );

    mostrarProductos(productosFiltrados);
}

//mostrar productos
function mostrarProductos(productosAMostrar) {
    const productosContainer = document.getElementById('productosContainer');
    productosContainer.innerHTML = '';
    productosMostrados = 0;

    productosAMostrar.slice(0, productosPorPagina).forEach(producto => {
        const productoCard = `
    <div class="col-md-3 producto dark-card">
        <div class="card option_container" id="${producto.id}" data-producto='${JSON.stringify(producto)}' onclick="mostrarDetallesProducto.call(this)"">
            <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: ${producto.precio} USD</p>
            </div>
            <div class="overlay-text" onclick="mostrarDetallesProducto()">
                Ver más
            </div>
        </div>
    </div>
    `;

        productosContainer.innerHTML += productoCard;
        productosMostrados++;
    });

    const btnMostrarMas = document.querySelector('.btn-mostrar-mas');
    btnMostrarMas.style.display = productosAMostrar.length > productosMostrados ? 'block' : 'none';
}

async function mostrarMasProductos() {
    const productosContainer = document.getElementById('productosContainer');
    const response = await fetch('../../../Tienda/tiendaArtesanias/JS/productos.csv');
    const csvData = await response.text();
    const productos = parseCSV(csvData);

    productos.slice(productosMostrados, productosMostrados + productosPorPagina).forEach(producto => {
        const productoCard = `
        <div class="col-md-3 producto dark-card">
        <div class="card option_container" id="${producto.id}" data-producto='${JSON.stringify(producto)}' onclick="mostrarDetallesProducto.call(this)">
            <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: ${producto.precio} USD</p>
            </div>
            <div class="overlay-text" onclick="mostrarDetallesProducto()">
                Ver más
            </div>
        </div>
    </div>
    `;

        productosContainer.innerHTML += productoCard;
        productosMostrados++;
    });

    const btnMostrarMas = document.querySelector('.btn-mostrar-mas');
    btnMostrarMas.style.display = productos.length > productosMostrados ? 'block' : 'none';
}

function echarAlHuacal() {
    var huacalNumber = document.getElementById('huacal-number');
    var currentCount = parseInt(huacalNumber.innerText);
    var newCount = currentCount + 1;
    huacalNumber.innerText = newCount;
}

function mostrarDetallesProducto() {
    const productoString = this.getAttribute('data-producto');
    const producto = JSON.parse(productoString);
    const modalBody = document.getElementById('productModalBody');
    modalBody.innerHTML = `
      <h2>${producto.nombre}</h2>
      <img src="${producto.imagen_url}" alt="${producto.nombre}">
      <p>${producto.descripcion}</p>
      <p>Precio: $${producto.precio}</p>
      <button class="btn btn-echar-huacal" onclick="echarAlHuacal()">Echar al Huacal</button>
      <button class="btn btn-comprar">Comprar</button>
    `;

    $('#productModal').modal('show');
}

/*Funciones a correr*/

cargarProductos();
