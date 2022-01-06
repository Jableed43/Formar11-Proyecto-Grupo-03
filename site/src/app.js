require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
const {urlencoded} = require('express')
const multer = require('multer')
const session = require('express-session');
const localUserCheck = require('./middlewares/localUserCheck');
const recordame = require('./middlewares/cookieReminder');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require ('./routes/products');
var adminRouter = require ('./routes/admin');
var cartRouter = require ('./routes/cart');

const cookieReminder = require('./middlewares/cookieReminder');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..','public')));
app.use(methodOverride('_method'));

app.use(session({
  secret: 'cookie_secret',
  resave: true,
  saveUninitialized: true
}));
app.use(recordame);

app.use(cookieReminder);
app.use(localUserCheck);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);
app.use('/cart', cartRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('404')
});


// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('500');
// });

module.exports = app;
