import { assertTypeOf, assertMax } from '@santi100/assertion-lib';

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
