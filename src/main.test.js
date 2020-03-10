const test = require('ava');

const main = require('../lib/main');

test('greet says hello with enthusiasm', t => {
  t.is(main.greet('World'), 'Hello, World!');
});

test('greet fails', t => {
  t.is(main.greet('World'), 'Hello, world');
});
