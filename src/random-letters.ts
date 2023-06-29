import { LETTERS } from './core';
import { randomFromArray } from './random-from-array';

/**
 * Returns `amount` random letters.
 * @param amount How many random letters to return.
 * @returns An array of random letters.
 */
export function randomLetters(amount: number) {
	if (amount === 0) return [];
	return randomFromArray(LETTERS, amount);
}
