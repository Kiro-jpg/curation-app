const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description:{
        type: String,
        required: false
    },
    // loop songs from database for each (display songs inside database)
    // manual display one by one
    // song id and this id contains all the songs
    songs:{
        type: String,
        required: true
    } // id = 1

})

const Playlist = mongoose.model('Playlist', playlistSchema);