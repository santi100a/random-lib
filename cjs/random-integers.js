"use strict";
var _a;
var core_1 = require("./core");
var random = require("./random");
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
var assertMin = require("@santi100/assertion-lib/cjs/min");
var assertInteger = require("@santi100/assertion-lib/cjs/integer");
/**
 * Returns an array with `amount` random integers.
 *
 * @param amount The amount of random integers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
function randomIntegers(amount, opts) {
    if (amount === void 0) { amount = 4; }
    if (opts === void 0) { opts = { min: 0, max: core_1.DEFAULT_RANDOM_NUMBERS_MAX }; }
    assertTypeOf(amount, 'number', 'amount');
    assertTypeOf(opts.max, 'number', 'opts.max');
    assertTypeOf(opts.min, 'number', 'opts.min');
    assertMin(amount, 'amount', 0);
    assertInteger(amount, 'amount');
    var max = opts.max, min = opts.min;
    var internal = [];
    for (var i = 0; i < amount; i++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        internal[internal.length] = random(max, min);
    }
    return internal;
}
randomIntegers.randomIntegers = randomIntegers;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomIntegers, 'randomIntegers', { enumerable: false });
module.exports = randomIntegers;
