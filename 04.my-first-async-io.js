var fs = require("fs");

var file = process.argv[2];
var str = fs.readFile(file, "utf8", function(err, data) {
	if (err) throw err;

	var lines = data.split("\n");
	console.log(lines.length - 1);
});