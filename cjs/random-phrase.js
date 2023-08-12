"use strict";
var _a;
var type_of_1 = require("@santi100/assertion-lib/cjs/type-of");
var core_1 = require("./core");
var random_from_array_1 = require("./random-from-array");
function randomPhrase(wordCount) {
    if (wordCount === void 0) { wordCount = 6; }
    (0, type_of_1.assertTypeOf)(wordCount, 'number', 'wordCount');
    var words = (0, random_from_array_1.randomFromArray)(core_1.WORDLIST, wordCount);
    return words.join(' ');
}
randomPhrase.randomPhrase = randomPhrase;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomPhrase, 'randomPhrase', { enumerable: false });
module.exports = randomPhrase;
