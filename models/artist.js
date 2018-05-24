var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArtistSchema = new Schema({
  name: String,
  albums: [String],
  songs: [String],
  birthYear: Number,
  lastWork: String,
  genre: [String],
  alive: Boolean,
  image: String
});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
