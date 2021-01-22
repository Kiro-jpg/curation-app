var express = require('express');
var router = express.Router();
const controller = require('../controllers/register');
const { forwardAuthenticated } = require('../config/auth');


router.get("/register",  forwardAuthenticated, controller.render_register);

router.post('/register', controller.do_register);

module.exports = router;