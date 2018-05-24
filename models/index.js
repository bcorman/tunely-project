var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");


module.exports = {
  Artist: require('./artist.js'),
  Album: require('./album.js'),
  Song: require('./song.js'),
  Genre: require('./genre.js')
}


// module.exports.Author = require('./author.js');
// module.exports.Book = require("./book.js");
