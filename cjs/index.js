"use strict";
exports.__esModule = true;
exports.randomFloats = exports.randomIntegers = exports.randomFromArray = exports.randomFloat = exports.random = void 0;
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
    var CONDITION = (max > 0 ? max > min : max > (Number.NEGATIVE_INFINITY || -Infinity)) &&
        Number.isInteger(max);
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
/**
 * Returns a pseudo-random floating-point number between min and max.
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random floating-point number between min and max.
 */
function randomFloat(max, min) {
    if (min === void 0) { min = 0.0; }
    (0, cjs_1.assertType)(max, 'number');
    (0, cjs_1.assertType)(min, 'number');
    var CONDITION = max > 0.0 ? max > min : max > (Number.NEGATIVE_INFINITY || -Infinity);
    (0, cjs_1.assert)(CONDITION, {
        expected: true,
        actual: CONDITION,
        operator: '>'
    });
    if (!min)
        return Math.random() * max;
    return Math.random() * (max - min + 1.0) + min;
}
exports.randomFloat = randomFloat;
function __isArray(arr) {
    var _a;
    return ((_a = Array === null || Array === void 0 ? void 0 : Array.isArray) === null || _a === void 0 ? void 0 : _a.call(Array, arr)) || arr instanceof Array;
}
/**
 * Returns a random item from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
function randomFromArray(array) {
    var isArray = __isArray(array);
    var isNotEmpty = array.length !== 0;
    (0, cjs_1.assert)(isArray, {
        expected: true,
        actual: isArray,
        operator: '__isArray()'
    });
    (0, cjs_1.assert)(isNotEmpty, {
        expected: true,
        actual: isNotEmpty,
        operator: '==='
    });
    return array[random(array.length)];
}
exports.randomFromArray = randomFromArray;
var DEFAULT_MAX = 300;
/**
 * Returns an array with `amount` random integers.
 *
 * @param amount The amount of random integers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
function randomIntegers(amount, opts) {
    if (amount === void 0) { amount = 4; }
    if (opts === void 0) { opts = {}; }
    __checkRandomArraysErrors(amount, opts);
    var _a = opts.max, max = _a === void 0 ? DEFAULT_MAX : _a, _b = opts.min, min = _b === void 0 ? 0 : _b;
    var internal = [];
    for (var i = 0; i < amount; i++) {
        internal[internal.length] = random(max, min);
    }
    return internal;
}
exports.randomIntegers = randomIntegers;
function __isNullOrUndefined(a) {
    return a === null || a === undefined;
}
function __isInteger(num) {
    var _a;
    return (((_a = Number === null || Number === void 0 ? void 0 : Number.isInteger) === null || _a === void 0 ? void 0 : _a.call(Number, num)) ||
        (num < 0 ? Math.ceil(num) : Math.floor(num)) === num);
}
function __checkRandomArraysErrors(amount, opts) {
    if (typeof amount !== 'number')
        throw new TypeError("\"amount\" must be a number. Got \"".concat(amount, "\" of type \"").concat(typeof amount, "\"."));
    if (amount < 0)
        throw new RangeError("\"amount\" must be positive or zero. Got \"".concat(amount, "\"."));
    if (!__isInteger(amount))
        throw new RangeError("\"amount\" must be an integer. Got \"".concat(amount, "\"."));
    if (!__isNullOrUndefined(opts.max) && typeof opts.max !== 'number')
        throw new TypeError("\"opts.max\", if specified, must be a number. Got \"".concat(opts.max, "\" of type \"").concat(typeof opts.max, "\"."));
    if (!__isNullOrUndefined(opts.min) && typeof opts.min !== 'number')
        throw new TypeError("\"opts.min\", if specified, must be a number. Got \"".concat(opts.min, "\" of type \"").concat(typeof opts.min, "\"."));
}
/**
 * Returns an array with `amount` random floating-point numbers.
 *
 * @param amount The amount of random floating-point numbers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
function randomFloats(amount, opts) {
    if (amount === void 0) { amount = 4; }
    if (opts === void 0) { opts = {}; }
    __checkRandomArraysErrors(amount, opts);
    var _a = opts.max, max = _a === void 0 ? DEFAULT_MAX : _a, _b = opts.min, min = _b === void 0 ? 0 : _b;
    var internal = [];
    for (var i = 0; i < amount; i++) {
        internal[internal.length] = randomFloat(max, min);
    }
    return internal;
}
exports.randomFloats = randomFloats;
