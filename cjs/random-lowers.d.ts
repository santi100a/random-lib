/**
 * Returns `amount` random lowercase letters.
 * @param amount How many random lowercase letters to return.
 * @returns An array of random lowercase letters.
 */
declare function randomLowers(amount: number): string[];
declare namespace randomLowers {
    var randomLowers: typeof import("./random-lowers");
}
export = randomLowers;
