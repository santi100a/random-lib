import { LOWERS } from './core';
import { randomFromArray } from './random-from-array';

/**
 * Returns a random lowercase letter.
 * @returns A random lowercase letter.
 */
export function randomLower() {
	return randomFromArray(LOWERS);
}
