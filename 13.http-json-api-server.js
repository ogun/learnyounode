var http = require("http");
var url = require("url");

var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
	if (req.method === "GET") {
		res.writeHead(200, { "content-type": "application/json" });

		var reqUrl = url.parse(req.url, true);
		var queryData = reqUrl.query;
		var reqDate = new Date(queryData.iso);

		if (reqUrl.pathname == "/api/parsetime") {
			var response = {
				hour: reqDate.getHours(),
				minute: reqDate.getMinutes(),
				second: reqDate.getSeconds()
			};

			res.end(JSON.stringify(response));
		} else if (reqUrl.pathname == "/api/unixtime") {
			var response = { unixtime: reqDate.getTime() };

			res.end(JSON.stringify(response));
		} else {
			res.end();
		}
	};
});

server.listen(port);