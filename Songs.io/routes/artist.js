var express = require('express');
var router = express.Router();
const Artist = require('../models/artists');

/* GET home page. */
router.get('/artist', (req, res, next) => {
  const artist =  new Artist({
    name: 'John Magdato',
    image: 'LTM'
  });
  artist.save()
  .then((result )=>{
    res.send(result)
  })
  .catch((err) =>{
    console.log(err);
  });
});

router.get('/all-artist', (req,res) =>{

  Artist.find()
  .then((result) =>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
  })
});

module.exports = router;