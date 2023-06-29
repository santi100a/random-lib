(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./random-from-array"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.randomBoolean = void 0;
    var random_from_array_1 = require("./random-from-array");
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
});
