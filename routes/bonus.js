var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
    x=req.query.x;
    if(x==undefined)
    x=(Math.random()*100);
    f1=Math.fround(x);
    f2=Math.random(x);
    f3=Math.round(x);
  
  res.send(`fround of ${x} is ${f1},random of ${x} is ${f2} and round of ${x} is ${f3} `);
  
});

module.exports = router;