import {
	assertTypeOf,
	assertMin,
	assertInteger,
} from '@santi100/assertion-lib';
import { RandomArraysOptions, DEFAULT_RANDOM_NUMBERS_MAX } from './core';
import { random } from './random';
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
