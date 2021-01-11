var express = require('express');
var router = express.Router();
const Album = require('../models/album');

/* GET home page. */
router.get('/create-album', (req, res) => {
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

router.get('/albumer', (req,res) =>{
  Album.find()
  .then((result) =>{
    res.render('album.ejs', { title:'All Albums', album: result})
  })
  .catch((err)=> {
    console.log(err);
  });

});

router.get('/albumer/:id', (req, res) =>{
  const id = req.params.id;
  Album.findById(id)
  .then(result =>{
    res.render('album-details.ejs', {album: result, title: 'Groovy | Album'})
  })
  .catch(err =>{
    console.log(err);
  })
})

module.exports = router;