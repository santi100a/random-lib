import { LETTERS } from './core';
import randomFromArray = require('./random-from-array');

/**
 * Returns a random letter.
 * @returns A random letter.
 */
function randomLetter() {
	return randomFromArray(LETTERS);
}

randomLetter.randomLetter = randomLetter;
Object?.defineProperty?.(randomLetter, 'randomLetter', { enumerable: false });
export = randomLetter;
