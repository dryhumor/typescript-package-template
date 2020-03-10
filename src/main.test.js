const assert = require('assert');

const main = require('../lib/main');

describe('main', () => {
  describe('.greet()', () => {
    it('says hello with enthusiasm', () => {
      assert.equal(main.greet('World'), 'Hello, World!');
    });

    it('should return -1 when the value is not present', () => {
      assert.equal(main.greet('World'), 'Hello, world');
    });
  });
});
