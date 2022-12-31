const { randomFloat } = require('../cjs/index.cjs');

test('the output is a float', () => {
    const result = randomFloat(356.4);
    expect(typeof result)
        .toBe('number');
    expect(Number.isInteger(result))
        .toBe(false); 
}); 