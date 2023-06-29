"use strict";
exports.__esModule = true;
exports.randomLowers = void 0;
var core_1 = require("./core");
var random_from_array_1 = require("./random-from-array");
/**
 * Returns `amount` random lowercase letters.
 * @param amount How many random lowercase letters to return.
 * @returns An array of random lowercase letters.
 */
function randomLowers(amount) {
    if (amount === 0)
        return [];
    return (0, random_from_array_1.randomFromArray)(core_1.LOWERS, amount);
}
exports.randomLowers = randomLowers;
