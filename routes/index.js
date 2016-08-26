var express = require('express');
var router = express.Router();
var mysqler = require('../modules/db/node-mysql');

router.post('/api/account', function(req, res, next) {
	var acc = req.get('X-Username');
	var psw = req.get('X-Password');

	mysqler.select('select * from account', function(results) {
		if (acc === results[0].acc && psw === results[0].psw) {
			res.status(200).send({
				success: true,
				data: results[0]
			});
		} else {
			res.status(200).send({
				success: false
			});
		}	
	});
});
router.get('/api/account', function(req, res, next) {
	
	mysqler.select('select * from account', function(results) {
		res.status(200).send({
			data: results[0]
		});
	});
});
module.exports = router;
