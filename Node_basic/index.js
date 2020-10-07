var server = require("./server2");
var route = require("./route");
// Act 4 se implementa Handlers
var requestHandlers = require("./requestHandlers");

  var handle = {}
   handle["/"] = requestHandlers.iniciar;
   handle["/iniciar"]= requestHandlers.iniciar;
   handle["/subir"]= requestHandlers.subir;
// Fin Act 4
  server.iniciar(route.route, handle); 
   // Act 4 , se agrega la variable handle

  