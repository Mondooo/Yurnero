var express = require('express');
var router = express.Router();

router.post('/api/account', function(req, res, next) {
	var acc = req.get('X-Auth-Username');
	var psw = req.get('X-Auth-Password');

	if (acc == 'test' && psw === '1234') {
		res.status(200).send({
			success: true
		});
	}
	res.status(200).send({
		success: false
	});
});

module.exports = router;
