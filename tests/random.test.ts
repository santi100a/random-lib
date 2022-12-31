const { random } = require('../cjs/index.cjs');
const THRESHOLD = 500;

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
        random(-THRESHOLD);
    } catch (err) { 
        fail(err);
    }
});
