import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import assertMax = require('@santi100/assertion-lib/cjs/max');

/**
 * Returns a pseudo-random integer up to `max` (exclusive).
 * @param max The maximum value.
 */
function randomFloat(max: number): number;
/**
 * Returns a pseudo-random integer in the range [`min`, `max`).
 * @param max The maximum value.
 * @param min The minimum value.
 */
function randomFloat(max: number, min: number): number;

/**
 * Returns a pseudo-random floating-point number between min and max.
 * @param max The maximum value.
 * @param min The minimum value (0 by default).
 * @returns A pseudo-random floating-point number between min and max.
 */
function randomFloat(max: number, min = 0.0): number {
	assertTypeOf(max, 'number', 'max');
	assertTypeOf(min, 'number', 'min');
	assertMax(min, 'min', max - 1);
	if (!min) return Math.random() * max;
	return Math.random() * (max - min + 1.0) + min;
}

randomFloat.randomFloat = randomFloat;
Object?.defineProperty?.(randomFloat, 'randomFloat', { enumerable: false });
export = randomFloat;
