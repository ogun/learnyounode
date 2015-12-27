var fs = require("fs");

var file = process.argv[2];
var str = fs.readFileSync(file, "utf8");

var lines = str.split("\n");
console.log(lines.length - 1);