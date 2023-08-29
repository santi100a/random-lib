import { RandomArraysOptions, DEFAULT_RANDOM_NUMBERS_MAX } from './core';
import randomFloat = require('./random-float');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import assertInteger = require('@santi100/assertion-lib/cjs/integer');
import assertMin = require('@santi100/assertion-lib/cjs/min');

function __isNullOrUndefined(a: unknown) {
	return a === null || a === undefined;
}
function __checkRandomArraysErrors(
	amount: number,
	opts: RandomArraysOptions,
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
function randomFloats(amount = 4, opts: RandomArraysOptions = {}): number[] {
	__checkRandomArraysErrors(amount, opts);
	const { max = DEFAULT_RANDOM_NUMBERS_MAX, min = 0 } = opts;
	const internal = [];
	for (let i = 0; i < amount; i++) {
		internal[internal.length] = randomFloat(max, min);
	}
	return internal;
}

randomFloats.randomFloats = randomFloats;
Object?.defineProperty?.(randomFloats, 'randomFloats', { enumerable: false });
export = randomFloats;
