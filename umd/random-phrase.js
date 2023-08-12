(function (factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports);
		if (v !== undefined) module.exports = v;
	} else if (typeof define === 'function' && define.amd) {
		define([
			'require',
			'exports',
			'@santi100/assertion-lib/cjs/type-of',
			'./core',
			'./random-from-array',
		], factory);
	}
})(function (require, exports) {
	'use strict';
	exports.__esModule = true;
	exports.randomPhrase = void 0;
	var type_of_1 = require('@santi100/assertion-lib/cjs/type-of');
	var core_1 = require('./core');
	var random_from_array_1 = require('./random-from-array');
	function randomPhrase(wordCount) {
		if (wordCount === void 0) {
			wordCount = 6;
		}
		(0, type_of_1.assertTypeOf)(wordCount, 'number', 'wordCount');
		var words = (0, random_from_array_1.randomFromArray)(
			core_1.WORDLIST,
			wordCount
		);
		return words.join(' ');
	}
	exports.randomPhrase = randomPhrase;
});
