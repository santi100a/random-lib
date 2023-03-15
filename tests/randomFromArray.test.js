describe('randomFromArray', () => {
    const { randomFromArray } = require('../cjs');
    describe('error handling', () => {
        test('throws an error if array parameter is not an array', () => {
            expect(() => randomFromArray('foo')).toThrow();
          });
        
          test('returns an item from the array if it is not empty', () => {
            const arr = [1, 2, 3, 4, 5];
            const result = randomFromArray(arr);
            expect(arr.includes(result)).toBe(true);
          });
        
          test('throws an error if array parameter is an empty array', () => {
            expect(() => randomFromArray([])).toThrow();
          });
    });
  });