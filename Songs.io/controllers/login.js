var passport = require("passport");



exports.render_login = function (req, res) {
    res.render('login', {
        title: 'Login'
    });
}

exports.login = function (req, res, next) {
    console.log('im in');
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);


}

exports.logout = function (req, res) {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
}