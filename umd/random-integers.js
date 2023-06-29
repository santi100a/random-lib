(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@santi100/assertion-lib", "./core", "./random"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.randomIntegers = void 0;
    var assertion_lib_1 = require("@santi100/assertion-lib");
    var core_1 = require("./core");
    var random_1 = require("./random");
    function __isNullOrUndefined(a) {
        return a === null || a === undefined;
    }
    function __checkRandomArraysErrors(amount, opts) {
        (0, assertion_lib_1.assertTypeOf)(amount, 'number', 'amount');
        if (!__isNullOrUndefined(opts.max))
            (0, assertion_lib_1.assertTypeOf)(opts.max, 'number', 'opts.max');
        if (!__isNullOrUndefined(opts.min))
            (0, assertion_lib_1.assertTypeOf)(opts.min, 'number', 'opts.min');
        (0, assertion_lib_1.assertMin)(amount, 'amount', 0);
        (0, assertion_lib_1.assertInteger)(amount, 'amount');
    }
    /**
     * Returns an array with `amount` random integers.
     *
     * @param amount The amount of random integers to fill the array with. Defaults to 4.
     * @param opts See {@link RandomArraysOptions}.
     * @returns An array of random integers.
     */
    function randomIntegers(amount, opts) {
        if (amount === void 0) { amount = 4; }
        if (opts === void 0) { opts = {}; }
        __checkRandomArraysErrors(amount, opts);
        var _a = opts.max, max = _a === void 0 ? core_1.DEFAULT_RANDOM_NUMBERS_MAX : _a, _b = opts.min, min = _b === void 0 ? 0 : _b;
        var internal = [];
        for (var i = 0; i < amount; i++) {
            internal[internal.length] = (0, random_1.random)(max, min);
        }
        return internal;
    }
    exports.randomIntegers = randomIntegers;
});
