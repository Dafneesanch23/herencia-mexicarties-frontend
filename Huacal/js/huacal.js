function mostrarProductosHuacal() {
    const storedProducts = JSON.parse(localStorage.getItem('storedProducts')) || [];
    const huacalContainer = document.querySelector('.contenido-productos');
    let totalPrecio = 0;
    huacalContainer.innerHTML = '';

    storedProducts.forEach(producto => {
        const productoCard = `
        <div class="card product-card mb-3">
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <img src="../Tienda/tiendaArtesanias/${producto.imagen_url}" class="img-fluid rounded-start" alt="${producto.nombre}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div class="d-flex flex-column flex-sm-row align-items-center justify-content-between">
                            <div class="card-info">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</p>
                                <p class="card-text">Artesano ${producto.artesano}</p>
                            </div>
                            <div class="quantity-selector d-flex flex-row align-items-center">
                                <button class="btn btn-outline-secondary justify-content-center incrementar-disminuir" onclick="disminuirCantidad(this.nextElementSibling)"> - </button>
                                <input type="text" value="1" class="form-control">
                                <button class="btn btn-outline-secondary justify-content-center incrementar-disminuir" onclick="aumentarCantidad(this.previousElementSibling)"> + </button>
                            </div>
                            <p class="price mb-2 mb-sm-0">$${producto.precio} USD</p>
                        </div>
                        <div class="mt-auto">
                            <div class="d-flex justify-content-between mt-2">
                                <button class="btn btn-opcion w-100 me-1 justify-content-center" onclick="sacarDelHuacal(this)">Sacar del huacal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        huacalContainer.innerHTML += productoCard;
        totalPrecio += parseFloat(producto.precio);
    });
    localStorage.setItem('totalPrecio', totalPrecio.toFixed(2));
    document.querySelector('.productos-precio').textContent = `$ ${totalPrecio} MXN`;
    totalCompra = totalPrecio + 200;
    document.querySelector('.total-de-compra').textContent = `$ ${totalCompra} MXN`;
}

function disminuirCantidad(input) {
    var cantidad = parseInt(input.value);
    if (cantidad > 1) {
        cantidad--;
        input.value = cantidad;
        var cardBody = input.closest('.card-body');
        var precio = parseFloat(cardBody.querySelector('.price').innerText.replace('$', '').replace(' USD', ''));
        var cantidad = parseInt(input.value);
        var total = precio / (cantidad + 1) * cantidad;
        cardBody.querySelector('.price').innerText = '$' + total.toFixed(2) + ' USD';
        var huacalNumber = document.getElementById('huacal-number');
        var currentCount = parseInt(huacalNumber.innerText);
        var newCount = currentCount - 1;
        huacalNumber.innerText = newCount;
        localStorage.setItem('huacalNumber', newCount);
        document.querySelector('.productos-resumen').textContent = `Productos (${newCount})`;
        actualizarPrecioTotal();
    }
}

function aumentarCantidad(input) {
    var cantidad = parseInt(input.value);
    cantidad++;
    input.value = cantidad;
    var cardBody = input.closest('.card-body');
    var precio = parseFloat(cardBody.querySelector('.price').innerText.replace('$', '').replace(' USD', ''));
    var cantidad = parseInt(input.value);
    var total = precio / (cantidad - 1) * cantidad;
    cardBody.querySelector('.price').innerText = '$' + total.toFixed(2) + ' USD';
    var huacalNumber = document.getElementById('huacal-number');
    var currentCount = parseInt(huacalNumber.innerText);
    var newCount = currentCount + 1;
    huacalNumber.innerText = newCount;
    localStorage.setItem('huacalNumber', newCount);
    document.querySelector('.productos-resumen').textContent = `Productos (${newCount})`;
    actualizarPrecioTotal();
}

function actualizarPrecioTotal() {
    const precios = document.querySelectorAll('.price');
    let totalPrecio = 0;
    precios.forEach(precio => {
        totalPrecio += parseFloat(precio.innerText.replace('$', '').replace(' USD', ''));
    });
    localStorage.setItem('totalPrecio', totalPrecio.toFixed(2));
    document.querySelector('.productos-precio').textContent = `$ ${totalPrecio} MXN`;
    totalCompra = totalPrecio + 200;
    document.querySelector('.total-de-compra').textContent = `$ ${totalCompra} MXN`;
}

function sacarDelHuacal(button) {
    var huacalNumber = document.getElementById('huacal-number');
    var currentCount = parseInt(huacalNumber.innerText);
    var newCount = currentCount - 1;
    huacalNumber.innerText = newCount;

    localStorage.setItem('huacalNumber', newCount);

    var card = button.closest('.product-card');
    var productName = card.querySelector('.card-title').innerText;
    var storedProducts = JSON.parse(localStorage.getItem('storedProducts')) || [];
    storedProducts = storedProducts.filter(product => product.nombre !== productName);
    localStorage.setItem('storedProducts', JSON.stringify(storedProducts));
    card.remove();
    actualizarPrecioTotal();
}

mostrarProductosHuacal()