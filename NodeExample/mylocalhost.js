//its calling the module of http
var http = require('http');
//lets define a port we want to listen to
const PORT=8080;

//function for handling request and response
function handleRequest(request, response){
  response.end("The request has happened!" + request.url);
}

// create the server
var server = http.createServer(handleRequest);

//starting the server
server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
