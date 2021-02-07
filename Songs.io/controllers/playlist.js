const mongoose = require('mongoose');
const Playlist = require('../models/playlists');
const Song = require('../models/songs');



exports.add_follow = function (req, res) {
    console.log('im in');
    const id = req.params.id;
    console.log(id)

    Playlist.findByIdAndUpdate({
        _id: id
    }, {
        $inc: {
            'followers': 1
        }
    }).then(result => {
        res.redirect('/playlist')
    });

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

exports.update_playlist = function (req, res, next) {
    console.log("in");
    let userId = "5ff71cf173bb222034fd0a46";
    console.log(userId)
    let param = "/playlist/" + userId;
    console.log(param);
    var userParams = {
        title: req.body.playlistname,
        description: req.body.playlistdescription,
        image: req.body.playlistimagelink
    };
    console.log(userParams);

    Playlist.findByIdAndUpdate(userId, {
            $set: userParams
        })
        .then(user => {
            res.redirect(param);
            res.locals.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        });
};