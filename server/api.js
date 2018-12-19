const router = require('express').Router();
const solarAnalyzer = require('./solarAnalyzer.js');
const path = require('path');

router.post( function(req, res) {
	solarAnalyzer(function(err, graphPaths) {
		res.status( err ? 500: 200 ).end();	
	})
});
router.get( function(req, res) {
	res.status(200);
	res.sendFile(path.join(__dirname + '/utility/multiseries.png')).end();
})

module.exports = router;