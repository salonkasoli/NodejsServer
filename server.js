var http = require("http");

function onRequest(request, response) {
    console.log("Request accepted");
}

http.createServer(onRequest).listen(1337);

console.log("Server starts");
