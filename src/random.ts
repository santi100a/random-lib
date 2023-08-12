import {
	assertTypeOf,
	assertInteger,
	assertMax,
	assertMin,
} from '@santi100/assertion-lib';

/**
 * Returns a pseudo-random integer up to `max` (exclusive).
 * @param max The maximum value.
 */
function random(max: number): number;
/**
 * Returns a pseudo-random integer in the range [`min`, `max`).
 * @param max The maximum value.
 * @param min The minimum value.
 */
function random(max: number, min: number): number;


function random(max: number, min = 0): number {
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

random.random = random; // for backward compatibility and destructuring support
Object?.defineProperty?.(random, 'random', { enumerable: false });

export = random;
