import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";
const boton_buscador = document.querySelector("[data-boton-busqueda]");
const buscador = document.querySelector("[data-busqueda]");


async function filtrarVideos(evento){

    evento.preventDefault(); 
    const palabraClave = document.querySelector("[data-busqueda]").value; 
    const lista = document.querySelector("[data-lista]"); 

    

   const conexion = await conexionAPI.buscarVideo(palabraClave); 

       while(lista.firstChild){
        lista.removeChild(lista.firstChild); 
       }
        conexion.forEach(element => lista.appendChild(crearCard(element.titulo, element.descripcion, element.url, element.imagen)))   

        if(conexion.length==0){
            lista.innerHTML= `<h2 class="mensaje__titulo">No existen videos relacionados a la palabra clave: ${palabraClave}</h2>`
        }
}

buscador.addEventListener("keydown", e => {
    if(e.key === 'Enter'){
        filtrarVideos(e)
    }
})
boton_buscador.addEventListener("click", evento => filtrarVideos(evento))
