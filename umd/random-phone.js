(function (factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports);
		if (v !== undefined) module.exports = v;
	} else if (typeof define === 'function' && define.amd) {
		define([
			'require',
			'exports',
			'./random-integers',
			'@santi100/assertion-lib/cjs/integer',
			'@santi100/assertion-lib/cjs/positive',
			'@santi100/assertion-lib/cjs/range',
			'@santi100/assertion-lib/cjs/type-of',
		], factory);
	}
})(function (require, exports) {
	'use strict';
	var _a;
	var random_integers_1 = require('./random-integers');
	var assertInteger = require('@santi100/assertion-lib/cjs/integer');
	var assertPositive = require('@santi100/assertion-lib/cjs/positive');
	var range_1 = require('@santi100/assertion-lib/cjs/range');
	var type_of_1 = require('@santi100/assertion-lib/cjs/type-of');
	/** Implementation */
	function randomPhone(countryCode, digitCount) {
		if (digitCount === void 0) {
			digitCount = 10;
		}
		(0, type_of_1.assertTypeOf)(countryCode, 'number', 'countryCode');
		assertInteger(countryCode, 'countryCode');
		assertPositive(countryCode, 'countryCode');
		(0, range_1.assertRange)(countryCode, 'countryCode', 1, 999);
		(0, type_of_1.assertTypeOf)(digitCount, 'number', 'digitCount');
		assertInteger(digitCount, 'digitCount');
		assertPositive(digitCount, 'digitCount');
		var digits = (0, random_integers_1.randomIntegers)(digitCount, {
			max: 10,
			min: 0,
		});
		var firstDigits = digits.slice(0, 3);
		var lastDigits = digits.slice(3);
		return '+'
			.concat(countryCode, ' ')
			.concat(firstDigits.join(''), ' ')
			.concat(lastDigits.join(''));
	}
	randomPhone.randomPhone = randomPhone;
	(_a =
		Object === null || Object === void 0 ? void 0 : Object.defineProperty) ===
		null || _a === void 0
		? void 0
		: _a.call(Object, randomPhone, 'randomPhone', { enumerable: false });
	return randomPhone;
});
