/*Header*/

const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value) {
    localStorage.setItem('darkmode', value);
}

function toggleDarkMode() {
    document.body.classList.toggle("darkmode");
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load() {
    const darkmode = localStorage.getItem('darkmode');

    //if the dark mode was never activated
    if (!darkmode) {
        store(false);
        icon.classList.add('fa-sun');
    } else if (darkmode == 'true') { //if the dark mode is activated
        body.classList.add('darkmode');
        icon.classList.add('fa-moon');
    } else if (darkmode == 'false') { //if the dark mode exists but is disabled
        icon.classList.add('fa-sun');
    }
}

btn.addEventListener('click', () => {

    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    //save true or false
    store(body.classList.contains('darkmode'));

    if (body.classList.contains('darkmode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500)
})

/****************************/
/* Boton para cambiar idioma*/
/****************************/

const languageButton = document.getElementById('toggleLanguage');
const languageFlag = document.getElementById('languageFlag');

function toggleFlag() {
    if (languageFlag.src.includes('mexico.png')) {
        languageFlag.src = '../Imagenes/eu.png';
        languageFlag.alt = 'Bandera de Estados Unidos';
    } else {
        languageFlag.src = '../Imagenes/mexico.png';
        languageFlag.alt = 'Bandera de México';
    }
}

languageButton.addEventListener('click', (e) => {
    e.preventDefault();
    languageFlag.classList.add('hidden');
    setTimeout(() => {
        toggleFlag();
        languageFlag.classList.remove('hidden');
    }, 100);
});


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

/* Script para el footer*/
document.querySelector('.descripcion-section img').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*Funciones a correr*/

cargarProductos();
load();
