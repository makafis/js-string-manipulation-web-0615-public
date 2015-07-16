'use strict';

var encoder = function(message){
  message = message.replace(/e/g, 3);
  message = message.replace(/g/g, 8);
  message = message.replace(/s/g, 5);
  message = message.replace(/b/g, 6);
  return message;
};
