var express = require('express');
var router = express.Router();

/* GET info about mydata*/
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Teja Kumar Muppala' });
});

module.exports = router;
