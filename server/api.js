const solarAnalyzer = require('./solarAnalyzer.js');
const path = require('path');

const sendAnalysis = function(req, res) {
	solarAnalyzer(function(err, graphPaths) {
		if (err) {
			res.status(500);
			res.end();
		} else {
			res.status(200);
			res.end();
		}
	})
}

const getAnalysis = function(req, res) {
	res.status(200);
	res.sendFile(path.join(__dirname + '/utility/multiseries.png'));
	res.end();
}

module.exports = {sendAnalysis: sendAnalysis,
									getAnalysis: getAnalysis};