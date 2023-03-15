import { assert, assertType } from '@santi100/assertion-lib/cjs';

/**
 * Returns a pseudo-random integer between min and max.
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random integer between min and max.
 */
function random(max: number, min: number = 0): number {
	assertType(max, 'number');
	assertType(min, 'number');
	const CONDITION =
		(max > 0 ? max > min : max > (Number.NEGATIVE_INFINITY || -Infinity)) &&
		Number.isInteger(max);
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
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random floating-point number between min and max.
 */
function randomFloat(max: number, min: number = 0.0): number {
	assertType(max, 'number');
	assertType(min, 'number');
	const CONDITION =
		max > 0.0 ? max > min : max > (Number.NEGATIVE_INFINITY || -Infinity);
	assert(CONDITION, {
		expected: true,
		actual: CONDITION,
		operator: '>',
	});
	if (!min) return Math.random() * max;
	return Math.random() * (max - min + 1.0) + min;
}

function __isArray(arr: any) {
	return Array?.isArray?.(arr) || arr instanceof Array;
}

/**
 * Returns a random item from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
function randomFromArray<T = unknown>(array: T[]): T {
	const isArray = __isArray(array);
    const isNotEmpty = array.length !== 0;
	assert(isArray, {
		expected: true,
		actual: isArray,
		operator: '__isArray()',
	});
    assert(isNotEmpty, {
        expected: true,
        actual: isNotEmpty,
        operator: '==='
    });

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
function randomIntegers(
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
function __isInteger(num: number) {
	return (
		Number?.isInteger?.(num) ||
		(num < 0 ? Math.ceil(num) : Math.floor(num)) === num
	);
}
function __checkRandomArraysErrors(
	amount: number,
	opts: RandomArraysOptions
): void {
	if (typeof amount !== 'number')
		throw new TypeError(
			`"amount" must be a number. Got "${amount}" of type "${typeof amount}".`
		);
	if (amount < 0)
		throw new RangeError(`"amount" must be positive or zero. Got "${amount}".`);
    if (!__isInteger(amount))
		throw new RangeError(`"amount" must be an integer. Got "${amount}".`);
	if (!__isNullOrUndefined(opts.max) && typeof opts.max !== 'number')
		throw new TypeError(
			`"opts.max", if specified, must be a number. Got "${
				opts.max
			}" of type "${typeof opts.max}".`
		);
	if (!__isNullOrUndefined(opts.min) && typeof opts.min !== 'number')
		throw new TypeError(
			`"opts.min", if specified, must be a number. Got "${
				opts.min
			}" of type "${typeof opts.min}".`
		);
}
/**
 * Returns an array with `amount` random floating-point numbers.
 *
 * @param amount The amount of random floating-point numbers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
function randomFloats(
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
export { random, randomFloat, randomFromArray, randomIntegers, randomFloats };
