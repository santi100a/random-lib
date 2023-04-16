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
exports.randomDates = exports.randomDate = exports.randomLetters = exports.randomUppers = exports.randomLowers = exports.randomLetter = exports.randomUpper = exports.randomLower = exports.LETTERS = exports.UPPERS = exports.LOWERS = exports.randomFloats = exports.randomIntegers = exports.DEFAULT_RANDOM_NUMBERS_MAX = exports.randomFromArray = exports.randomFloat = exports.random = void 0;
var assertion_lib_1 = require("@santi100/assertion-lib");
/**
 * Returns a pseudo-random integer between min and max.
 * @param max The maximum value.
 * @param min The minimum value (0 by default).
 * @returns A pseudo-random integer between min and max.
 */
function random(max, min) {
    if (min === void 0) { min = 0; }
    (0, assertion_lib_1.assertTypeOf)(max, 'number', 'max');
    (0, assertion_lib_1.assertTypeOf)(min, 'number', 'min');
    (0, assertion_lib_1.assertInteger)(max, 'max');
    (0, assertion_lib_1.assertInteger)(min, 'min');
    (0, assertion_lib_1.assertMax)(max, 'max', Infinity);
    (0, assertion_lib_1.assertMin)(min, 'min', -Infinity);
    if (max >= 0 && min >= 0)
        (0, assertion_lib_1.assertMin)(max, 'max', min + 1);
    else
        (0, assertion_lib_1.assertMin)(-max, 'max', -min + 1);
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
 * @param array The array from which you want to pick a/some random item(s).
 * @param amount How many items do you want (default is 1).
 * @returns A random item from the given array.
 */
function randomFromArray(array, amount) {
    if (amount === void 0) { amount = 1; }
    (0, assertion_lib_1.assertArray)(array, 'array');
    (0, assertion_lib_1.assertMin)(array.length, 'array.length', 1);
    (0, assertion_lib_1.assertTypeOf)(amount, 'number', 'amount');
    (0, assertion_lib_1.assertMin)(amount, 'amount', 1);
    (0, assertion_lib_1.assertInteger)(amount, 'amount');
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
exports.DEFAULT_RANDOM_NUMBERS_MAX = 300;
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
    var _a = opts.max, max = _a === void 0 ? exports.DEFAULT_RANDOM_NUMBERS_MAX : _a, _b = opts.min, min = _b === void 0 ? 0 : _b;
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
 * @returns An array of random floating-point numbers.
 */
function randomFloats(amount, opts) {
    if (amount === void 0) { amount = 4; }
    if (opts === void 0) { opts = {}; }
    __checkRandomArraysErrors(amount, opts);
    var _a = opts.max, max = _a === void 0 ? exports.DEFAULT_RANDOM_NUMBERS_MAX : _a, _b = opts.min, min = _b === void 0 ? 0 : _b;
    var internal = [];
    for (var i = 0; i < amount; i++) {
        internal[internal.length] = randomFloat(max, min);
    }
    return internal;
}
exports.randomFloats = randomFloats;
exports.LOWERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
exports.UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
exports.LETTERS = __spreadArray(__spreadArray([], exports.LOWERS, true), exports.UPPERS, true);
/**
 * Returns a random lowercase letter.
 * @returns A random lowercase letter.
 */
function randomLower() {
    return randomFromArray(exports.LOWERS);
}
exports.randomLower = randomLower;
/**
 * Returns a random uppercase letter.
 * @returns A random uppercase letter.
 */
function randomUpper() {
    return randomFromArray(exports.UPPERS);
}
exports.randomUpper = randomUpper;
/**
 * Returns a random letter.
 * @returns A random letter.
 */
function randomLetter() {
    return randomFromArray(exports.LETTERS);
}
exports.randomLetter = randomLetter;
/**
 * Returns `amount` random lowercase letters.
 * @param amount How many random lowercase letters to return.
 * @returns An array of random lowercase letters.
 */
function randomLowers(amount) {
    if (amount === 0)
        return [];
    return randomFromArray(exports.LOWERS, amount);
}
exports.randomLowers = randomLowers;
/**
 * Returns `amount` random uppercase letters.
 * @param amount How many random uppercase letters to return.
 * @returns An array of random uppercase letters.
 */
function randomUppers(amount) {
    if (amount === 0)
        return [];
    return randomFromArray(exports.UPPERS, amount);
}
exports.randomUppers = randomUppers;
/**
 * Returns `amount` random letters.
 * @param amount How many random letters to return.
 * @returns An array of random letters.
 */
function randomLetters(amount) {
    if (amount === 0)
        return [];
    return randomFromArray(exports.LETTERS, amount);
}
exports.randomLetters = randomLetters;
/**
 * Generates a random date between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @returns A `Date` object representing a random date between `minDate` and `maxDate`.
 */
function randomDate(minDate, maxDate) {
    (0, assertion_lib_1.assertInstanceOf)(minDate, Date);
    (0, assertion_lib_1.assertInstanceOf)(maxDate, Date);
    var randomTs = random(maxDate.getTime(), minDate.getTime());
    return new Date(randomTs);
}
exports.randomDate = randomDate;
/**
 * Generates `amount` random dates between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @param amount The amount of dates to generate.
 * @returns An array of `Date` objects representing some random dates between `minDate` and `maxDate`.
 */
function randomDates(minDate, maxDate, amount) {
    (0, assertion_lib_1.assertInstanceOf)(minDate, Date);
    (0, assertion_lib_1.assertInstanceOf)(maxDate, Date);
    var randomTs = randomIntegers(amount, {
        max: maxDate.getTime(),
        min: minDate.getTime()
    });
    var dates = [];
    for (var _i = 0, randomTs_1 = randomTs; _i < randomTs_1.length; _i++) {
        var ts = randomTs_1[_i];
        dates.push(new Date(ts));
    }
    return dates;
}
exports.randomDates = randomDates;
