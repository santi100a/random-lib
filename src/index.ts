import { assert, assertType } from '@santi100/assertion-lib/cjs';

/** 
 * Returns a pseudo-random integer between min and max.
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random integer between min and max.
 */
function random(max: number, min: number = 0): number {
    assertType(max, 'number'); assertType(min, 'number');
    const CONDITION = (max > 0 ? 
            max > min : 
            max > (Number.NEGATIVE_INFINITY || -Infinity))
         && Number.isInteger(max);
    assert(
        CONDITION, 
        {
            expected: true,
            actual: CONDITION,
            operator: '==='
        }
    );
    if (!min) return Math.floor(Math.random() * max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFloat(max: number, min: number = 0.0): number {
    assertType(max, 'number'); assertType(min, 'number');
    const CONDITION = (max > 0.0 ? 
        max > min : 
        max > (Number.NEGATIVE_INFINITY || -Infinity))
    assert(CONDITION, {
        expected: true,
        actual: CONDITION,
        operator: '>'
    });
    if (!min) return Math.random() * max;
    return (Math.random() * (max - min + 1.0)) + min;
}

/**
 * Returns a random item from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
function randomFromArray<T = unknown>(array: T[]): T {
    const CONDITION = Array.isArray(array);
    assert(CONDITION, { 
        expected: true,
        actual: CONDITION,
        operator: 'Array.isArray()'
    });

    return array[random(array.length)];
};

export { random, randomFloat, randomFromArray };