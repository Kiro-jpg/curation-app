const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Songs = require('./songs').schema

const artistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    bg: {
        type: String,
        required: true
    },
    song: [Songs],
    description: String

}, {
    timestamps: true
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;