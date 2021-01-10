var express = require('express');
var router = express.Router();
var User = require('../models/users');
/* GET home page. */
router.get('/', function (req, res, next) {
  User.find()
  .then((result) =>{
    res.render('index.ejs', { title:'Groovy', user: result})
  })
  .catch((err)=> {
    console.log(err);
  });
});



module.exports = router;