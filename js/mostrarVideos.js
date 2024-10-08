import { conexionAPI } from "./conexionAPI.js";
const lista = document.querySelector("[data-lista]");



export default function crearCard(titulo, descripcion, url, imagen) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
    <img src="${imagen}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    </div>`;

    return video; 
}


async function listarVideo(){
    try{
        const listAPI = await conexionAPI.listarVideos();
        listAPI.forEach(element => {
            lista.appendChild(crearCard(element.titulo, element.descripcion, element.url, element.imagen))
        });
    }catch{
        lista.innerHTML= `<h2 class="mensaje__titulo">No se pudo realizar la conexion a la base de datos</h2>`;
    }

}

listarVideo(); 