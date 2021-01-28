const mongoose = require('mongoose');
const Playlist = require('../models/playlists');
const Song = require('../models/songs');



exports.add_follow = function (req, res) {
    console.log('im in');
    const id = req.query.userType;
    Playlist.findById(id).then(result => {
        Playlist.findOneAndUpdate({
            _id: result
        }, {
            $inc: {
                'followers': 1
            }
        })

    })
};


exports.add_singlelist = function (req, res) {
    const id = req.params.id;
    var follower = 0;
    Playlist.findById(id)
        .then(result => {
            res.render('playlist-details.ejs', {
                playlist: result,
                title: 'Groovy | Playlist',

            })
        })
        .catch(err => {
            console.log(err);
        })
};


exports.get_playlist = function (req, res) {
    Playlist.find()
        .then((result) => {
            res.render('playlist.ejs', {
                title: 'All Playlist',
                playlist: result
            })
        })
        .catch((err) => {
            console.log(err);
        });

};

exports.post_playlist = function (req, res) {
    const playlist = new Playlist(req.body);

    playlist.save()
        .then((result) => {
            res.redirect('/playlist');
        })
        .catch((err) => {
            console.log(err);
        });

};

exports.delete_playlist = function (req, res) {
    const id = req.params.id;
    console.log("dwqeqwdsad");
    Playlist.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect: '/playlist'});
    })
    .catch(err =>{
        console.log (err);
    })
}
