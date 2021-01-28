const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Playlist = require('../models/playlists').schema


const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    playlist: [Playlist]
}, {
    timestamps: true
});

const User = mongoose.model('User', usersSchema)
module.exports = User;