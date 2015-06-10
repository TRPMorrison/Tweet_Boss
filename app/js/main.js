;(function (){
  
  'use strict';

  // Page Elements (Constants)
  var tweetInput = $('#tweetInput'),
      tweetForm = $('#addTweet');


  // Tweet Constructor (Blueprint)
  var Tweet = function (message) {
    this.message = message;
    this.timestamp = Date.now();
  };


  // Add Tweet Function
  var addTweet = function (e) {

    e.preventDefault();

    console.log('Adding Tweet');

  };

  // Submit Handler
  tweetForm.on('submit', addTweet);

}());