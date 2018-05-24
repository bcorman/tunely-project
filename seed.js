const db = require('./models');

var sampleAlbums = [{
  artist: 'Ladyhawke',
  name: 'Ladyhawke',
  releaseDate: '2008, November 18',
  genre: [ 'new wave', 'indie rock', 'synth pop' ]
}, {
  artist: 'The Knife',
  name: 'Silent Shout',
  releaseDate: '2006, February 17',
  genre: [ 'synth pop', 'electronica', 'experimental' ]
}, {
  artist: 'Juno Reactor',
  name: 'Shango',
  releaseDate: '2000, October 9',
  genre: [ 'electronic', 'goa trance', 'tribal house' ]
}, {
  artist: 'Philip Wesley',
  name: 'Dark Night of the Soul',
  releaseDate: '2008, September 12',
  genre: [ 'piano' ]
}];

var sampleArtists = [{
  name: 'Ladyhawke'
}, {
  name: 'The Knife'
}, {
  name: 'Juno Reactor'
}, {
  name: 'Philip Wesley'
}]


//remove all artists
db.Artist.remove({}, (err, success) => {
  if (err) { console.log(err) }
  console.log(`removed all artists`)

  //create all artists
  db.Artist.create(sampleArtists, (err, artists) => {
    if (err) { console.log(err) }
    console.log(`created artists`)

//remove all albums
    db.Album.remove({}, (err, success) => {
      if (err) { console.log(err) }
      console.log(`removed all artists`)

//create new album
      sampleAlbums.forEach( album => {
        let newAlbum = new db.Album({
          name: album.name,
          releaseDate: album.releaseDate,
          genre: album.genre
        })

        //for each album, find an artist from the artist database
        db.Artist.findOne({name: album.artist}, (err, foundArtist) => {
          if (err) { console.log(err) }
          newAlbum.artist = foundArtist
          //save the album to the database
          newAlbum.save((err,success) => {
            if (err) { console.log(err) }
            console.log(`success`)
          })
        })
      })
    })
  })
})

// db.Author.remove({}, (err, success) => {
//   if (err) { console.log(err) }
//   console.log(`Removed all authors`)
//
//   db.Author.create(authors_list, (err, authors) => {
//     if (err) { console.log(err) }
//     console.log(`recreated all authors`)
//     console.log(`created ${authors.length} authors`)
//
//     db.Book.remove({}, (err, success) => {
//       if (err) { console.log(err) }
//       console.log(`Removed all books`)
//       books_list.forEach( bookData => {
//         let book = new db.Book({
//           title: bookData.title,
//           image: bookData.image,
//           releaseDate: bookData.releaseDate
//         })
//         db.Author.findOne({name: bookData.author}, (err, foundAuthor) => {
//           console.log(`found author ${foundAuthor.name} for book ${book.title}`)
//           if (err) { console.log(err) }
//           book.author = foundAuthor
//           book.save((err, succ) => {
//             if(err){ return console.log(err) }
//             console.log(succ);
//           })
//
//         })
//       })
//     })
//   })
// })
