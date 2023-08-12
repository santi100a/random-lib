/**
 * Returns a pseudo-random integer up to `max` (exclusive).
 * @param max The maximum value.
 */
declare function random(max: number): number;
/**
 * Returns a pseudo-random integer in the range [`min`, `max`).
 * @param max The maximum value.
 * @param min The minimum value.
 */
declare function random(max: number, min: number): number;
declare namespace random {
    var random: typeof import("./random");
}
export = random;
