var http = require("http");
var fs = require("fs");

var port = Number(process.argv[2]);
var fileContent = process.argv[3];

var server = http.createServer(function (req, res) {
	res.writeHead(200, { "content-type": "text/plain" });

	var src = fs.createReadStream(fileContent);
	src.pipe(res);
});

server.listen(port);