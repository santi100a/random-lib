import {
	assertArray,
	assertMin,
	assertTypeOf,
	assertInteger,
} from '@santi100/assertion-lib';
import { AtLeastOneElement } from './core';
import { random } from './random';
/**
 * Returns a random item from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
export function randomFromArray<T = unknown>(array: AtLeastOneElement<T>): T;
/**
 *
 * Returns `amount` random items from `array`.
 * @param array The array from which you want to pick random items.
 * @param amount The amount of items to pick.
 * @returns An array of random items from the given array.
 * @since 1.1.2
 */
export function randomFromArray<T = unknown>(
	array: AtLeastOneElement<T>,
	amount: number
): T[];
/**
 * Returns a/some random item(s) from `array`.
 * @param array The array from which you want to pick a/some random item(s).
 * @param amount How many items do you want (default is 1).
 * @returns A random item from the given array.
 */
export function randomFromArray<T = unknown>(
	array: AtLeastOneElement<T>,
	amount = 1
): T | T[] {
	assertArray(array, 'array');
	assertMin(array.length, 'array.length', 1);
	assertTypeOf(amount, 'number', 'amount');
	assertMin(amount, 'amount', 1);
	assertInteger(amount, 'amount');
	if (amount > 1) {
		const items: T[] = [];
		for (let i = 0; i < amount; i++) {
			items.push(array[random(array.length)]);
		}
		return items;
	}
	return array[random(array.length)];
}
