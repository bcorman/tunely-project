// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express'),
  bodyParser = require('body-parser');

// generate a new express app and call it 'app'
const app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// tell server to look at index.js
const db = require('./models')

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

//Get controllers
var controllers = require('./controllers');

//Route for Get API

//albums
app.get('/api', controllers.api.index);
app.get('/api/albums', controllers.album.index);
app.get('/api/albums/:id', controllers.album.show);
app.delete('/api/albums/:id', controllers.album.destroy)
app.put('/api/albums/:id', controllers.album.update)
app.post('/api/albums/', controllers.album.create)

//artists
app.get('/api/artists', controllers.artist.index)










//listen to port
app.listen(process.env.PORT || 3000, function () {
  console.log('Tunely listening at http://localhost:3000/');
});
