const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    username:{
        type: String,
        required: false
    },
}, {timestamps: true});

const User = mongoose.model('User', usersSchema);
module.exports = User;