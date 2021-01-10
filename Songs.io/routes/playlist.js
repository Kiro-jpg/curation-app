var express = require('express');
var router = express.Router();
const Playlist = require('../models/playlists');

/* GET home page. */
router.get('/create', (req, res) => {
  const playlist = new Playlist({
    title: 'test title',
    description: 'this is a test description for the playlist',
    image: 'image link'
  });

  playlist.save()
  .then((result) => {
    res.send(result)
  })
  .catch((err) =>{
    console.log(err);
  });

});

router.get('/playlist/:id', (req, res) =>{
  const id = req.params.id;
  Playlist.findById(id)
  .then(result =>{
    res.render('details.ejs', {playlist: result, title: 'Groovy | Playlist'})
  })
  .catch(err =>{
    console.log(err);
  })
})


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

