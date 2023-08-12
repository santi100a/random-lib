"use strict";
var _a;
var assertInstanceOf = require("@santi100/assertion-lib/cjs/instance-of");
var randomIntegers = require("./random-integers");
/**
 * Generates `amount` random dates between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @param amount The amount of dates to generate.
 * @returns An array of `Date` objects representing some random dates between `minDate` and `maxDate`.
 */
function randomDates(minDate, maxDate, amount) {
    assertInstanceOf(minDate, Date);
    assertInstanceOf(maxDate, Date);
    var randomTs = randomIntegers(amount, {
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
randomDates.randomDate = randomDates;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomDates, 'randomDates', { enumerable: false });
module.exports = randomDates;
