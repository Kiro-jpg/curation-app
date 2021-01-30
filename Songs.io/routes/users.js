var express = require('express');
var router = express.Router();
var User = require('../models/users');
const methodoverride = require("method-override");

router.use(methodoverride("_method", {
  methods: ["POST", "GET"]
}));

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

router.get('/users/:id', function (req, res, next) {
  let userId = req.params.id;
  let param = "/users/" + userId;
  User.findById(userId)
    .then(user => {
      res.redirect(param, {
        user: user
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.put('/users/:id', function (req, res, next) {
  let userId = req.params.id;
  let param = "/users/" + userId;
  userParams = {
    name: req.body.username,
    bio: req.body.userdescription,
    image: req.body.userimagelink
  };
  console.log(userParams);
  User.findByIdAndUpdate(userId, {
      $set: userParams
    })
    .then(user => {
      res.redirect(param);
      res.locals.user = user;
      next();
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = router;