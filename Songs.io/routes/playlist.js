var express = require('express');
var router = express.Router();
const Playlist = require('../models/playlists');
const controller = require('../controllers/playlist');


// increment follow counter
router.get('/playlist/follow/:id', controller.add_follow);

// get single playlist 
router.get('/playlist/:id', controller.add_singlelist);


router.get('/playlist', controller.get_playlist);

router.post('/playlist', controller.post_playlist);

router.get("/delete-playlist/:id", controller.delete_playlist);

router.post('/playlist/update/:id', controller.update_playlist);

router.get('/playlist/delete-song/:id/:song', controller.delete_song);

router.post('/playlist/add-song/:id', controller.add_song);

module.exports = router;