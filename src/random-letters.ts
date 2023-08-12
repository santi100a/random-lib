import { LETTERS } from './core';
import randomFromArray = require('./random-from-array');

/**
 * Returns `amount` random letters.
 * @param amount How many random letters to return.
 * @returns An array of random letters.
 */
function randomLetters(amount: number) {
	if (amount === 0) return [];
	return randomFromArray(LETTERS, amount);
}

randomLetters.randomLetters = randomLetters;
Object?.defineProperty?.(randomLetters, 'randomLetters', { enumerable: false });
export = randomLetters;