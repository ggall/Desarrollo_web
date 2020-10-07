// Actividad 4

  function iniciar(response){

    var body = '<html>'+ '<head>'+    '<meta http-equiv="Content-Type"     content="text/html; charset=UTF-8" />'+    '</head>'+
    '<body>'+    '<form action="/subir" method="post">'+    '<textarea name="text" rows="20" cols="60"></textarea>'+    '<input type="submit" value="Enviar texto" />'+    '</form>'+    '</body>'+    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
  }

  function subir(response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Subir");
    response.end();
  }

   exports.iniciar = iniciar;
   exports.subir = subir;
