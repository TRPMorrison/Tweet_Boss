;(function (){
  
  'use strict';

  var Tweet = function (message) {
    this.message = message;
    this.timestamp = Date.now();
  };

  $('#addToServer').on('click', function (e) {

    e.preventDefault();

    var t = new Tweet('Politics is Hard');

    $.post('http://tiy-515.herokuapp.com/collections/instructor', t);


  }); 

}());