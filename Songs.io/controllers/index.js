const mongoose = require('mongoose');
const User = require('../models/users');

// render index page
exports.render = function (req, res, next) {


    User.findOne({
            email: req.session.email
        })
        .then((result) => {


            if (req.session.email == "admin@gmail.com") {
                res.render("admin.ejs", {
                    title: 'Groovy Admin',
                    user: result
                });
            } else {

                res.render('index.ejs', {
                    title: 'Groovy',
                    user: result,
                })
            }
        })
        .catch((err) => {
            console.log(err);
        });
};