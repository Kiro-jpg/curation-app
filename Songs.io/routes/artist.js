var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/artist', function (req, res, next) {
  res.render('artist', {
    title: 'hello jm1'
  });
});

module.exports = router;