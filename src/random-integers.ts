import { RandomArraysOptions, DEFAULT_RANDOM_NUMBERS_MAX } from './core';
import random = require('./random');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import assertMin = require('@santi100/assertion-lib/cjs/min');
import assertInteger = require('@santi100/assertion-lib/cjs/integer');

/**
 * Returns an array with `amount` random integers.
 *
 * @param amount The amount of random integers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
function randomIntegers(
	amount = 4,
	opts: RandomArraysOptions = { min: 0, max: DEFAULT_RANDOM_NUMBERS_MAX }
): number[] {
	assertTypeOf(amount, 'number', 'amount');
	assertTypeOf(opts.max, 'number', 'opts.max');
	assertTypeOf(opts.min, 'number', 'opts.min');
	assertMin(amount, 'amount', 0);
	assertInteger(amount, 'amount');

	const { max, min } = opts;
	const internal = [];
	for (let i = 0; i < amount; i++) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		internal[internal.length] = random(max!, min!);
	}
	return internal;
}

randomIntegers.randomIntegers = randomIntegers;
Object?.defineProperty?.(randomIntegers, 'randomIntegers', {
	enumerable: false,
});
export = randomIntegers;
