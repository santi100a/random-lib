(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@santi100/assertion-lib/cjs/instance-of", "./random-integers"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.randomDates = void 0;
    var instance_of_1 = require("@santi100/assertion-lib/cjs/instance-of");
    var random_integers_1 = require("./random-integers");
    /**
     * Generates `amount` random dates between `minDate` and `maxDate`.
     *
     * @param minDate The minimum date to generate a random date from.
     * @param maxDate The maximum date to generate a random date from.
     * @param amount The amount of dates to generate.
     * @returns An array of `Date` objects representing some random dates between `minDate` and `maxDate`.
     */
    function randomDates(minDate, maxDate, amount) {
        (0, instance_of_1.assertInstanceOf)(minDate, Date);
        (0, instance_of_1.assertInstanceOf)(maxDate, Date);
        var randomTs = (0, random_integers_1.randomIntegers)(amount, {
            max: maxDate.getTime(),
            min: minDate.getTime()
        });
        var dates = [];
        for (var _i = 0, randomTs_1 = randomTs; _i < randomTs_1.length; _i++) {
            var ts = randomTs_1[_i];
            dates.push(new Date(ts));
        }
        return dates;
    }
    exports.randomDates = randomDates;
});
