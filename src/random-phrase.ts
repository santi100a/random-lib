import { assertTypeOf } from '@santi100/assertion-lib';
import { AtLeastOneElement, WORDLIST } from './core';
import { randomFromArray } from './random-from-array';

/**
 * Generate a random 6-word phrase.
 *
 * **Keep in mind these phrases have NO GRAMATICAL sense and are generated from a list of random words.**
 */
export function randomPhrase(): string;
/**
 * Generate a random phrase with `wordCount` words.
 *
 * **Keep in mind these phrases have NO GRAMATICAL sense and are generated from a list of random words.**
 *
 * @param wordCount The amount of words to use in the phrase.
 */
export function randomPhrase(wordCount: number): string;
export function randomPhrase(wordCount = 6) {
	assertTypeOf(wordCount, 'number', 'wordCount');
	const words = randomFromArray(
		WORDLIST as AtLeastOneElement<string>,
		wordCount
	);
	return words.join(' ');
}
