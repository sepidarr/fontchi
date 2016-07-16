var express       = require('express'),
    bodyParser    = require('body-parser'),
    cookieParser  = require('cookie-parser'),
    session       = require('express-session'),
    fs            = require('fs'),
    path          = require('path'),
    mime          = require('mime'),
    zipFolder     = require('zip-folder');

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

app.get('/download', function( req, res, next ) {
  var font = req.query.font;
  var type = req.query.type;
  // var file = path.join(path.dirname('./public/fonts-pack/'),
  //                      font, type, 'font.zip');
  // var filename = path.basename(file);
  // var mimetype = mime.lookup(file);

  // res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  // res.setHeader('Content-type', mimetype);

  // var filestream = fs.createReadStream(file);
  // filestream.pipe(res);

  var source = './public/fonts-pack/' + font + '/' + type;

  zipFolder('./public/fonts-pack/' + font + '/' + type, 
  './public/fonts-pack/' + font + '/' + type + '.zip', 
  function(err) {
    if (err) {
        console.log('oh no!', err);
    } else {
        console.log('EXCELLENT');
    }
  });
});

module.exports = app;
