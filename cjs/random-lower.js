"use strict";
var _a;
var core_1 = require("./core");
var randomFromArray = require("./random-from-array");
/**
 * Returns a random lowercase letter.
 * @returns A random lowercase letter.
 */
function randomLower() {
    return randomFromArray(core_1.LOWERS);
}
randomLower.randomLower = randomLower;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomLower, 'randomLower', { enumerable: false });
module.exports = randomLower;
