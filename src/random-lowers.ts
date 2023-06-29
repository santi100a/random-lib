import { LOWERS } from './core';
import { randomFromArray } from './random-from-array';

/**
 * Returns `amount` random lowercase letters.
 * @param amount How many random lowercase letters to return.
 * @returns An array of random lowercase letters.
 */
export function randomLowers(amount: number) {
	if (amount === 0) return [];
	return randomFromArray(LOWERS, amount);
}
