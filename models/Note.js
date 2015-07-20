var mongoose = require('mongoose');

/**
 * @module Note
 *
 * Notes are essentially just strings of text with timestamps attached. Nothing
 * special going on here.
 */
var schema = new mongoose.Schema({
  text: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', schema);
