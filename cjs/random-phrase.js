"use strict";
exports.__esModule = true;
exports.randomPhrase = void 0;
var assertion_lib_1 = require("@santi100/assertion-lib");
var core_1 = require("./core");
var random_from_array_1 = require("./random-from-array");
function randomPhrase(wordCount) {
    if (wordCount === void 0) { wordCount = 6; }
    (0, assertion_lib_1.assertTypeOf)(wordCount, 'number', 'wordCount');
    var words = (0, random_from_array_1.randomFromArray)(core_1.WORDLIST, wordCount);
    return words.join(' ');
}
exports.randomPhrase = randomPhrase;
