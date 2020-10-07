var server = require("./server3");
var route = require("./route3");
var requestHandlers = require("./requestHandlers3");

  var handle = {}
   handle["/"] = requestHandlers.iniciar;
   handle["/iniciar"]= requestHandlers.iniciar;
   handle["/subir"]= requestHandlers.subir;
  server.iniciar(route.route, handle); 

  // Actividad 5, ocupa server3.js

  