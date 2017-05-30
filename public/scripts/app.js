/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var allAlbums = [];
allAlbums.push({
             artistName: 'Ladyhawke',
             name: 'Ladyhawke',
             releaseDate: '2008, November 18',
             genres: [ 'new wave', 'indie rock', 'synth pop' ]
           });
allAlbums.push({
             artistName: 'The Knife',
             name: 'Silent Shout',
             releaseDate: '2006, February 17',
             genres: [ 'synth pop', 'electronica', 'experimental' ]
           });
allAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ]
           });
allAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ]
           });
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');

  for (let i = 0; i < allAlbums.length; i++) {

   function getHtml(){
    return `<div class='row'>
      <div class="col-md-3 col-xs-12 thumbnail album-art">
        <img src="/images/800x800.png" alt="album image">
      </div>

      <div class="col-md-9 col-xs-12">
        <ul class="list-group">
          <li class="list-group-item">
            <h4 class='inline-header'>Album Name:</h4>
            <span class='album-name'>${allAlbums[i].name}</span>
          </li>

          <li class="list-group-item">
            <h4 class='inline-header'>Artist Name:</h4>
            <span class='artist-name'>${allAlbums[i].artistName}</span>
          </li>

          <li class="list-group-item">
            <h4 class='inline-header'>Released date:</h4>
            <span class='album-releaseDate'>${allAlbums[i].releaseDate}</span>
          </li>
        </ul>
      </div>

    </div>`
    }
  let albumsData = getHtml();
  $('.panel-body').append(albumsData);
  };

  $.ajax({
    method: 'GET',
    url: '/api/album',
    success: getAllAlbums,
    error: handleAlbumsError
  });

  function getAllAlbums(json){
    console.log(json);
    allAlbums = json;
  }

  function handleAlbumsError(){
    console.log("Problem fetching data.");
  }

  $('form').on('submit', function(event){
    console.log("this is the event" + event)
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: "/api/album",
      data: $(this).serialize(),
      success: createSuccess,
      error: createError
    })
  });

  function createSuccess(json){
    console.log("This is json: " + json)
    $('#album-form input').val('');
    allAlbums.push(json);
    console.log(allAlbums)
  }

  function createError(){
    console.log("error creating.")
  }



});









// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);

}
