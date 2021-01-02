var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


// routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var albumRouter = require('./routes/album');
var artistRouter = require('/routes/artist');
var playlistRouter = require('./routes/playlist');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/album', albumRouter);
app.use('/artist', artistRouter);
app.use('/playlist', playlistRouter);


// port
const port = 3000;

// database
const dbURL = 'mongodb+srv://josh:Test1234@groovy.x687l.mongodb.net/groovy-db?retryWrites=true&w=majority'
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})).catch((err) => console.log(err));


// express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



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