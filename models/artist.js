var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArtistSchema = new Schema({
  name: String,
  albums: [{
       type: Schema.Types.ObjectId,
       ref: 'Album'
     }],
  songs: [String],
  birthYear: Number,
  lastWork: String,
  genre: [String],
  alive: Boolean,
  image: String
});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
