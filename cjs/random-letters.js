"use strict";
var _a;
var core_1 = require("./core");
var randomFromArray = require("./random-from-array");
/**
 * Returns `amount` random letters.
 * @param amount How many random letters to return.
 * @returns An array of random letters.
 */
function randomLetters(amount) {
    if (amount === 0)
        return [];
    return randomFromArray(core_1.LETTERS, amount);
}
randomLetters.randomLetters = randomLetters;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomLetters, 'randomLetters', { enumerable: false });
module.exports = randomLetters;
