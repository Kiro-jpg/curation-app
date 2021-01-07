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
    }
}, {timestamps: true});

usersSchema.methods.authenticate = function(password) {
    //implementation code goes here
  }

usersSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', usersSchema);