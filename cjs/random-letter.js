"use strict";
var _a;
var core_1 = require("./core");
var randomFromArray = require("./random-from-array");
/**
 * Returns a random letter.
 * @returns A random letter.
 */
function randomLetter() {
    return randomFromArray(core_1.LETTERS);
}
randomLetter.randomLetter = randomLetter;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomLetter, 'randomLetter', { enumerable: false });
module.exports = randomLetter;
