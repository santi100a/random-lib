// @ts-check
/// <reference path="index.d.cts" />

const { assert, assertType } = require('@santi100/assertion-lib/cjs')

function random(max, min = 0) {
    assertType(max, 'number'); assertType(min, 'number');
    const CONDITION = (max > 0 ? 
            max > min : 
            max > (Number.NEGATIVE_INFINITY || -Infinity))
         && Number.isInteger(max);
    assert(
        CONDITION, 
        {
            expected: true,
            actual: CONDITION,
            operator: '==='
        }
    );
    if (!min) return Math.floor(Math.random() * max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFloat(max, min = 0.0) {
    assertType(max, 'number'); assertType(min, 'number');
    const CONDITION = (max > 0.0 ? 
        max > min : 
        max > (Number.NEGATIVE_INFINITY || -Infinity))
    assert(CONDITION, {
        expected: true,
        actual: CONDITION,
        operator: '>'
    });
    if (!min) return Math.random() * max;
    return (Math.random() * (max - min + 1.0)) + min;
}
const randomFromArray = array => {
    const CONDITION = Array.isArray(array);
    assert(CONDITION, { 
        expected: true,
        actual: CONDITION,
        operator: 'Array.isArray()'
    });

    return array[random(array.length)];
};

exports.random = random;
exports.randomFloat = randomFloat; 
exports.randomFromArray = randomFromArray;