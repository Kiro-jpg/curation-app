var express = require('express');
var router = express.Router();


// login route
router.get("/login", function (req, res) { 
    res.render('login', { user : req.user });
  }); 
  
router.post("/login", passport.authenticate("local", { 
    successRedirect: "/", 
    failureRedirect: "/login"
  }), function (req, res) { 
  }); 
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  module.exports = router;
