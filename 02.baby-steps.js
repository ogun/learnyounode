var total = 0;
for (var i = 2; i < process.argv.length; i++) {
	var number = Number(process.argv[i]);
	total += number;
};
console.log(total);