"use strict";
var _a;
var core_1 = require("./core");
var random_from_array_1 = require("./random-from-array");
/**
 * Returns a random uppercase letter.
 * @returns A random uppercase letter.
 */
function randomUpper() {
    return (0, random_from_array_1.randomFromArray)(core_1.UPPERS);
}
randomUpper.randomUpper = randomUpper;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomUpper, 'randomUpper', { enumerable: false });
module.exports = randomUpper;
