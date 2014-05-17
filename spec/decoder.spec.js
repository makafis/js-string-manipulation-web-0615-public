'use strict';

describe('decoder', function() {

  var decoder;
  var encoder;
  beforeEach(function() {
    decoder = require('../lib/decoder');
    encoder = require('../lib/encoder');
  });

  describe('Decoding Strings', function() {

    it('decodes an encoded string', function() {
      var encoded_value = encoder("my silly string");
      expect(decoder(encoded_value)).toEqual("my silly string");
    });

  });

});
