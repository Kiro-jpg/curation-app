var express = require('express');
var router = express.Router();


router.get('/add-playlist', (req, res) => {
  res.render('create', {
    title: 'Add playlist'

  });
});

module.exports = router;