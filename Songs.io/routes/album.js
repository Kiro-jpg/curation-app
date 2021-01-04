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
  Album.findById('5ff3185361a6ef40049ff8da')
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

router.post('/album', (req,res) =>{
  const album = new Album(req.body);

  Album.save()
  .then((result)=> {
    res.redirect('/album');
  })
  .catch((err)=>{
    console.log(err);
  });

});

module.exports = router;