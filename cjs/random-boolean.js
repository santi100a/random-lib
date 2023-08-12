"use strict";
var _a;
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
randomBoolean.randomBoolean = randomBoolean;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomBoolean, 'randomBoolean', { enumerable: false });
module.exports = randomBoolean;
