const main = require('../lib/main');

test('greet says hello with enthusiasm', () => {
  expect(main.greet('World')).toBe('Hello, World!');
});

test('greet fails', () => {
  expect(main.greet('World')).toBe('Hello, world');
});
