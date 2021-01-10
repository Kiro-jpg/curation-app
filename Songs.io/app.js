var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var bcrypt = require('bcryptjs');


var User = require("./models/users"); 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var albumRouter = require('./routes/album');
var artistRouter = require('./routes/artist');
var playlistRouter = require('./routes/playlist');
var createRouter = require('./routes/create');
var loginRouter = require('./routes/login');
// express
var app = express();




// port
const port = 3000;

// database
const dbURL = 'mongodb+srv://josh:test1234@groovy.x687l.mongodb.net/groovy-db?retryWrites=true&w=majority'
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => app.listen(port, () => {
  console.log(`Listening at http://localhost:3000`)
})).catch((err) => console.log(err));




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended:true }));

// routes
app.use(passport.initialize()); 
app.use(passport.session()); 
  
passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

app.use(indexRouter);
app.use(usersRouter);
app.use(aboutRouter);
app.use(albumRouter);
app.use(artistRouter);
app.use(playlistRouter);
app.use(createRouter);
app.use(loginRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})


// basic routes
app.get('/', (req, res) => {
  res.send('HAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHA')
})






module.exports = app;