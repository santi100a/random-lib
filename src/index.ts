import {
	assert,
	assertInteger,
	assertMax,
	assertMin,
	assertArray,
	assertTypeOf,
} from '@santi100/assertion-lib';

/**
 * Returns a pseudo-random integer between min and max.
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random integer between min and max.
 */
export function random(max: number, min: number = 0): number {
	assertTypeOf(max, 'number', 'max');
	assertTypeOf(min, 'number', 'min');
	assertInteger(max, 'max'); 
	assertInteger(min, 'min');
	const CONDITION = max > 0 ? max > min : max > -Infinity;
	assert(CONDITION, {
		expected: true,
		actual: CONDITION,
		operator: '===',
	});
	if (!min) return Math.floor(Math.random() * max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Returns a pseudo-random floating-point number between min and max.
 * @param max The maximum value.
 * @param min The minimum value (0 by default).
 * @returns A pseudo-random floating-point number between min and max.
 */
export function randomFloat(max: number, min = 0.0): number {
	assertTypeOf(max, 'number', 'max');
	assertTypeOf(min, 'number', 'min');
	assertMax(min, 'min', max - 1);
	if (!min) return Math.random() * max;
	return Math.random() * (max - min + 1.0) + min;
}

/**
 * Returns a random item from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
export function randomFromArray<T = unknown>(array: T[]): T;
/**
 * @since 1.1.2
 * Returns `amount` random items from `array`.
 * @param array The array from which you want to pick random items.
 * @param amount The amount of items to pick.
 * @returns An array of random items from the given array.
 */
export function randomFromArray<T = unknown>(array: T[], amount: number): T[];
/**
 * Returns a/some random item(s) from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
export function randomFromArray<T = unknown>(array: T[], amount = 1): T | T[] {
	assertMin(array.length, 'array.length', 0);
	assertArray(array, 'array');
	assertMin(array.length, 'array.length', 1);
	assertTypeOf(amount, 'number', 'amount');
	assertMin(amount, 'amount', 1);
	if (amount > 1) {
		const items: T[] = [];
		for (let i = 0; i < amount; i++) {
			items.push(array[random(array.length)]);
		}
		return items;
	}
	return array[random(array.length)];
}
const DEFAULT_MAX = 300;
/**
 * The shape of the options passed to `randomIntegers` and `randomFloats`.
 * @since 1.1.1
 */
interface RandomArraysOptions {
	max?: number;
	min?: number;
}
/**
 * Returns an array with `amount` random integers.
 *
 * @param amount The amount of random integers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
export function randomIntegers(
	amount: number = 4,
	opts: RandomArraysOptions = {}
): number[] {
	__checkRandomArraysErrors(amount, opts);
	const { max = DEFAULT_MAX, min = 0 } = opts;
	const internal = [];
	for (let i = 0; i < amount; i++) {
		internal[internal.length] = random(max, min);
	}
	return internal;
}
function __isNullOrUndefined(a: any) {
	return a === null || a === undefined;
}
function __checkRandomArraysErrors(
	amount: number,
	opts: RandomArraysOptions
): void {
	assertTypeOf(amount, 'number', 'amount');
	if (!__isNullOrUndefined(opts.max))
		assertTypeOf(opts.max, 'number', 'opts.max');
	if (!__isNullOrUndefined(opts.min))
		assertTypeOf(opts.min, 'number', 'opts.min');
	assertMin(amount, 'amount', 0);
	assertInteger(amount, 'amount');
}
/**
 * Returns an array with `amount` random floating-point numbers.
 *
 * @param amount The amount of random floating-point numbers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
export function randomFloats(
	amount: number = 4,
	opts: RandomArraysOptions = {}
): number[] {
	__checkRandomArraysErrors(amount, opts);
	const { max = DEFAULT_MAX, min = 0 } = opts;
	const internal = [];
	for (let i = 0; i < amount; i++) {
		internal[internal.length] = randomFloat(max, min);
	}
	return internal;
}
const lowers = 'abcdefghijklmnopqrstuvwxyz'.split('');
const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const letters = [...lowers, ...uppers];
/**
 * Returns a random lowercase letter.
 * @returns A random lowercase letter.
 */
export function randomLower() {
	return randomFromArray(lowers);
}
/**
 * Returns a random uppercase letter.
 * @returns A random uppercase letter.
 */
export function randomUpper() {
	return randomFromArray(uppers);
}
/**
 * Returns a random letter.
 * @returns A random letter.
 */
export function randomLetter() {
	return randomFromArray(letters);
}
/**
 * Returns `amount` random lowercase letters.
 * @returns An array of random lowercase letters.
 */
export function randomLowers(amount: number) {
	return randomFromArray(lowers, amount);
}
/**
 * Returns `amount` random uppercase letters.
 * @returns An array of random uppercase letters.
 */
export function randomUppers(amount: number) {
	return randomFromArray(uppers, amount);
}
/**
 * Returns `amount` random letters.
 * @returns An array of random letters.
 */
export function randomLetters(amount: number) {
	return randomFromArray(letters, amount);
}