
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