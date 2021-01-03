var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/album', function (req, res, next) {
  res.render('album', {
    title: 'welcome everyone!'
  });
});

module.exports = router;