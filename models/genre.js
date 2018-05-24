var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: String,
  artists: [String],
  albums: [String],
  songs: [String]
});

var Genre = mongoose.model('Genre', GenreSchema);

module.exports = Genre;
