/**
 * Utility type that enforces there's at least one element in the array.
 */
export type AtLeastOneElement<T> = [T, ...T[]];
/**
 * Default maximum value for `randomIntegers` and `randomFloats`.
 */
export const DEFAULT_RANDOM_NUMBERS_MAX = 300;
/**
 * Wordlist for `randomPhrase`.
 */
export const WORDLIST = [
	'pizza',
	'garbage',
	'fog',
	'merge',
	'actor',
	'replace',
	'naive',
	'quiz',
	'huge',
	'ivory',
	'island',
	'road',
	'mercy',
	'swallow',
	'diary',
	'puppy',
	'burden',
	'track',
	'scissors',
	'club',
	'noodle',
	'reason',
	'garment',
	'baby',
	'wide',
	'uncover',
	'vital',
	'advance',
	'vacant',
	'loud',
	'cupboard',
	'green',
	'banner',
	'skate',
	'author',
	'damage',
	'man',
	'ordinary',
	'joke',
	'close',
	'person',
	'love',
	'artist',
	'trap',
	'shaft',
	'crack',
	'learn',
	'delay',
	'romance',
	'december',
	'share',
	'reason',
	'entry',
	'emotion',
	'ocean',
	'layer',
	'nature',
	'draft',
	'loop',
	'zone',
	'speak',
	'desert',
	'bubble',
	'common',
];
/**
 * The shape of the options passed to `randomIntegers` and `randomFloats`.
 * @since 1.1.1
 */
export interface RandomArraysOptions {
	readonly max?: number;
	readonly min?: number;
}
/**
 * An array containing all 26 English lowercase letters.
 */
export const LOWERS = 'abcdefghijklmnopqrstuvwxyz'.split(
	''
) as AtLeastOneElement<string>;
/**
 * An array containing all 26 English uppercase letters.
 */
export const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
	''
) as AtLeastOneElement<string>;
/**
 * An array containing all 52 English letters (uppercase and lowercase).
 */
export const LETTERS = [...LOWERS, ...UPPERS] as AtLeastOneElement<string>;
