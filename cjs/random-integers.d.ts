import { RandomArraysOptions } from './core';
/**
 * Returns an array with `amount` random integers.
 *
 * @param amount The amount of random integers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
declare function randomIntegers(amount?: number, opts?: RandomArraysOptions): number[];
declare namespace randomIntegers {
    var randomIntegers: typeof import("./random-integers");
}
export = randomIntegers;
