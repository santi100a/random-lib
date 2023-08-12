"use strict";
var _a;
var core_1 = require("./core");
var randomFromArray = require("./random-from-array");
/**
 * Returns `amount` random lowercase letters.
 * @param amount How many random lowercase letters to return.
 * @returns An array of random lowercase letters.
 */
function randomLowers(amount) {
    if (amount === 0)
        return [];
    return randomFromArray(core_1.LOWERS, amount);
}
randomLowers.randomLowers = randomLowers;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomLowers, 'randomLowers', { enumerable: false });
module.exports = randomLowers;
