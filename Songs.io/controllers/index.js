const mongoose = require('mongoose');
const User = require('../models/users');

// render index page
exports.render = function (req, res, next) {

    var id;
    switch (req.session.email) {
        case "jm@gmail.com":
            id = "5ffb23fd4e8e211dcc877aa9"
            break;
        case "mid23@gmail.com":
            id = "6012bf5840f2b637704859b4"
            break;
        case "kuragure@gmail.com":
            id = "6013c777c17fdd0d18584151"
            break;
    }

    if (req.session.email == "admin@gmail.com") {
        res.render("admin.ejs", {
            title: 'Groovy Admin'
        });
    } else {
        // console.log(req.session.email);
        // console.log(id);
        User.findById(id)
            .then((result) => {
                res.render('index.ejs', {
                    title: 'Groovy',
                    user: result,
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
};