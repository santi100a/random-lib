"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.randomLetters = exports.randomUppers = exports.randomLowers = exports.randomLetter = exports.randomUpper = exports.randomLower = exports.randomFloats = exports.randomIntegers = exports.randomFromArray = exports.randomFloat = exports.random = void 0;
var assertion_lib_1 = require("@santi100/assertion-lib");
/**
 * Returns a pseudo-random integer between min and max.
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random integer between min and max.
 */
function random(max, min) {
    if (min === void 0) { min = 0; }
    (0, assertion_lib_1.assertTypeOf)(max, 'number', 'max');
    (0, assertion_lib_1.assertTypeOf)(min, 'number', 'min');
    (0, assertion_lib_1.assertInteger)(max, 'max');
    (0, assertion_lib_1.assertInteger)(min, 'min');
    var CONDITION = max > 0 ? max > min : max > -Infinity;
    (0, assertion_lib_1.assert)(CONDITION, {
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
 * @param max The maximum value.
 * @param min The minimum value (0 by default).
 * @returns A pseudo-random floating-point number between min and max.
 */
function randomFloat(max, min) {
    if (min === void 0) { min = 0.0; }
    (0, assertion_lib_1.assertTypeOf)(max, 'number', 'max');
    (0, assertion_lib_1.assertTypeOf)(min, 'number', 'min');
    (0, assertion_lib_1.assertMax)(min, 'min', max - 1);
    if (!min)
        return Math.random() * max;
    return Math.random() * (max - min + 1.0) + min;
}
exports.randomFloat = randomFloat;
/**
 * Returns a/some random item(s) from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
function randomFromArray(array, amount) {
    if (amount === void 0) { amount = 1; }
    (0, assertion_lib_1.assertMin)(array.length, 'array.length', 0);
    (0, assertion_lib_1.assertArray)(array, 'array');
    (0, assertion_lib_1.assertMin)(array.length, 'array.length', 1);
    (0, assertion_lib_1.assertTypeOf)(amount, 'number', 'amount');
    (0, assertion_lib_1.assertMin)(amount, 'amount', 1);
    if (amount > 1) {
        var items = [];
        for (var i = 0; i < amount; i++) {
            items.push(array[random(array.length)]);
        }
        return items;
    }
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
function __checkRandomArraysErrors(amount, opts) {
    (0, assertion_lib_1.assertTypeOf)(amount, 'number', 'amount');
    if (!__isNullOrUndefined(opts.max))
        (0, assertion_lib_1.assertTypeOf)(opts.max, 'number', 'opts.max');
    if (!__isNullOrUndefined(opts.min))
        (0, assertion_lib_1.assertTypeOf)(opts.min, 'number', 'opts.min');
    (0, assertion_lib_1.assertMin)(amount, 'amount', 0);
    (0, assertion_lib_1.assertInteger)(amount, 'amount');
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
var lowers = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var letters = __spreadArray(__spreadArray([], lowers, true), uppers, true);
/**
 * Returns a random lowercase letter.
 * @returns A random lowercase letter.
 */
function randomLower() {
    return randomFromArray(lowers);
}
exports.randomLower = randomLower;
/**
 * Returns a random uppercase letter.
 * @returns A random uppercase letter.
 */
function randomUpper() {
    return randomFromArray(uppers);
}
exports.randomUpper = randomUpper;
/**
 * Returns a random letter.
 * @returns A random letter.
 */
function randomLetter() {
    return randomFromArray(letters);
}
exports.randomLetter = randomLetter;
/**
 * Returns `amount` random lowercase letters.
 * @returns An array of random lowercase letters.
 */
function randomLowers(amount) {
    return randomFromArray(lowers, amount);
}
exports.randomLowers = randomLowers;
/**
 * Returns `amount` random uppercase letters.
 * @returns An array of random uppercase letters.
 */
function randomUppers(amount) {
    return randomFromArray(uppers, amount);
}
exports.randomUppers = randomUppers;
/**
 * Returns `amount` random letters.
 * @returns An array of random letters.
 */
function randomLetters(amount) {
    return randomFromArray(letters, amount);
}
exports.randomLetters = randomLetters;
