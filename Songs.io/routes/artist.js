var express = require('express');
var router = express.Router();
const Artist = require('../models/artists');
const controller = require('../controllers/artist');
/* GET home page. */


router.get('/all-artist', controller.allartist);

router.get('/single-artist', controller.singleartist);

router.get('/artist', controller.renderartist);

router.get('/artist/:id', controller.renderartistID);

module.exports = router;