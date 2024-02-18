
function save(event) {

    event.preventDefault();

    
        let nombre = document.getElementById("nombre-producto").value;
        let descripcion = document.getElementById("descripcion-producto").value;
        let categoria = document.getElementById("categoria").value;
        let talla = document.getElementById("talla").value;
        let artesano = document.getElementById("artesano").value;
        let lugar = document.getElementById("lugar").value;
        let precio = document.getElementById("precio").value;

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

        console.log(JSON.stringify(productoJSON));


    
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

// var inventario = document.getElementById("lista-de-productos")

// let nuevoProducto = document.createElement("div");
//     nuevoProducto.classList.add("nuevo-producto");
//     inventario.appendChild(nuevoProducto);

// function crearElemento(descripcion, valor) {
//     var spanNombre = document.createElement("span");
//     var inputNombre = document.createElement("input");
//     var espacio = document.createElement("br");
//     spanNombre.textContent = descripcion + ": ";
//     inputNombre.value = nombre;
//     elementoLista.appendChild(spanNombre);
//     elementoLista.appendChild(inputNombre);
//     elementoLista.appendChild(espacio);
//     }
    
//     crearElemento("Nombre", nombre);
//     crearElemento("Precio", precio);
//     crearElemento("Nacionalidad", artesano);
    
    
//     var botonBorrar = document.createElement("button");
//     botonBorrar.textContent = "Eliminar producto";
//     botonBorrar.id = "boton-borrar";
//     var corteLinea = document.createElement("br");
//     elementoLista.appendChild(corteLinea);
//     elementoLista.appendChild(botonBorrar);
    
//      botonBorrar.onclick = function() {
//     // this.parentNode.style.display = 'none';
//     elementoLista.remove();
      
//      }

// document.getElementById("formulario-productos").addEventListener("submit", function (crearNuevoProducto)){

//     crearNuevoProducto.preventDefault();

//     let nombreEtiqueta = document.createElement('label');
//     nombreEtiqueta.textContent = "Nombre del producto: ";
//     let nombreProducto = document.createElement("p");
//     nombreProducto = document.textContent = nombre;

//     let descripcionEtiqueta = document.createElement('label');
//     descripcionEtiqueta.textContent = "Descripción: ";
    
//     let categoriaEtiqueta = document.createElement('label');
//     categoriaEtiqueta.textContent = "Categoria: ";

//     let tallaEtiqueta = document.createElement('label');
//     tallaEtiqueta.textContent = "Talla: ";

//     let artesanoEtiqueta = document.createElement('label');
//     artesanoEtiqueta.textContent = "Artesano: ";
    
//     let lugarEtiqueta = document.createElement('label');
//     lugarEtiqueta.textContent = "Lugar de elaboración: ";
    
//     let precioEtiqueta = document.createElement('label');
//     precioEtiqueta.textContent = "Precio: ";
    

// }

