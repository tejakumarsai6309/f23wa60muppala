var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
    z=req.query.z;
    if(z==undefined)
    z=(Math.random()*100);
    f1=Math.fround(z);
    f2=Math.random(z);
    f3=Math.round(z);
  
  res.send(`fround of ${z} is ${f1},random of ${z} is ${f2} and round of ${z} is ${f3} `);
  
});

module.exports = router;