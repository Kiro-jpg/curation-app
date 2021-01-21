const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type: String
    },
    duration: {
        type: Number
    },
    artist: {
        type: String
    },
    album: {
        type: String
    }
}, {
    timestamps: true
});

const Song = mongoose.model('Song', songSchema)
module.exports = Song;