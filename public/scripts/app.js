/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


// hard-coded data
var sampleAlbums = [{
  artist: 'Ladyhawke',
  name: 'Ladyhawke',
  releaseDate: '2008, November 18',
  genre: [ 'new wave', 'indie rock', 'synth pop' ]
}, {
  artistName: 'The Knife',
  name: 'Silent Shout',
  releaseDate: '2006, February 17',
  genre: [ 'synth pop', 'electronica', 'experimental' ]
}, {
  artistName: 'Juno Reactor',
  name: 'Shango',
  releaseDate: '2000, October 9',
  genre: [ 'electronic', 'goa trance', 'tribal house' ]
}, {
  artistName: 'Philip Wesley',
  name: 'Dark Night of the Soul',
  releaseDate: '2008, September 12',
  genre: [ 'piano' ]
}];


$(document).ready(function() {
  console.log('app.js loaded!');
});


// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);
}
