// tell server to look at index.js
const express = require('express'),
bodyParser = require('body-parser');

//Get express
const app = express();

//Tell controller to look at album.js database
const db = require('../models/')

// GET /api/albums


let index = (req, res) => {
  db.Artist.find({}, (err, artists) => {
    if (err) { console.log(err) }
    console.log(`You found the artists`)
    res.json(artists)
  })
}

module.exports = {
  index: index
  // create: create,
  // show: show,
  // destroy: destroy,
  // update: update
};
