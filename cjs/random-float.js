"use strict";
var _a;
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
var assertMax = require("@santi100/assertion-lib/cjs/max");
/**
 * Returns a pseudo-random floating-point number between min and max.
 * @param max The maximum value.
 * @param min The minimum value (0 by default).
 * @returns A pseudo-random floating-point number between min and max.
 */
function randomFloat(max, min) {
    if (min === void 0) { min = 0.0; }
    assertTypeOf(max, 'number', 'max');
    assertTypeOf(min, 'number', 'min');
    assertMax(min, 'min', max - 1);
    if (!min)
        return Math.random() * max;
    return Math.random() * (max - min + 1.0) + min;
}
randomFloat.randomFloat = randomFloat;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomFloat, 'randomFloat', { enumerable: false });
module.exports = randomFloat;
