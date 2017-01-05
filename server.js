var http = require("http");
var requestHandler = require("./requestHandler");

function start(){
	function onRequest(request, response){
		console.log("Request accepted");
    		requestHandler.toRequest(request, response);
	}

    http.createServer(onRequest).listen(1337);

    console.log("Server starts");
}

exports.start = start;
