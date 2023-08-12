(function (factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports);
		if (v !== undefined) module.exports = v;
	} else if (typeof define === 'function' && define.amd) {
		define(['require', 'exports', './random'], factory);
	}
})(function (require, exports) {
	'use strict';
	exports.__esModule = true;
	exports.randomUUID = void 0;
	var random_1 = require('./random');
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
				} else if (index === 3 && i === 0) {
					// Ensure the first character in the 4th section is either 8, 9, a, or b
					var randomIndex = (0, random_1.random)(4); // 0 to 3
					var validChars = '89ab';
					sectionString += validChars.charAt(randomIndex);
				} else {
					var randomIndex = Math.floor(Math.random() * characters.length);
					sectionString += characters.charAt(randomIndex);
				}
			}
			return sectionString;
		});
		return uuidSections.join('-');
	}
	exports.randomUUID = randomUUID;
});
