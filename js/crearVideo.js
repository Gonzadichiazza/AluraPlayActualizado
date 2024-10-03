import { conexionAPI } from "./conexionAPI.js";


const formulario = document.querySelector("[data-formulario]")


async function crearVideo(evento){

    evento.preventDefault(); 
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value
    const imagen = document.querySelector("[data-imagen]").value

    const descripcion = Math.floor(Math.random()*10).toString(); 

    try{

        await conexionAPI.enviarVideo(titulo, descripcion, url, imagen); 
    }catch(e)
    {
        alert(e); 
    }

     window.location.href="../index.html";

    

} 


formulario.addEventListener("submit", evento => crearVideo(evento));