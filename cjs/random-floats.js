"use strict";
var _a;
var core_1 = require("./core");
var randomFloat = require("./random-float");
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
var assertInteger = require("@santi100/assertion-lib/cjs/integer");
var assertMin = require("@santi100/assertion-lib/cjs/min");
function __isNullOrUndefined(a) {
    return a === null || a === undefined;
}
function __checkRandomArraysErrors(amount, opts) {
    assertTypeOf(amount, 'number', 'amount');
    if (!__isNullOrUndefined(opts.max))
        assertTypeOf(opts.max, 'number', 'opts.max');
    if (!__isNullOrUndefined(opts.min))
        assertTypeOf(opts.min, 'number', 'opts.min');
    assertMin(amount, 'amount', 0);
    assertInteger(amount, 'amount');
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
    var _a = opts.max, max = _a === void 0 ? core_1.DEFAULT_RANDOM_NUMBERS_MAX : _a, _b = opts.min, min = _b === void 0 ? 0 : _b;
    var internal = [];
    for (var i = 0; i < amount; i++) {
        internal[internal.length] = randomFloat(max, min);
    }
    return internal;
}
randomFloats.randomFloats = randomFloats;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomFloats, 'randomFloats', { enumerable: false });
module.exports = randomFloats;
