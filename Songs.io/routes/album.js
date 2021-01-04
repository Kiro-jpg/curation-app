var express = require('express');
var router = express.Router();
const Album = require('../models/album');

/* GET home page. */
router.get('/album', (req, res) => {
  const album = new Album({
    name: 'alburat',
    description: 'tartar',
    image: 'tawa'
  });

  album.save()
  .then((result) => {
    res.send(result)
  })
  .catch((err) =>{
    console.log(err);
  });

});

router.get('/all-album', (req,res) => {

  Album.find()
  .then((result) =>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
  });

});

router.get('/single-album', (req,res) =>{
  Album.findById('5ff30ba9eb65fb3e68ca936d')
  .then((result) =>{
    res.send(result)
  })
  .catch((err)=> {
    console.log(err);
  });

});

router.get('/album', (req,res) =>{
  Album.find()
  .then((result) =>{
    res.render('album', { title:'All Albums', playlist: result})
  })
  .catch((err)=> {
    console.log(err);
  });

});

module.exports = router;