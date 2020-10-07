var http = require("http");
var url = require("url"); 

//Iniciar Servidor 
function iniciar(route, handle){ 
    http.createServer(function(request, response) {
        console.log("Peticion para " +  url.parse(request.url).pathname + " recibida"); 
        route(handle,url.parse(request.url).pathname,response); 
    }).listen(8888);
    console.log("Servidor inicializado. ");
}

exports.iniciar= iniciar;

