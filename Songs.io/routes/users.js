var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.render('user.ejs', {
    title: "Groove | Profile",
  });
});


router.get('/users/:id', function (req, res) {
  const id = req.params.id;
  User.findById(id)
    .then(result => {
      res.render('user.ejs', {
        user: result,
        title: 'Groovy | User',

      })
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;