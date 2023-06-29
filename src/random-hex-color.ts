import { assertTypeOf } from '@santi100/assertion-lib';
import { AtLeastOneElement, LOWERS } from './core';
import { randomFromArray } from './random-from-array';

/**
 * Generates a random hex colorcode.
 */
export function randomHexColor(): string;
/**
 * Generates a random hex colorcode.
 * @param shorthand Whether or not use a 3-character code instead of a 6-character one.
 */
export function randomHexColor(shorthand: boolean): string;

export function randomHexColor(shorthand?: boolean) {
	if (shorthand !== undefined) assertTypeOf(shorthand, 'boolean', 'shorthand');
	const chars: AtLeastOneElement<string> = [
		...('1234567890'.split('') as AtLeastOneElement<string>),
		...LOWERS.slice(0, 5),
	];
	return `#${randomFromArray(chars, shorthand ? 3 : 6).join('')}`;
}
