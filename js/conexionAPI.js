async function listarVideos(){
        const conexion = await fetch("http://localhost:3001/videos");
        const conexionConvertida = await conexion.json();
        return conexionConvertida;  

}

async function buscarVideo(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida= await conexion.json(); 
    return conexionConvertida; 
}

async function enviarVideo(titulo, descripcion, url, imagen){
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(
            {
                titulo: titulo,
                descripcion: `${descripcion} mil visualizaciones`, 
                url: url, 
                imagen: imagen 
            }
        )
    })

    if(!conexion.ok){
        throw new Error(`Se produjo un error al intentar crear el video `)
    }
    const conexionConvertida = await conexion.json(); 

    return conexionConvertida;
}

export const conexionAPI = {

    listarVideos,  enviarVideo, buscarVideo

}