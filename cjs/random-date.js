"use strict";
var _a;
var assertInstanceOf = require("@santi100/assertion-lib/cjs/instance-of");
var random = require("./random");
/**
 * Generates a random date between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @returns A `Date` object representing a random date between `minDate` and `maxDate`.
 */
function randomDate(minDate, maxDate) {
    assertInstanceOf(minDate, Date);
    assertInstanceOf(maxDate, Date);
    var randomTs = random(maxDate.getTime(), minDate.getTime());
    return new Date(randomTs);
}
randomDate.randomDate = randomDate;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomDate, 'randomDate', { enumerable: false });
module.exports = randomDate;
