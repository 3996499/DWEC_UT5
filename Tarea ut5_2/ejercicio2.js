//1. Un título con tu nombre.
let titulo = document.createElement("h1");
titulo.textContent = "Tienda de Bicicletas de Carlos Melenchón Gabarrón";
titulo.classList.add("titulo-tienda");
document.body.appendChild(titulo);

//2. Un elemento contenedor, que contendrá los artículos de la tienda.
let contenedor = document.createElement("div");
contenedor.classList.add("contenedor-articulos");
document.body.appendChild(contenedor);

//3. Cada artículo contiene un nombre, una descripción, un precio y una imagen. 
// Estos datos los leemos del array datos, que tenemos disponible en el archivo datos.js 
// y ya se encuentra cargado en la web

datos.forEach (item => {
    //crear articulo
    let articulo = document.createElement("article");
    articulo.classList.add("articulo");

    //Titulo
    let nombre = document.createElement("h2");
    nombre.textContent = item.nombre;
   
    //descripcion
    let descripcion = document.createElement("p");
    descripcion.textContent = item.descripcion;

    //precio
    let precio = document.createElement("p");
    precio.textContent = item.precio + " €";
    precio.classList.add("precio");

    //imagen
    let imagen = document.createElement("img");
    imagen.src = item.imagen;   
    imagen.alt = item.nombre;

    //añadir articulo 
    articulo.appendChild(nombre);
    articulo.appendChild(descripcion);
    articulo.appendChild(precio);
    articulo.appendChild(imagen);

    //añadir articulo al contendedor
    contenedor.appendChild(articulo);
});
