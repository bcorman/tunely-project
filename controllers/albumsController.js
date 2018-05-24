// tell server to look at index.js
const express = require('express'),
bodyParser = require('body-parser');

//Get express
const app = express();

//Tell controller to look at album.js database
const db = require('../models/')

// GET /api/albums


let index = (req, res) => {
  db.Album.find({})
    .populate('artist')
    .exec((err, albums) => {
      if (err) { console.log(err) }
      console.log(`You found the albums`)
      res.json(albums)
  })
}



  // send back all albums as JSON




// POST /api/albums
let create = (req, res) => {
  let newAlbum = new db.Album ({
    name: req.body.albumName,
    genre: req.body.genre,
    label: req.body.label,
    releaseDate: req.body.releaseDate
  })

  db.Artist.findOne({name: req.body.artist}, (err, artist) => {
    if (artist === null) {
      db.Artist.create(req.body.artist, (err, newArtist) => {
        if (err) { console.log(err) }
        newArtist.name = req.body.artist
        newAlbum.artist = newArtist
      })
    } else {
      newAlbum.artist = artist
    }
  })
}
// app.post('/api/books', (req, res) => {
//   let newBook = new db.Book ({
//     title: req.body.title,
//     image: req.body.image,
//     releaseDate: req.body.releaseDate
//   })
//
//   db.Author.findOne({name: req.body.author}, (err, author) => {
//     if (!author) {
//       db.Author.create(req.body.author, (err, newAuthor) => {
//         if (err) { console.log(err) }
//         newAuthor = req.body.author
//       })
//     }
//     newBook.author = author || newAuthor
//     newBook.save((err, success) => {
//       if (err) { console.log(err) }
//       console.log(book)
//       res.json(book)
//     })
//   })
// })
  // create an album based on request body and send it back as JSON


// GET /api/albums/:albumId
let show = (req, res) => {
  // find one album by id and send it back as JSON
  let id = req.params.id
  db.Album.findById(id, (err, foundAlbum) => {
    if (err) { console.log(err) }
    console.log(`found ${foundAlbum}`)
    res.json(foundAlbum)
  })
}

// DELETE /api/albums/:albumId
let destroy = (req, res) => {
  // find one album by id, delete it, and send it back as JSON
  let id = req.params.id
  db.Album.findByIdAndRemove(id, (err, destroyed) => {
    if (err) { console.log(err) }
    console.log(`deleted album`)
    res.json(destroyed)
  })
}

// PUT or PATCH /api/albums/:albumId
let update = (req, res) => {
  // find one album by id, update it based on request body,
  // and send it back as JSON
  let id = req.params.id
  db.Album.findByIdAndUpdate(id, (err, updatedAlbum) => {
    if (err) { console.log(err) }
    console.log(`updatedAlbum`)
    res.json(updatedAlbum)
  })
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
