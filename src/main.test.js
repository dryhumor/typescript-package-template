const assert = require('assert');
const baretest = require('baretest');

const main = require('../lib/main');

const test = baretest('Main tests');

test('greet', () => {
  assert.equal(main.greet('World'), 'Hello, World!');
});

test('greet fail', () => {
  assert.equal(main.greet('World'), 'Hello, world');
});

test.run();
