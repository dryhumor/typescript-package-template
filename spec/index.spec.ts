import {greet} from '../src/index';

describe('greet', () => {
  it('says hello with enthusiasm', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
