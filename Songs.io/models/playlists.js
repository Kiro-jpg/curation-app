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
    creator: {
        type: String,
        required: false
    },
    song: [Songs]
}, {
    timestamps: true
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;