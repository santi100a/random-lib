import randomPhone = require('./random-phone');
import random = require('./random');
import randomDate = require('./random-date');
import randomDates = require('./random-dates');
import randomFloat = require('./random-float');
import randomFloats = require('./random-floats');
import randomFromArray = require('./random-from-array');
import randomIntegers = require('./random-integers');
import randomLetter = require('./random-letter');
import randomLetters = require('./random-letters');
import randomLower = require('./random-lower');
import randomLowers = require('./random-lowers');
import randomUpper = require('./random-upper');
import randomUppers = require('./random-uppers');
import randomBoolean = require('./random-boolean');
import randomUUID = require('./random-uuid');
import randomPhrase = require('./random-phrase');
import randomHexColor = require('./random-hex-color');

export * from './core';
export {
	randomPhone,
	random,
	randomBoolean,
	randomDate,
	randomDates,
	randomFloat,
	randomFloats,
	randomFromArray,
	randomIntegers,
	randomLetter,
	randomLetters,
	randomLower,
	randomLowers,
	randomUUID,
	randomUpper,
	randomUppers,
	randomPhrase,
	randomHexColor,
};

export default random;
