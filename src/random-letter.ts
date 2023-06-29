import { LETTERS } from './core';
import { randomFromArray } from './random-from-array';

/**
 * Returns a random letter.
 * @returns A random letter.
 */
export function randomLetter() {
	return randomFromArray(LETTERS);
}
