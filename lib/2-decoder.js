'use strict';

var decoder = function(message){
  //code your solution here
  message = message.replace(/3/g, 'e');
  message = message.replace(/8/g, 'g');
  message = message.replace(/5/g, 's');
  message = message.replace(/6/g, 'b');
  return message;
};
