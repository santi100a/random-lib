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
    exports.randomLetter = void 0;
    var core_1 = require("./core");
    var random_from_array_1 = require("./random-from-array");
    /**
     * Returns a random letter.
     * @returns A random letter.
     */
    function randomLetter() {
        return (0, random_from_array_1.randomFromArray)(core_1.LETTERS);
    }
    exports.randomLetter = randomLetter;
});
