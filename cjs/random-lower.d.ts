/**
 * Returns a random lowercase letter.
 * @returns A random lowercase letter.
 */
declare function randomLower(): string;
declare namespace randomLower {
    var randomLower: typeof import("./random-lower");
}
export = randomLower;
