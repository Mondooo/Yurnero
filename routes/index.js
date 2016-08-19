var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// ##返回[index.ejs],并传递变量[title]
  res.render('index', { 
  	title: 'Express',
  	text: 'Text'
  	});
});


module.exports = router;
