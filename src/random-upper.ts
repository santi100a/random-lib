import { UPPERS } from './core';
import { randomFromArray } from './random-from-array';

/**
 * Returns a random uppercase letter.
 * @returns A random uppercase letter.
 */
function randomUpper() {
	return randomFromArray(UPPERS);
}
randomUpper.randomUpper = randomUpper;
Object?.defineProperty?.(randomUpper, 'randomUpper', { enumerable: false });
export = randomUpper;