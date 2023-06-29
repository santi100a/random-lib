(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./core", "./random-from-array"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.randomLetters = void 0;
    var core_1 = require("./core");
    var random_from_array_1 = require("./random-from-array");
    /**
     * Returns `amount` random letters.
     * @param amount How many random letters to return.
     * @returns An array of random letters.
     */
    function randomLetters(amount) {
        if (amount === 0)
            return [];
        return (0, random_from_array_1.randomFromArray)(core_1.LETTERS, amount);
    }
    exports.randomLetters = randomLetters;
});
