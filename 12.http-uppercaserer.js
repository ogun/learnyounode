var http = require("http");
var map = require("through2-map");

var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
	if (req.method === "POST") {
		res.writeHead(200, { "content-type": "text/plain" });

		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	};
});

server.listen(port);