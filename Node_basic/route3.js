 // Archivo para definir las rutas de manera manual

function route (handle,pathname,response){ // ACT 3
    console.log("Get para ruta a la peticion "+ pathname);
    if(typeof handle[pathname] === 'function' ){
        return handle[pathname](response);
    } else {
        return(" No ingresa al Handler o no se encuentra la funcion" +  pathname);

    }
}

exports.route=route;