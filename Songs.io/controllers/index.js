const mongoose = require('mongoose');
const User = require('../models/users');

// render index page
exports.render = function (req, res, next) {
    console.log(req.body);
    User.find()
        .then((result) => {
            res.render('index.ejs', {
                title: 'Groovy',
                user: result
            })
        })
        .catch((err) => {
            console.log(err);
        });
};