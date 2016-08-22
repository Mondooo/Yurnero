var express = require('express');
var router = express.Router();

router.get('/api/account', function(req, res, next) {
	var map = {"data":{id:1,name:"test"}};
	res.set({'Content-Type':'text/json','Encodeing':'utf8'});  
  	res.send(map);
});

module.exports = router;
