/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


// hard-coded data
// var sampleAlbums = [{
//   artist: 'Ladyhawke',
//   name: 'Ladyhawke',
//   releaseDate: '2008, November 18',
//   genre: [ 'new wave', 'indie rock', 'synth pop' ]
// }, {
//   artistName: 'The Knife',
//   name: 'Silent Shout',
//   releaseDate: '2006, February 17',
//   genre: [ 'synth pop', 'electronica', 'experimental' ]
// }, {
//   artistName: 'Juno Reactor',
//   name: 'Shango',
//   releaseDate: '2000, October 9',
//   genre: [ 'electronic', 'goa trance', 'tribal house' ]
// }, {
//   artistName: 'Philip Wesley',
//   name: 'Dark Night of the Soul',
//   releaseDate: '2008, September 12',
//   genre: [ 'piano' ]
// }];

let albumList = $('#albums')

let renderAlbum = (album) => {
  console.log(`I have returned with ajax ${album}`)

  albumList.append(`<div class="row album" id='${album._id}'>

    <div class="col-md-10 col-md-offset-1">
      <div class="panel panel-default">
        <div class="panel-body">

        <!-- begin album internal row -->
          <div class='row'>
            <div class="col-md-3 col-xs-12 thumbnail album-art">
              <img src="/images/800x800.png" alt="album image">
            </div>

            <div class="col-md-9 col-xs-12">
              <ul class="list-group">
                <li class="list-group-item">
                  <h4 class='inline-header'>Album Name:</h4>
                  <span class='album-name'>${album.name}</span>
                </li>

                <li class="list-group-item">
                  <h4 class='inline-header'>Artist Name:</h4>
                  <span class='artist-name'>${album.artist.name}</span>
                </li>

                <li class="list-group-item">
                  <h4 class='inline-header'>Released date:</h4>
                  <span class='album-releaseDate'>${album.releaseDate}</span>
                </li>
              </ul>
            </div>

          </div>
          <!-- end of album internal row -->

          <div class='panel-footer'>
          </div>

        </div>

      </div>

    </div>

  </div>
  `
  )
}
let getAllAlbums = () => {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: (response) => {
      console.log(response)
      response.forEach(album => {
        renderAlbum(album)
      })

    },
    error: (a, b, c) => {
      console.log(a, b, c)
    }
  })
}
$(document).ready(function() {
  console.log('app.js loaded!');
  // renderAlbum('test album', 'test artist', 'fake year', 64746)
  getAllAlbums();
// this function takes a single album and renders it to the page
// function renderAlbum(album) {
//   console.log('rendering album:', album);
// }

// let fakePost = {
//     name: "testAlbum",
//     label: "testLabel",
//     releaseDate: "nov 1 2018",
//     genre: "easy listening",
//     artist: "test artist"
// }
//
// let fakePost2 = {
//     name: "testAlbum",
//     label: "testLabel",
//     releaseDate: "nov 1 2018",
//     genre: "easy listening",
//     artist: "Ladyhawke"
// }
// $('#albums').on('click', (e) => {
//   console.log(e.currentTarget.id)
//   $.ajax({
//       method: 'POST',
//       url: '/api/albums',
//       data:fakePost,
//       success: deleteAlbumSuccess,
//       error: deleteAlbumError
//     });
// })



function deleteAlbumSuccess(json) {
  var album = json;
  console.log(json);
  // var albumId = album._id;
  console.log('delete book');
  // find the book with the correct ID and remove it from our allBooks array
  // for(var index = 0; index < allBooks.length; index++) {
  //   if(allBooks[index]._id === bookId) {
  //     allBooks.splice(index, 1);
  //     break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
  //   }
  // }
  // render();
}

function deleteAlbumError() {
  console.log('deletebook error!');
}






















});
