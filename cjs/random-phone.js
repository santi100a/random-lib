"use strict";
var random_integers_1 = require("./random-integers");
var assertInteger = require("@santi100/assertion-lib/cjs/integer");
var assertPositive = require("@santi100/assertion-lib/cjs/positive");
var assertRange = require("@santi100/assertion-lib/cjs/range");
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
/** Implementation */
function randomPhone(countryCode, digitCount) {
    if (digitCount === void 0) { digitCount = 10; }
    assertTypeOf(countryCode, 'number', 'countryCode');
    assertInteger(countryCode, 'countryCode');
    assertPositive(countryCode, 'countryCode');
    assertRange(countryCode, 'countryCode', 1, 999);
    assertTypeOf(digitCount, 'number', 'digitCount');
    assertInteger(digitCount, 'digitCount');
    assertPositive(digitCount, 'digitCount');
    var digits = (0, random_integers_1.randomIntegers)(digitCount, { max: 10, min: 0 });
    var phoneNumber = "+".concat(countryCode, " ").concat(digits
        .join('')
        .substring(0, 3), " ").concat(digits.join('').substring(3));
    return phoneNumber;
}
module.exports = randomPhone;
