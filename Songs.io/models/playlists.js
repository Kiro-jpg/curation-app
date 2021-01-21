const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Songs = require('./songs').schema

const playlistSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    songs: {
        type: Array
    },
    creator: {
        type: String,
        required: false
    },
    song: {
        type: [Songs],
        required: false
    }

}, {
    timestamps: true
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;