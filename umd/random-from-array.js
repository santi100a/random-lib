(function (factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports);
		if (v !== undefined) module.exports = v;
	} else if (typeof define === 'function' && define.amd) {
		define([
			'require',
			'exports',
			'@santi100/assertion-lib',
			'./random',
		], factory);
	}
})(function (require, exports) {
	'use strict';
	exports.__esModule = true;
	exports.randomFromArray = void 0;
	var assertion_lib_1 = require('@santi100/assertion-lib');
	var random_1 = require('./random');
	/**
	 * Returns a/some random item(s) from `array`.
	 * @param array The array from which you want to pick a/some random item(s).
	 * @param amount How many items do you want (default is 1).
	 * @returns A random item from the given array.
	 */
	function randomFromArray(array, amount) {
		if (amount === void 0) {
			amount = 1;
		}
		(0, assertion_lib_1.assertArray)(array, 'array');
		(0, assertion_lib_1.assertMin)(array.length, 'array.length', 1);
		(0, assertion_lib_1.assertTypeOf)(amount, 'number', 'amount');
		(0, assertion_lib_1.assertMin)(amount, 'amount', 1);
		(0, assertion_lib_1.assertInteger)(amount, 'amount');
		if (amount > 1) {
			var items = [];
			for (var i = 0; i < amount; i++) {
				items.push(array[(0, random_1.random)(array.length)]);
			}
			return items;
		}
		return array[(0, random_1.random)(array.length)];
	}
	exports.randomFromArray = randomFromArray;
});
