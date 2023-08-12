"use strict";
var _a;
var random = require("./random");
var assertArray = require("@santi100/assertion-lib/cjs/array");
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
var assertInteger = require("@santi100/assertion-lib/cjs/integer");
var assertMin = require("@santi100/assertion-lib/cjs/min");
/**
 * Returns a/some random item(s) from `array`.
 * @param array The array from which you want to pick a/some random item(s).
 * @param amount How many items do you want (default is 1).
 * @returns A random item from the given array.
 */
function randomFromArray(array, amount) {
    if (amount === void 0) { amount = 1; }
    assertArray(array, 'array');
    assertMin(array.length, 'array.length', 1);
    assertTypeOf(amount, 'number', 'amount');
    assertMin(amount, 'amount', 1);
    assertInteger(amount, 'amount');
    if (amount > 1) {
        var items = [];
        for (var i = 0; i < amount; i++) {
            items.push(array[random(array.length)]);
        }
        return items;
    }
    return array[random(array.length)];
}
randomFromArray.randomFromArray = randomFromArray;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomFromArray, 'randomFromArray', { enumerable: false });
module.exports = randomFromArray;
