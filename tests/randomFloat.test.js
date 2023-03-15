const { randomFloat } = require('../cjs/index.js');

describe('randomFloat', () => {
    test('throws an error if max parameter is not a number', () => {
      expect(() => randomFloat('foo')).toThrow();
    });
  
    test('throws an error if min parameter is not a number', () => {
      expect(() => randomFloat(10, 'foo')).toThrow();
    });
  
    test('throws an error if max is less than or equal to min', () => {
      expect(() => randomFloat(5, 10)).toThrow();
      expect(() => randomFloat(10, 10)).toThrow();
    });
  
    test('returns a number if parameters are valid', () => {
      const result = randomFloat(10);
      expect(typeof result).toBe('number');
    });
  });
  

test('the output is a float', () => {
    const result = randomFloat(356.4);
    expect(typeof result)
        .toBe('number');
    expect(Number.isInteger(result))
        .toBeFalsy(); 
}); 