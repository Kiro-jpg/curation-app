var express = require('express');
var router = express.Router();
var passport = require("passport");


// login route
router.get("/login", function (req, res) { 
    res.render('login', { user : req.user });
  }); 
  
router.post("/login", passport.authenticate("local", { 
    successRedirect: "/", 
    failureRedirect: "/playlist"
  }), function (req, res) { 
    console.log("Test");
  }); 
  

  module.exports = router;
