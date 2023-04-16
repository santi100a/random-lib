import {
	assertInteger,
	assertMax,
	assertMin,
	assertArray,
	assertTypeOf,
	assertInstanceOf,
} from '@santi100/assertion-lib';
export type AtLeastOneElement<T> = [T, ...T[]];

/**
 * The shape of the options passed to `randomIntegers` and `randomFloats`.
 * @since 1.1.1
 */
export interface RandomArraysOptions {
	max?: number;
	min?: number;
}
/**
 * Returns a pseudo-random integer between min and max.
 * @param max The maximum value.
 * @param min The minimum value (0 by default).
 * @returns A pseudo-random integer between min and max.
 */
export function random(max: number, min = 0): number {
	assertTypeOf(max, 'number', 'max');
	assertTypeOf(min, 'number', 'min');
	assertInteger(max, 'max');
	assertInteger(min, 'min');
	assertMax(max, 'max', Infinity);
	assertMin(min, 'min', -Infinity);
	if (max >= 0 && min >= 0) assertMin(max, 'max', min + 1);
	else assertMin(-max, 'max', -min + 1);
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
export const DEFAULT_RANDOM_NUMBERS_MAX = 300;
/**
 * Returns an array with `amount` random integers.
 *
 * @param amount The amount of random integers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
export function randomIntegers(
	amount = 4,
	opts: RandomArraysOptions = {}
): number[] {
	__checkRandomArraysErrors(amount, opts);
	const { max = DEFAULT_RANDOM_NUMBERS_MAX, min = 0 } = opts;
	const internal = [];
	for (let i = 0; i < amount; i++) {
		internal[internal.length] = random(max, min);
	}
	return internal;
}
function __isNullOrUndefined(a: unknown) {
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
 * @returns An array of random floating-point numbers.
 */
export function randomFloats(
	amount = 4,
	opts: RandomArraysOptions = {}
): number[] {
	__checkRandomArraysErrors(amount, opts);
	const { max = DEFAULT_RANDOM_NUMBERS_MAX, min = 0 } = opts;
	const internal = [];
	for (let i = 0; i < amount; i++) {
		internal[internal.length] = randomFloat(max, min);
	}
	return internal;
}
export const LOWERS = 'abcdefghijklmnopqrstuvwxyz'.split(
	''
) as AtLeastOneElement<string>;
export const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
	''
) as AtLeastOneElement<string>;
export const LETTERS = [...LOWERS, ...UPPERS] as AtLeastOneElement<string>;
/**
 * Returns a random lowercase letter.
 * @returns A random lowercase letter.
 */
export function randomLower() {
	return randomFromArray(LOWERS);
}
/**
 * Returns a random uppercase letter.
 * @returns A random uppercase letter.
 */
export function randomUpper() {
	return randomFromArray(UPPERS);
}
/**
 * Returns a random letter.
 * @returns A random letter.
 */
export function randomLetter() {
	return randomFromArray(LETTERS);
}
/**
 * Returns `amount` random lowercase letters.
 * @param amount How many random lowercase letters to return.
 * @returns An array of random lowercase letters.
 */
export function randomLowers(amount: number) {
	if (amount === 0) return [];
	return randomFromArray(LOWERS, amount);
}
/**
 * Returns `amount` random uppercase letters.
 * @param amount How many random uppercase letters to return.
 * @returns An array of random uppercase letters.
 */
export function randomUppers(amount: number) {
	if (amount === 0) return [];
	return randomFromArray(UPPERS, amount);
}
/**
 * Returns `amount` random letters.
 * @param amount How many random letters to return.
 * @returns An array of random letters.
 */
export function randomLetters(amount: number) {
	if (amount === 0) return [];
	return randomFromArray(LETTERS, amount);
}
/**
 * Generates a random date between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @returns A `Date` object representing a random date between `minDate` and `maxDate`.
 */
export function randomDate(minDate: Date, maxDate: Date) {
	assertInstanceOf(minDate, Date);
	assertInstanceOf(maxDate, Date);

	const randomTs = random(maxDate.getTime(), minDate.getTime());
	return new Date(randomTs);
}
/**
 * Generates `amount` random dates between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @param amount The amount of dates to generate.
 * @returns An array of `Date` objects representing some random dates between `minDate` and `maxDate`.
 */
export function randomDates(
	minDate: Date,
	maxDate: Date,
	amount: number
): Date[] {
	assertInstanceOf(minDate, Date);
	assertInstanceOf(maxDate, Date);

	const randomTs = randomIntegers(amount, {
		max: maxDate.getTime(),
		min: minDate.getTime(),
	});
	const dates: Date[] = [];
	for (const ts of randomTs) {
		dates.push(new Date(ts));
	}
	return dates;
}
