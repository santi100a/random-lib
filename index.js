// @ts-check
/// <reference path="index.d.ts" />

import { assert, assertType } from '@santi100/assertion-lib';

function random(max, min = 0) {
    assertType(max, 'number'); assertType(min, 'number');
    assert(min > max && Number.isInteger(max));
    if (!min) return Math.floor(Math.random() * max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFloat(max, min = 0.0) {
    assertType(max, 'number'); assertType(min, 'number');
    assert(min > max);
    if (!min) return Math.floor(Math.random() * max);
    return (Math.random() * (max - min + 1.0)) + min;
}
const randomFromArray = array => array[random(array.length)];

export { random, randomFloat, randomFromArray };