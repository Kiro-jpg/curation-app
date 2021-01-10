const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var passportLocalMongoose =  require("passport-local-mongoose");

const usersSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model('User', usersSchema)
module.exports = User;