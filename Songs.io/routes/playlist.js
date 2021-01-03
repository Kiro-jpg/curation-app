var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/playlist', function (req, res, next) {
  res.render('playlist', {
    title: 'yes'
    
  });
});

module.exports = router;