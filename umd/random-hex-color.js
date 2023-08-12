var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@santi100/assertion-lib/cjs/type-of", "./core", "./random-from-array"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.randomHexColor = void 0;
    var type_of_1 = require("@santi100/assertion-lib/cjs/type-of");
    var core_1 = require("./core");
    var random_from_array_1 = require("./random-from-array");
    function randomHexColor(shorthand) {
        if (shorthand !== undefined)
            (0, type_of_1.assertTypeOf)(shorthand, 'boolean', 'shorthand');
        var chars = __spreadArray(__spreadArray([], '1234567890'.split(''), true), core_1.LOWERS.slice(0, 5), true);
        return "#".concat((0, random_from_array_1.randomFromArray)(chars, shorthand ? 3 : 6).join(''));
    }
    exports.randomHexColor = randomHexColor;
});
