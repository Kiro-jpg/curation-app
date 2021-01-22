var express = require('express');
var router = express.Router();
const controller = require('../controllers/album')
/* GET home page. */

router.get('/all-album', controller.getall_album);



router.get('/single-album', controller.single_album);

router.get('/albumer', controller.render_album);

router.get('/albumer/:id', controller.singleid_album);

module.exports = router;