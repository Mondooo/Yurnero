var mysqler = require('./db/node-mysql');

mysqler.select('select * from account', function(results) {
	console.log(results[0]);
});

exports.module = mysqler;