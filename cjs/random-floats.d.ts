import { RandomArraysOptions } from './core';
/**
 * Returns an array with `amount` random floating-point numbers.
 *
 * @param amount The amount of random floating-point numbers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random floating-point numbers.
 */
declare function randomFloats(amount?: number, opts?: RandomArraysOptions): number[];
declare namespace randomFloats {
    var randomFloats: typeof import("./random-floats");
}
export = randomFloats;
