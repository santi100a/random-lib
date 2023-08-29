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
var _a;
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
var core_1 = require("./core");
var randomFromArray = require("./random-from-array");
function randomHexColor(shorthand) {
    if (shorthand !== undefined)
        assertTypeOf(shorthand, 'boolean', 'shorthand');
    var chars = __spreadArray(__spreadArray([], '1234567890'.split(''), true), core_1.LOWERS.slice(0, 5), true);
    return "#".concat(randomFromArray(chars, shorthand ? 3 : 6).join(''));
}
randomHexColor.randomHexColor = randomHexColor;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomHexColor, 'randomHexColor', {
    enumerable: false
});
module.exports = randomHexColor;
