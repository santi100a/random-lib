import { UPPERS } from './core';
import { randomFromArray } from './random-from-array';

/**
 * Returns `amount` random uppercase letters.
 * @param amount How many random uppercase letters to return.
 * @returns An array of random uppercase letters.
 */
function randomUppers(amount: number) {
	if (amount === 0) return [];
	return randomFromArray(UPPERS, amount);
}

randomUppers.randomUppers = randomUppers;
Object?.defineProperty?.(randomUppers, 'randomUppers', { enumerable: false });
export = randomUppers;