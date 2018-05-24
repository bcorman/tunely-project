var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  name: String,
  artist: {
       type: Schema.Types.ObjectId,
       ref: 'Artist'
     },
  label: String,
  releaseDate: String,
  genre: [String],
  songs: [String],
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
