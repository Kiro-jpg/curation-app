var express = require('express');
var router = express.Router();
const playlist = require('../models/playlists');

/* GET home page. */
router.get('/playlist', function (req, res, next) {
  const playlist = new playlist({
    title: 'modtakels',
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


  res.render('playlist', {
    title: 'yes'
    
  });
});

module.exports = router; 

