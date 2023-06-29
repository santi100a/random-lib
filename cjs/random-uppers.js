"use strict";
exports.__esModule = true;
exports.randomUppers = void 0;
var core_1 = require("./core");
var random_from_array_1 = require("./random-from-array");
/**
 * Returns `amount` random uppercase letters.
 * @param amount How many random uppercase letters to return.
 * @returns An array of random uppercase letters.
 */
function randomUppers(amount) {
    if (amount === 0)
        return [];
    return (0, random_from_array_1.randomFromArray)(core_1.UPPERS, amount);
}
exports.randomUppers = randomUppers;