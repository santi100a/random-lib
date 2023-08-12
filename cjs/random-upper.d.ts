/**
 * Returns a random uppercase letter.
 * @returns A random uppercase letter.
 */
declare function randomUpper(): string;
declare namespace randomUpper {
    var randomUpper: typeof import("./random-upper");
}
export = randomUpper;
