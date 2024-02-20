
function save(event) {

    event.preventDefault();

        
    /*******************************************************/
    /* Función para mostrar mensaje de error al validar    */
    /*******************************************************/
  
    const showAlert = (message) => {
        const alertContainer = document.getElementById("alert-container");
        alertContainer.innerHTML = `<div class="alert alert-danger alert-dismissible fade show justify-content-center" style="text-align: center;" role="alert">
                                      ${message}
                                    </div>`;
    };
  
    const clearAlerts = () => {
        const alertContainer = document.getElementById("alert-container");
        alertContainer.innerHTML = '';
    };
    
     /**************************************/
    /* Función para validar formulario    */
    /**************************************/
  
    const dataValidation = () => {

    
        let nombre = document.getElementById("nombre-producto").value;
        let descripcion = document.getElementById("descripcion-producto").value;
        let categoria = document.getElementById("categoria").value;
        let talla = document.getElementById("talla").value;
        let artesano = document.getElementById("artesano").value;
        let lugar = document.getElementById("lugar").value;
        let precio = document.getElementById("precio").value;

        const fieldsAreNotEmpty = (nombre, descripcion, artesano, precio) => 
        nombre.trim() && descripcion.trim() && artesano.trim() && precio.trim();
  
        /*********************************************/
        /* Se ocupan las funciones para validar      */
        /*********************************************/
  
        // Limpia alertas mostradas en pantalla.
        clearAlerts();

        if (!fieldsAreNotEmpty(nombre, descripcion, artesano, precio)) {
            showAlert('Por favor, rellene todos los campos.');
            return;
        }

        //Objeto JSON
        let productoJSON = {
            nombre: nombre,
            descripcion: descripcion,
            categoria: categoria,
            talla: talla,
            artesano: artesano,
            lugar: lugar,
            precio: precio
        };

        localStorage.setItem('producto', productoJSON)
        console.log(productoJSON);


    
    // Crear elementos que muestren el inventario de productos
    let contenedorInventario = document.createElement("div");
    //contenedorInventario.className = "col-lg-6" 
    contenedorInventario.style.paddingBottom = "20px";
    contenedorInventario.style.border = "solid";

    let nombreProducto = document.createElement("p");
    nombreProducto.textContent = "Nombre del producto: " + nombre;

    let descripcionProducto = document.createElement("p");
    descripcionProducto.textContent = "Descripción: " + descripcion;
    
    let categoriaProducto = document.createElement("p");
    categoriaProducto.textContent = "Categoria: " + categoria;

    let tallaProducto = document.createElement("p");
    tallaProducto.textContent = "Talla: " + talla;

    let artesanoProducto = document.createElement("p");
    artesanoProducto.textContent = "Artesano: " + artesano;
    
    let lugarProducto = document.createElement("p");
    lugarProducto.textContent = "Lugar de elaboración: " + lugar;
    
    let precioProducto = document.createElement("p");
    precioProducto.textContent = "Precio: " + precio;


    let contenedorBoton = document.createElement ("div");
    contenedorBoton.className="d-flex justify-content-center";

    let botonBorrar =  document.createElement("button");
    botonBorrar.textContent = "Eliminar producto";
    botonBorrar.className = "btn btn-primary btn-block";
   

    botonBorrar.onclick = function () {
        contenedorInventario.remove();
    }


    let inventarioProductos = document.getElementById("inventario-productos");
   
    // Agregar elementos a HTML 
    contenedorInventario.appendChild(nombreProducto);
    contenedorInventario.appendChild(descripcionProducto);
    contenedorInventario.appendChild(categoriaProducto);
    contenedorInventario.appendChild(tallaProducto);
    contenedorInventario.appendChild(artesanoProducto);
    contenedorInventario.appendChild(lugarProducto);
    contenedorInventario.appendChild(precioProducto);
    contenedorInventario.appendChild(contenedorBoton);
    contenedorBoton.appendChild(botonBorrar);

    // Agregar el contenedor 
    inventarioProductos.appendChild(contenedorInventario);

    return productoJSON;

}
    dataValidation();
}
