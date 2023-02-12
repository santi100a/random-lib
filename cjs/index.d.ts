/**
 * Returns a pseudo-random integer between min and max.
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random integer between min and max.
 */
declare function random(max: number, min?: number): number;
declare function randomFloat(max: number, min?: number): number;
/**
 * Returns a random item from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
declare function randomFromArray<T = unknown>(array: T[]): T;
export { random, randomFloat, randomFromArray };
