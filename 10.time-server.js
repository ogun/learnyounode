var net = require("net");
var strftime = require("strftime");

var port = Number(process.argv[2]);

var server = net.createServer(function (socket) {
	var serverTime = strftime("%F %H:%M", new Date());
	socket.end(serverTime + "\n");
});

server.listen(port);