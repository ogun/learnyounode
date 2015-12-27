var http = require("http");
var bl = require("bl");

var url = process.argv[2];

http.get(url, function(response) {
	response.pipe(bl(function(err, data) {
		if (err) throw err;

		var body = data.toString();
		console.log(body.length);
		console.log(body);
	}));
});