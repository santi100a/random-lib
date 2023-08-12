/**
 * Returns a pseudo-random integer up to `max` (exclusive).
 * @param max The maximum value.
 */
declare function randomFloat(max: number): number;
/**
 * Returns a pseudo-random integer in the range [`min`, `max`).
 * @param max The maximum value.
 * @param min The minimum value.
 */
declare function randomFloat(max: number, min: number): number;
declare namespace randomFloat {
    var randomFloat: typeof import("./random-float");
}
export = randomFloat;
