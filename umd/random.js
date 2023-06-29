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
    exports.random = void 0;
    var assertion_lib_1 = require("@santi100/assertion-lib");
    /**
     * Returns a pseudo-random integer between min and max.
     * @param max The maximum value.
     * @param min The minimum value (0 by default).
     * @returns A pseudo-random integer between min and max.
     */
    function random(max, min) {
        if (min === void 0) { min = 0; }
        (0, assertion_lib_1.assertTypeOf)(max, 'number', 'max');
        (0, assertion_lib_1.assertTypeOf)(min, 'number', 'min');
        (0, assertion_lib_1.assertInteger)(max, 'max');
        (0, assertion_lib_1.assertInteger)(min, 'min');
        (0, assertion_lib_1.assertMax)(max, 'max', Infinity);
        (0, assertion_lib_1.assertMin)(min, 'min', -Infinity);
        if (max >= 0 && min >= 0)
            (0, assertion_lib_1.assertMin)(max, 'max', min + 1);
        else
            (0, assertion_lib_1.assertMin)(-max, 'max', -min + 1);
        if (!min)
            return Math.floor(Math.random() * max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    exports.random = random;
});
