var url = require('url');
var port;
var host;

function toRequest(request, response){
	
	var urlParsed = url.parse(request.url, true);

	if(urlParsed.query && urlParsed.query.host && urlParsed.query.port){
		response.statusCode = 200;
		host = urlParsed.query.host;
		port = urlParsed.query.port;
		console.log('Host:' + host);
		console.log('Port:' + port);
		console.log('200 OK!!!!!!!!');
	}
	
	if(urlParsed.search !='' && (!urlParsed.query.host || !urlParsed.query.port)){
		response.statusCode = 500;
		console.log("Error!!");
	}

	else{
		response.statusCode = 200;
		console.log('200 OK!');
    	}
	
}

exports.toRequest = toRequest;
