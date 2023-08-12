import { assertTypeOf } from '@santi100/assertion-lib/cjs/type-of';
import { AtLeastOneElement, WORDLIST } from './core';
import { randomFromArray } from './random-from-array';

/**
 * Generate a random 6-word phrase.
 *
 * **Keep in mind these phrases have NO GRAMATICAL sense and are generated from a list of random words.**
 */
function randomPhrase(): string;
/**
 * Generate a random phrase with `wordCount` words.
 *
 * **Keep in mind these phrases have NO GRAMATICAL sense and are generated from a list of random words.**
 *
 * @param wordCount The amount of words to use in the phrase.
 */
function randomPhrase(wordCount: number): string;
function randomPhrase(wordCount = 6) {
	assertTypeOf(wordCount, 'number', 'wordCount');
	const words = randomFromArray(
		WORDLIST as AtLeastOneElement<string>,
		wordCount
	);
	return words.join(' ');
}

randomPhrase.randomPhrase = randomPhrase;
Object?.defineProperty?.(randomPhrase, 'randomPhrase', { enumerable: false });
export = randomPhrase;
