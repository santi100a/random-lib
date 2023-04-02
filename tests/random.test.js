const { random } = require('../cjs/index.js');
const THRESHOLD = 500;
describe('error handling', () => {
    test('throws a TypeError if max parameter is not a number', () => {
      expect(() => random('foo')).toThrow();
    });
  
    test('throws a TypeError if min parameter is not a number', () => {
      expect(() => random(10, 'foo')).toThrow();
    });
  
    test('throws an AssertionError if max is less than or equal to min', () => {
      expect(() => random(5, 10)).toThrow();
      expect(() => random(10, 10)).toThrow();
    });
  
    test('returns a number if parameters are valid', () => {
      const result = random(10);
      expect(typeof result).toBe('number');
    });
  });
  
test('the output is a number', () => {
    const out = random(THRESHOLD);
    expect(typeof out)
        .toBe('number');
});
test('the output is not bigger than the threshold', () => {
    const out = random(THRESHOLD);
    expect(out > THRESHOLD)
        .toBe(false);
});
test('the function must accept negative numbers', () => {
    try { 
        random(-THRESHOLD, -1);
    } catch (err) { 
        fail(err);
    }
});
test('it can produce an integer output', () => {
    const array = Array(300).fill(THRESHOLD).map(random);
    for (const float of array) {
        expect(Number.isInteger(float)).toBeTruthy();
    }
});
