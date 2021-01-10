var express = require('express');
var router = express.Router();
var passport = require("passport");
const { forwardAuthenticated } = require('../config/auth');

// login route
router.get('/login', forwardAuthenticated, (req, res) => res.render('login', {title: 'Login'}));


router.post('/login', (req, res, next) =>{
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
});



module.exports = router;