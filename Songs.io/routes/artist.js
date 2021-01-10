var express = require('express');
var router = express.Router();
const Artist = require('../models/artists');

/* GET home page. */
router.get('/iba', (req, res, next) => {
  const artist = new Artist({
    name: 'John Magdato',
    image: 'LTM'
  });
  artist.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/all-artist', (req, res) => {

  Artist.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
});

router.get('/single-artist', (req, res) => {
  Artist.findById('5ff318b717fee251bcd68b9c')
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });

});

router.get('/artist', (req,res) =>{
  Artist.find()
  .then((result) =>{
    res.render('artist.ejs', { title:'All Artist', artist: result})
  })
  .catch((err)=> {
    console.log(err);
  });

});

router.get('/artist/:id', (req, res) =>{
  const id = req.params.id;
  Artist.findById(id)
  .then(result =>{
    res.render('details.ejs', {artist: result, title: 'Groovy | Artist'})
  })
  .catch(err =>{
    console.log(err);
  })
})

module.exports = router;