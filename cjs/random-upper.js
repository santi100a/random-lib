"use strict";
exports.__esModule = true;
exports.randomUpper = void 0;
var core_1 = require("./core");
var random_from_array_1 = require("./random-from-array");
/**
 * Returns a random uppercase letter.
 * @returns A random uppercase letter.
 */
function randomUpper() {
    return (0, random_from_array_1.randomFromArray)(core_1.UPPERS);
}
exports.randomUpper = randomUpper;
