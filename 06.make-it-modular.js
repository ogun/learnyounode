var myModule = require("./06.make-it-modular.module.js");

var folder = process.argv[2];
var ext = process.argv[3];

myModule(folder, ext, function(err, list) {
	if (err) throw err;

	list.forEach(function(file) {
		console.log(file);
	});
});