function mostrarProductosHuacal() {
    const storedProducts = JSON.parse(localStorage.getItem('storedProducts')) || [];
    const huacalContainer = document.querySelector('.contenido-productos');
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
                                <button class="btn btn-outline-secondary justify-content-center incrementar-disminuir"> - </button>
                                <input type="text" value="1" class="form-control">
                                <button class="btn btn-outline-secondary justify-content-center incrementar-disminuir"> + </button>
                            </div>
                            <p class="price mb-2 mb-sm-0">$${producto.precio} USD</p>
                        </div>
                        <div class="mt-auto">
                            <div class="d-flex justify-content-between mt-2">
                                <button class="btn btn-opcion w-100 me-1 justify-content-center">Sacar del huacal</button>
                                <button class="btn btn-opcion w-100 ms-1 justify-content-center">Guardar para después</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        huacalContainer.innerHTML += productoCard;
    });
}

window.onload = function () {
    const huacalNumber = localStorage.getItem('huacalNumber');
    if (huacalNumber !== null) {
        document.getElementById('huacal-number').innerText = huacalNumber;
    }
}

mostrarProductosHuacal()