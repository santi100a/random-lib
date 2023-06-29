(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@santi100/assertion-lib"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.randomFloat = void 0;
    var assertion_lib_1 = require("@santi100/assertion-lib");
    /**
     * Returns a pseudo-random floating-point number between min and max.
     * @param max The maximum value.
     * @param min The minimum value (0 by default).
     * @returns A pseudo-random floating-point number between min and max.
     */
    function randomFloat(max, min) {
        if (min === void 0) { min = 0.0; }
        (0, assertion_lib_1.assertTypeOf)(max, 'number', 'max');
        (0, assertion_lib_1.assertTypeOf)(min, 'number', 'min');
        (0, assertion_lib_1.assertMax)(min, 'min', max - 1);
        if (!min)
            return Math.random() * max;
        return Math.random() * (max - min + 1.0) + min;
    }
    exports.randomFloat = randomFloat;
});
