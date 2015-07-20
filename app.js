var express = require('express');
var bodyParser = require('body-parser');
require('./config/database.js');

var Note = require('./models/Note.js');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded());

// Create notes
app.post('/notes', function(req, res, next) {
  var note = new Note(req.body);
  note.save().then(function() {
    res.redirect('/');
  }, next);
});

// View notes as json
app.get('/notes', function(req, res, next) {
  Note.find({}).then(function(notes) {
    res.send(notes);
  }, next);
});

// Main app route
app.get('/', function(req, res, next) {
  Note.find({}).then(function(notes) {
    res.render('index', { notes: notes });
  }, next);
});

app.listen(app.get('port'), function() {
  console.log('App listening on port ' + app.get('port'));
});
