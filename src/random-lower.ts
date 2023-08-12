import { LOWERS } from './core';
import randomFromArray = require('./random-from-array');

/**
 * Returns a random lowercase letter.
 * @returns A random lowercase letter.
 */
function randomLower() {
	return randomFromArray(LOWERS);
}
randomLower.randomLower = randomLower;
Object?.defineProperty?.(randomLower, 'randomLower', { enumerable: false });
export = randomLower;
