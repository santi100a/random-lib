"use strict";
exports.__esModule = true;
exports.randomBoolean = void 0;
var random_from_array_1 = require("./random-from-array");
/**
 * Generates a random boolean value.
 */
function randomBoolean() {
    var array = [
        true,
        true,
        true,
        false,
        false,
        false,
    ];
    return (0, random_from_array_1.randomFromArray)(array);
}
exports.randomBoolean = randomBoolean;
