var http = require("http");
var bl = require("bl");
var async = require("async");

var urlList = [];
for (var i = 2; i < 5; i++) {
	urlList.push(process.argv[i]);
};

var calls = [];
for (var i = 0; i < urlList.length; i++) {
	calls.push(function(callback) {
		var url = urlList.shift();

		http.get(url, function(response) {
			response.pipe(bl(function(err, data) {
				if (err) throw err;

				var body = data.toString();
				callback(null, body);
			}));
		})
	});	
};

async.series(calls, function(err, results) {
	if (err) throw err;

	results.forEach(function (body) {
		console.log(body);
	});
});