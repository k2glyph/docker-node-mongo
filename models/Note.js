var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  text: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', schema);
