(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@santi100/assertion-lib", "./random"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.randomDate = void 0;
    var assertion_lib_1 = require("@santi100/assertion-lib");
    var random_1 = require("./random");
    /**
     * Generates a random date between `minDate` and `maxDate`.
     *
     * @param minDate The minimum date to generate a random date from.
     * @param maxDate The maximum date to generate a random date from.
     * @returns A `Date` object representing a random date between `minDate` and `maxDate`.
     */
    function randomDate(minDate, maxDate) {
        (0, assertion_lib_1.assertInstanceOf)(minDate, Date);
        (0, assertion_lib_1.assertInstanceOf)(maxDate, Date);
        var randomTs = (0, random_1.random)(maxDate.getTime(), minDate.getTime());
        return new Date(randomTs);
    }
    exports.randomDate = randomDate;
});
