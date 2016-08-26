/**
* 封装数据库连接
* 
* @Auth Mondooo
*/

var mysql = require('mysql');

var connection = mysql.createConnection({
	host          : 'localhost',
	port          : 3307,
	user          : 'root',
	password      : '1234',
	database      : 'yurnero',
	charset       : 'utf8',
	connectTimeout: 2000
});

connection.connect(function(err) {
	
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('mysql connected as id ' + connection.threadId);
});

var select = function(sql, doNext) {
	
	connection.query(sql, function(err, results, fields) {
		if (err) throw err;

		doNext(results);
	});
};

var close = function() {
	
	connection.end(function(err) {
		if (err) {
			console.log('err occured during closing connection.');
			throw err;
		}

		console.log('connection is closed');
	});
};
module.exports.select = select;
module.exports.close = close;