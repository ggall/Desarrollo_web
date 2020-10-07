var http = require("http");
var url = require("url"); // Activ 2

//Iniciar Servidor 
function iniciar(route, handle){ // ACT3 se pasa el parametro de route a la función
    http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        console.log("Peticion para " +  url.parse(request.url).pathname + " recibida"); // Act 2

        var contenido= route(handle,url.parse(request.url).pathname); // ACT3 se pasa el path name al archivo de rutas
 // ACT 4 Se agrega el handle
        response.write(contenido);
        response.end();
    }).listen(8888);
    console.log("Servidor inicializado. ");
}

exports.iniciar= iniciar;

