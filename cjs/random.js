"use strict";
var _a;
var assertion_lib_1 = require("@santi100/assertion-lib");
function random(max, min) {
    if (min === void 0) { min = 0; }
    (0, assertion_lib_1.assertTypeOf)(max, 'number', 'max');
    (0, assertion_lib_1.assertTypeOf)(min, 'number', 'min');
    (0, assertion_lib_1.assertInteger)(max, 'max');
    (0, assertion_lib_1.assertInteger)(min, 'min');
    (0, assertion_lib_1.assertMax)(max, 'max', Infinity);
    (0, assertion_lib_1.assertMin)(min, 'min', -Infinity);
    if (max >= 0 && min >= 0)
        (0, assertion_lib_1.assertMin)(max, 'max', min + 1);
    else
        (0, assertion_lib_1.assertMin)(-max, 'max', -min + 1);
    if (!min)
        return Math.floor(Math.random() * max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
random.random = random; // for backward compatibility and destructuring support
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, random, 'random', { enumerable: false });
module.exports = random;
