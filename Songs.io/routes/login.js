var express = require('express');
var router = express.Router();
const { forwardAuthenticated } = require('../config/auth');
const controller = require('../controllers/login');

// login route
router.get('/login', forwardAuthenticated, controller.render_login);


router.post('/login', controller.login);

router.get('/logout', controller.logout);

module.exports = router;