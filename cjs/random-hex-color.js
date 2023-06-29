"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.randomHexColor = void 0;
var assertion_lib_1 = require("@santi100/assertion-lib");
var core_1 = require("./core");
var random_from_array_1 = require("./random-from-array");
function randomHexColor(shorthand) {
    if (shorthand !== undefined)
        (0, assertion_lib_1.assertTypeOf)(shorthand, 'boolean', 'shorthand');
    var chars = __spreadArray(__spreadArray([], '1234567890'.split(''), true), core_1.LOWERS.slice(0, 5), true);
    return "#".concat((0, random_from_array_1.randomFromArray)(chars, shorthand ? 3 : 6).join(''));
}
exports.randomHexColor = randomHexColor;
