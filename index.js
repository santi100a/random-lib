// @ts-check
/// <reference path="index.d.ts" />

import { assert, assertType } from '@santi100/assertion-lib';

function random(max, min = 0) {
    assertType(max, 'number'); assertType(min, 'number');
    assert(max > min && Number.isInteger(max), {
        expected: true,
        actual: min > max && Number.isInteger(max),
        operator: '> && Number.isInteger()'
    });
    if (!min) return Math.floor(Math.random() * max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFloat(max, min = 0.0) {
    assertType(max, 'number'); assertType(min, 'number');
    assert(max > min, {
        expected: true,
        actual: max > min,
        operator: '>'
    });
    if (!min) return Math.floor(Math.random() * max);
    return (Math.random() * (max - min + 1.0)) + min;
}
const randomFromArray = array => array[random(array.length)];

export { random, randomFloat, randomFromArray };