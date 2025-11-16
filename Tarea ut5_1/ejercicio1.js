//1. Modifica el contenido del título, poniéndole tu nombre.


document.getElementById("titulo").textContent = " Noticias - Carlos Melenchón Gabarrón"

//2. Modifica la imagen que muestra el segundo artículo artículo
let articulos = document.querySelectorAll("article");
let imagenSegundo = articulos[1].querySelector("img");
imagenSegundo.src = "noticia1.jpg";

//3. Oculta el último articulo.

let ultimoArticulo = articulos[articulos.length - 1];
ultimoArticulo.style.display = "none";

//4. Recorre los artículos y añade al inicio de la cabecera el número de noticia (1- Hospitalizado...)
articulos.forEach((articulo, indice) => {
    let cabecera = articulo.querySelector("div");
    cabecera.textContent = `${indice + 1} - ${cabecera.textContent}`;
}); 


//5. Añade un nuevo artículo al final con los siguientes datos:
articulos.forEach(articulo => {
    let primerDiv = articulo.querySelector("div"); 
    primerDiv.classList.add("cabecera");           
});

//6  Busca en todos los artículos donde aparece la cadena 
// "Servicio Murciano de Salud", y sustitúyela por "S.M.S" (¿método replace de cadenas?).

articulos.forEach(articulo => {
    let cuerpo = articulo.querySelector(".cuerpo");
    cuerpo.textContent = cuerpo.textContent.replace(/Servicio Murciano de Salud/g, "S.M.S");
});