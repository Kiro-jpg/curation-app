var express = require('express');
var router = express.Router();

// login route
router.get("/register", function (req, res) {
  res.render('register.ejs', {
    user: req.user,
    title: "Register",
  });
});


router.post('/register', (req, res) =>{
    console.log(req.body);
})



module.exports = router;