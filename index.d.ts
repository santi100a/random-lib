/**
 * Returns a pseudo-random integer between min and max.
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random integer between min and max.
 */
declare function random(max: number, min?: number): number;
/**
 * Returns a pseudo-random floating-point number between min and max.
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random floating-point number between min and max.
 */
declare function randomFloat(max: number, min?: number): number;
/**
 * Returns a random item from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
declare function randomFromArray<T = unknown>(array: T[]): T;
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
declare function randomIntegers(amount?: number, opts?: RandomArraysOptions): number[];
/**
 * Returns an array with `amount` random floating-point numbers.
 *
 * @param amount The amount of random floating-point numbers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
declare function randomFloats(amount?: number, opts?: RandomArraysOptions): number[];
export { random, randomFloat, randomFromArray, randomIntegers, randomFloats };
