'use strict';

describe('encoder', function() {

  var encoder;
  beforeEach(function() {
    encoder = require('../lib/encoder');
  });

  describe('Encoding strings', function() {

    it('modifies the string', function() {
      expect(encoder("my silly string")).not.toEqual("my silly string");
    });

    it('returns a value', function() {
      expect(encoder("my silly string")).not.toBeUndefined();
    });

  });

});
