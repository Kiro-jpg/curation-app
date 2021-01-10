var express = require('express');
var router = express.Router();
var User = require('../models/users');
var bcrypt = require('bcryptjs');


const { forwardAuthenticated } = require('../config/auth');


router.get("/register",  forwardAuthenticated, (req, res) =>{
  res.render('register.ejs', {
    title: "Register",
  });
});

router.post('/register', (req, res) =>{
    const {name, email, password, password2, username } = req.body;
    let errors = [];
    
    // Check reqeuired fields
    if(!name || !email || !password || !password2 || !username){
      errors.push({msg: 'Please fill up all fields'});
    }

    // Check password match
    if(password !== password2){
      errors.push({msg: 'Passwords do not match'});
    }

    if(errors.length > 0){
      res.render('register.ejs', {
        title: "Register",
        errors,
        name,
        email,
        password,
        username,
        password2
      });
    } else {
      User.findOne({email:email})
      .then(user => {
        if(user){

          //User exist
          errors.push({ msg: 'Email is already registered'});
          res.render('register', {
            errors,
            name,
            email,
            username,
            password,
            password2

          });
        }else {

          const newUser = new User({
            name,
            email,
            username,
            password
          });
          // Hashing

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err,hash) =>{
              if(err) throw err;
              // Set password to hash
              newUser.password = hash;
              //Save user
              newUser.save()
              .then(user =>{
                req.flash('success_msg', 'You are now registered and can log in');
                res.redirect('/login');
              })
              .catch(err => console.log(err));
          });
        });

    }
      
    });
    }
});

module.exports = router;