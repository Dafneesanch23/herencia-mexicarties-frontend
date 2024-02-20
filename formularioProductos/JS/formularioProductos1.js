const dataProducts = () => {

    const idProduct = Math.floor(Math.random() * 1000);
    const idUser = Math.floor(Math.random() * 1000);
    const nombre = document.getElementById('nombre-producto').value;
    const descripcion = document.getElementById('Descripcion-producto').value;
    const categoria = document.getElementById('categoria').value
    const tipo = document.getElementById('categoria').value
    const artesano = document.getElementById('artesano').value
    const precio = document.getElementById('precio').value
    const estado = document.getElementById('lugar').value

    const productData = {
        idProduct,
        idUser,
        nombre,
        descripcion,
        categoria,
        tipo,
        artesano,
        precio,
        estado,
        imagen,
    };

    console.log(JSON.stringify(productData));
    return true;
}

const form = document.querySelector('form');

form.onsubmit = (e) => {
    e.preventDefault();
    if (dataProducts()) {
        console.log("Todo salió bien");
    }

}

