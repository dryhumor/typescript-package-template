const main = require('../lib/main');

describe('greet', () => {
  it('says hello with enthusiasm', () => {
    expect(main.greet('World')).toBe('Hello, World!');
  });

  it('fails', () => {
    expect(main.greet('World')).toBe('Hello, world');
  });
});
