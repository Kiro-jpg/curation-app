const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type: String
    },
    duration: {
        type: String
    },
    artist: {
        type: String
    },
    album: {
        type: String
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});

const Song = mongoose.model('Song', songSchema)
module.exports = Song;