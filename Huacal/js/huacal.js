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
                    <img src="../Tienda/tiendaArtesanias/${producto.imagen_url}" class="img-fluid" style="border-radius: 0.9rem;" alt="${producto.nombre}">
                </div>
                <div class="col-md-8 ">
                    <div class="card-body">
                        <div class="d-flex flex-column flex-sm-row align-items-center justify-content-between">
                            <div class="card-info">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Artesano ${producto.artesano}</p>
                            </div>
                            <div class="quantity-selector d-flex flex-row align-items-center">
                                <button class="btn  justify-content-center incrementar-disminuir" onclick="disminuirCantidad(this.nextElementSibling)"> - </button>
                                <input type="text" value="1" class="count-form form-control">
                                <button class="btn  justify-content-center incrementar-disminuir" onclick="aumentarCantidad(this.previousElementSibling)"> + </button>
                            </div>
                            <p class="price mb-2 mb-sm-0">$${producto.precio} MXN</p>
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
        var precio = parseFloat(cardBody.querySelector('.price').innerText.replace('$', '').replace(' MXN', ''));
        var cantidad = parseInt(input.value);
        var total = precio / (cantidad + 1) * cantidad;
        cardBody.querySelector('.price').innerText = '$' + total.toFixed(2) + ' MXN';
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
    var precio = parseFloat(cardBody.querySelector('.price').innerText.replace('$', '').replace(' MXN', ''));
    var cantidad = parseInt(input.value);
    var total = precio / (cantidad - 1) * cantidad;
    cardBody.querySelector('.price').innerText = '$' + total.toFixed(2) + ' MXN';
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
        totalPrecio += parseFloat(precio.innerText.replace('$', '').replace(' MXN', ''));
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

function continuarCompra(){
    
    let contenedorDirec = document.getElementById("direccion-entrega");

    let cardDirection = document.createElement("div");
    cardDirection.classList.add("direccion-container");

    const cardContainer = document.querySelector('.direccion-entrega');
    cardContainer.innerHTML = '';

    let directionForm = `
    
<div class="card">
    <div class="card-body">
        <form  id="formulario-direccion" action="" method="post">
            <div class="form-group">
                <div class="address-title">
                    <h3>DIRECCIÓN DE ENVÍO</h3>
                </div>
                 <input type="text" class="form-control" id="name_user" name="name_user"
                placeholder="Nombre completo de quien recibe" autocomplete="off" required></input>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="address" id="address"
                placeholder="Calle y colonia" autocomplete="off" required></input>
             </div>
             <div class="form-group">
                <input type="text" class="form-control" name="num_ext" id="num_ext"
                placeholder="Número exterior" autocomplete="off" required></input>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="num_int" id="num_int"
                placeholder="Número interior (Si aplica)" autocomplete="off"></input>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="city" name="city"
                placeholder="Ciudad" autocomplete="off" required></input>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="country" name="country"
                placeholder="País" autocomplete="off" required></input>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="zip_code" name="zip_code"
                placeholder="C.P." autocomplete="off" required></input>
            </div>
            <div class="container text-center mb-3">
                <h3>MÉTODOS DE PAGO</h3>
            </div>
                <form id="formulario-pago" action="" method="post">
                    <div class="form-group row justify-content-center">
                        <div class="col-auto">
                            <div class="form-check form-check-inline">                            
                                <input type="radio" id="tarjeta_credito" name="metodo_pago" value="1">
                                <label for="tarjeta_credito">Tarjeta de crédito</label><br>                            
                            </div>
                        </div>    
                    <div class="col-auto">
                        <div class="form-check form-check-inline">                              
                            <input type="radio" id="paypal" name="metodo_pago" value="2">
                            <label for="paypal">Paypal</label><br>                            
                        </div>
                    </div>
                        <div class="col-auto">
                            <div class="form-check form-check-inline">                           
                                <input type="radio" id="tarjeta_debito" name="metodo_pago" value="3">
                                <label for="tarjeta_debito">Tarjeta de débito</label><br>                            
                            </div>                            
                        </div>
                    </div>
                        <div class="text-center">
                        <img class="img-pagos img-fluid" src="../Public/Imagenes/pagos.jpg" alt="logo-mercado-pago">
                    </div>
                </form>
                    <div class="d-flex justify-content-between mt-2">
                        <input type="submit" class="btn btn-compra" value="Comprar">
                    </div>
                </form> `;

    cardDirection.innerHTML = directionForm;
    cardContainer.appendChild(cardDirection);
    cardDirection.style.margin = "auto";
    cardDirection.style.width = "50%";
}
    
document.addEventListener("DOMContentLoaded", function() {

    let btnCompra = document.getElementById("conti-compra");
    btnCompra.addEventListener("click", continuarCompra);
    });
    

