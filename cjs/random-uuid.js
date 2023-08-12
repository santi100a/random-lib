"use strict";
var _a;
var random_1 = require("./random");
function __map(array, cb) {
    var m = [];
    for (var i = 0; i < array.length; i++) {
        m.push(cb(array[i], i));
    }
    return m;
}
/**
 * Generates a pseudo-random UUID v4.
 */
function randomUUID() {
    var characters = 'abcdef0123456789';
    var sections = [8, 4, 4, 4, 12];
    var uuidSections = __map(sections, function (section, index) {
        var sectionString = '';
        for (var i = 0; i < section; i++) {
            if (index === 2 && i === 0) {
                // Ensure the first character in the 3rd section is '4'
                sectionString += '4';
            }
            else if (index === 3 && i === 0) {
                // Ensure the first character in the 4th section is either 8, 9, a, or b
                var randomIndex = (0, random_1.random)(4); // 0 to 3
                var validChars = '89ab';
                sectionString += validChars.charAt(randomIndex);
            }
            else {
                var randomIndex = (0, random_1.random)(characters.length);
                sectionString += characters.charAt(randomIndex);
            }
        }
        return sectionString;
    });
    return uuidSections.join('-');
}
randomUUID.randomUUID = randomUUID;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, randomUUID, 'randomUUID', { enumerable: false });
module.exports = randomUUID;
