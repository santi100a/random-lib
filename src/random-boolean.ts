import { AtLeastOneElement } from './core';
import { randomFromArray } from './random-from-array';
/**
 * Generates a random boolean value.
 */
export function randomBoolean(): boolean {
	const array: AtLeastOneElement<boolean> = [
		true,
		true,
		true,
		false,
		false,
		false,
	];
	return randomFromArray(array);
}
