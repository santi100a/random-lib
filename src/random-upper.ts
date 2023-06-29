import { UPPERS } from './core';
import { randomFromArray } from './random-from-array';

/**
 * Returns a random uppercase letter.
 * @returns A random uppercase letter.
 */
export function randomUpper() {
	return randomFromArray(UPPERS);
}
