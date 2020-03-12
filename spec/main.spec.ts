import {greet} from '../src/main';

describe('greet', () => {
  it('says hello with enthusiasm', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('fails', () => {
    expect(greet('World')).toBe('Hello, world');
  });
});
