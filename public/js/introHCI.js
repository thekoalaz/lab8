'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  initMap();
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', loginSuccessful);
  }
}

function loginSuccessful(response) {
  console.log(response);
  console.log('Logged in as ' + response.name);
  $('.jumbotron .facebookLogin').hide();
  $('.jumbotron #name').html('<h1>' + response.name + '</h1>');
  $('#photo').html('<h1>Profile Photo</h1><img src="' + response.picture.data.url + '" class="img-responsive" />');

}

