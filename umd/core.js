var __spreadArray =
	(this && this.__spreadArray) ||
	function (to, from, pack) {
		if (pack || arguments.length === 2)
			for (var i = 0, l = from.length, ar; i < l; i++) {
				if (ar || !(i in from)) {
					if (!ar) ar = Array.prototype.slice.call(from, 0, i);
					ar[i] = from[i];
				}
			}
		return to.concat(ar || Array.prototype.slice.call(from));
	};
(function (factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports);
		if (v !== undefined) module.exports = v;
	} else if (typeof define === 'function' && define.amd) {
		define(['require', 'exports'], factory);
	}
})(function (require, exports) {
	'use strict';
	exports.__esModule = true;
	exports.LETTERS =
		exports.UPPERS =
		exports.LOWERS =
		exports.WORDLIST =
		exports.DEFAULT_RANDOM_NUMBERS_MAX =
			void 0;
	/**
	 * Default maximum value for `randomIntegers` and `randomFloats`.
	 */
	exports.DEFAULT_RANDOM_NUMBERS_MAX = 300;
	/**
	 * Wordlist for `randomPhrase`.
	 */
	exports.WORDLIST = [
		'pizza',
		'garbage',
		'fog',
		'merge',
		'actor',
		'replace',
		'naive',
		'quiz',
		'huge',
		'ivory',
		'island',
		'road',
		'mercy',
		'swallow',
		'diary',
		'puppy',
		'burden',
		'track',
		'scissors',
		'club',
		'noodle',
		'reason',
		'garment',
		'baby',
		'wide',
		'uncover',
		'vital',
		'advance',
		'vacant',
		'loud',
		'cupboard',
		'green',
		'banner',
		'skate',
		'author',
		'damage',
		'man',
		'ordinary',
		'joke',
		'close',
		'person',
		'love',
		'artist',
		'trap',
		'shaft',
		'crack',
		'learn',
		'delay',
		'romance',
		'december',
		'share',
		'reason',
		'entry',
		'emotion',
		'ocean',
		'layer',
		'nature',
		'draft',
		'loop',
		'zone',
		'speak',
		'desert',
		'bubble',
		'common',
	];
	/**
	 * An array containing all 26 English lowercase letters.
	 */
	exports.LOWERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
	/**
	 * An array containing all 26 English uppercase letters.
	 */
	exports.UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	/**
	 * An array containing all 52 English letters (uppercase and lowercase).
	 */
	exports.LETTERS = __spreadArray(
		__spreadArray([], exports.LOWERS, true),
		exports.UPPERS,
		true,
	);
});
