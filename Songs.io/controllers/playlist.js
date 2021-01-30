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


exports.delete_playlist = function (req, res) {
    const id = req.params.id;
    console.log(id);

    Playlist.findByIdAndDelete(id).then(result => {
            res.redirect('/playlist')
        })
        .catch(err => {
            console.log(err);
        })
}

exports.add_singlelist = function (req, res) {
    const id = req.params.id;

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
    console.log(req.session.email);
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