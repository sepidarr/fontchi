var express       = require('express'),
    bodyParser    = require('body-parser'),
    cookieParser  = require('cookie-parser'),
    session       = require('express-session'),
    fs            = require('fs'),
    path          = require('path');

var app = express();

var rootDir = path.dirname(require.main.filename);

// TODO: I need to find another place to store these settings
app.use('/static', express.static(rootDir + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('port', process.env.PORT || 3000);
app.set('views', './app/views');
app.set('view engine', 'pug');
// ------------------------ End of express configurations

app.get('/', function( req, res, next ) {
  res.render('index');
});

app.get('/fonts', function( req, res, next ) {
  var fonts = JSON.parse(fs.readFileSync('./public/fonts-pack/fonts.json', 'utf8'));
  res.json({ fonts: fonts });
});

module.exports = app;
