var express = require('express');
var router = express.Router();
const Playlist = require('../models/playlists');

/* GET home page. */
router.get('/create', (req, res) => {
  const playlist = new Playlist({
    title: 'modtakels2',
    description: 'tae',
    image: 'ihi'
  });

  playlist.save()
  .then((result) => {
    res.send(result)
  })
  .catch((err) =>{
    console.log(err);
  });

});

router.get('/all-playlist', (req,res) => {

  Playlist.find()
  .then((result) =>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
  });

});

router.get('/single-playlist', (req,res) =>{
  Playlist.findById('5ff30ba9eb65fb3e68ca936d')
  .then((result) =>{
    res.send(result)
  })
  .catch((err)=> {
    console.log(err);
  });

});

router.get('/playlist', (req,res) =>{
  Playlist.find()
  .then((result) =>{
    res.render('playlist.ejs', { title:'All Playlist', playlist: result})
  })
  .catch((err)=> {
    console.log(err);
  });

});

router.post('/playlist', (req,res) =>{
  const playlist = new Playlist(req.body);

  playlist.save()
  .then((result)=> {
    res.redirect('/playlist');
  })
  .catch((err)=>{
    console.log(err);
  });

});



module.exports = router; 

