"use strict";
exports.__esModule = true;
exports.randomFromArray = exports.randomFloat = exports.random = void 0;
var cjs_1 = require("@santi100/assertion-lib/cjs");
/**
 * Returns a pseudo-random integer between min and max.
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random integer between min and max.
 */
function random(max, min) {
    if (min === void 0) { min = 0; }
    (0, cjs_1.assertType)(max, 'number');
    (0, cjs_1.assertType)(min, 'number');
    var CONDITION = (max > 0 ?
        max > min :
        max > (Number.NEGATIVE_INFINITY || -Infinity))
        && Number.isInteger(max);
    (0, cjs_1.assert)(CONDITION, {
        expected: true,
        actual: CONDITION,
        operator: '==='
    });
    if (!min)
        return Math.floor(Math.random() * max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.random = random;
function randomFloat(max, min) {
    if (min === void 0) { min = 0.0; }
    (0, cjs_1.assertType)(max, 'number');
    (0, cjs_1.assertType)(min, 'number');
    var CONDITION = (max > 0.0 ?
        max > min :
        max > (Number.NEGATIVE_INFINITY || -Infinity));
    (0, cjs_1.assert)(CONDITION, {
        expected: true,
        actual: CONDITION,
        operator: '>'
    });
    if (!min)
        return Math.random() * max;
    return (Math.random() * (max - min + 1.0)) + min;
}
exports.randomFloat = randomFloat;
/**
 * Returns a random item from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
function randomFromArray(array) {
    var CONDITION = Array.isArray(array);
    (0, cjs_1.assert)(CONDITION, {
        expected: true,
        actual: CONDITION,
        operator: 'Array.isArray()'
    });
    return array[random(array.length)];
}
exports.randomFromArray = randomFromArray;
;
