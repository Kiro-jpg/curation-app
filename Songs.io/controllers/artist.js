const mongoose = require('mongoose');
const Artist = require('../models/artists');
const Song = require('../models/songs');

exports.allartist = function(req, res) {

    Artist.find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      })

    }
exports.singleartist = function(req, res) {
        Artist.findById('5ff318b717fee251bcd68b9c')
          .then((result) => {
            res.send(result)
          })
          .catch((err) => {
            console.log(err);
          });
        }

exports.renderartist = function(req,res){
            Artist.find()
            .then((result) =>{
              res.render('artist.ejs', { title:'All Artist', artist: result})
            })
            .catch((err)=> {
              console.log(err);
            });
        }

exports.renderartistID = function(req, res){
            const id = req.params.id;
            Artist.findById(id)
            .then(result =>{
              res.render('artist-details.ejs', {artist: result, title: 'Groovy | Artist'})
            })
            .catch(err =>{
              console.log(err);
            })
        }