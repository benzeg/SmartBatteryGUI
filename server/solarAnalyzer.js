const spawn = require('child_process').spawn;
const path = require('path');

const SolarAnalyzer = function(cb) {
	const py = spawn('python', [path.join(__dirname + '/../utility/analyzer.py')]);
	let dataString = '';

	var graphpath = path.join(__dirname + '/../utility/multiseries.png');
	cb(null, graphpath);
py.stdout.on('data', function(data) {
	dataString += data.toString();
});

py.stdout.on('end', function() {
	console.log('jello', dataString);
	var graphpath = path.join(__dirname + '/../utility/multiseries.png');
	cb(null, graphpath);
})

let input = [1, 2, 3];
py.stdin.write(JSON.stringify(data));
py.stdin.end();
};

module.exports = SolarAnalyzer;