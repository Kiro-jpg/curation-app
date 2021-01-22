const mongoose = require('mongoose');
const Album = require('../models/album');
const Song = require('../models/songs');



exports.getall_album = function(req,res) {

    Album.find()
    .then((result) =>{
      res.send(result);
    })
    .catch((err) =>{
      console.log(err);
    });
}

exports.single_album = function(req,res) {
    Album.findById('5ff3185361a6ef40049ff8da')
    .then((result) =>{
      res.send(result)
    })
    .catch((err)=> {
      console.log(err);
    });

}

exports.singleid_album = function(req, res){
    const id = req.params.id;
    Album.findById(id)
    .then(result =>{
      res.render('album-details.ejs', {album: result, title: 'Groovy | Album'})
    })
    .catch(err =>{
      console.log(err);
    })

}

exports.render_album = function(req,res){
    Album.find()
    .then((result) =>{
      res.render('album.ejs', { title:'All Albums', album: result})
    })
    .catch((err)=> {
      console.log(err);
    });

}