import {
	assertTypeOf,
	assertInteger,
	assertMax,
	assertMin,
} from '@santi100/assertion-lib';

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
