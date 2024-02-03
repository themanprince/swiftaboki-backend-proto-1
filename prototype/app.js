var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
var logger = require('morgan');
const cors = require('./middlewares/cors');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
const getUserRouter = require("./routes/getUser");
const redirectRouter = require("./routes/handleRedirection");
const pollRouter = require("./routes/poller");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialised: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter, loginRouter, getUserRouter, redirectRouter, pollRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(8000, () => console.log("Idan is active again"));
module.exports = app;
