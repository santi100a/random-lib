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
    exports.randomLower = void 0;
    var core_1 = require("./core");
    var random_from_array_1 = require("./random-from-array");
    /**
     * Returns a random lowercase letter.
     * @returns A random lowercase letter.
     */
    function randomLower() {
        return (0, random_from_array_1.randomFromArray)(core_1.LOWERS);
    }
    exports.randomLower = randomLower;
});
