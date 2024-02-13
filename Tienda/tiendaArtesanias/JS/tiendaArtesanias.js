


/*Productos de tienda*/
let productosMostrados = 0;
const productosPorPagina = 15;

async function cargarProductos() {
    const response = await fetch('/tienda_en_linea/javascript/productos.csv');
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
    const response = await fetch('/tienda_en_linea/javascript/productos.csv');
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
        <div class="card option_container">
            <div class="options">
                <a class="option1" style="text-decoration: none;" onclick="echarAlHuacal()">
                    Echar al huacal
                </a>
                <a href="" class="option2" style="text-decoration: none;">
                    Comprar
                </a>
            </div>
            <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.imagen_alt}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: ${producto.precio} USD</p>
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
    const response = await fetch('/tienda_en_linea/javascript/productos.csv');
    const csvData = await response.text();
    const productos = parseCSV(csvData);

    productos.slice(productosMostrados, productosMostrados + productosPorPagina).forEach(producto => {
        const productoCard = `
        <div class="col-md-3 producto dark-card">
        <div class="card option_container">
            <div class="options">
                <a class="option1" style="text-decoration: none;" onclick="echarAlHuacal()">
                    Echar al huacal
                </a>
                <a href="" class="option2" style="text-decoration: none;">
                    Comprar
                </a>
            </div>
            <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.imagen_alt}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: ${producto.precio} USD</p>
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


/*Funciones a correr*/

cargarProductos();
