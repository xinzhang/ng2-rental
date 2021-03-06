var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = new express();
var port = process.env.PORT || 5001;

//var UserModel = require('./corlateSchema.js');

var authRoutes = require('./routes/authRoutes');
var gameRoutes = require('./routes/gameRoutes');
var gameLibraryRoutes = require('./routes/gameLibraryRoutes');
var paymentRoutes = require('./routes/paymentRoutes');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'xz_MEA2N'}));

require('./passport')(app);

console.log(__dirname);

app.use('/', express.static(__dirname + '/../dist'));
app.use('/auth', authRoutes);
app.use('/game', gameRoutes)
app.use('/gamelib', gameLibraryRoutes)
app.use('/payment', paymentRoutes)

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
