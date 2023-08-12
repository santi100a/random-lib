/**
 * Returns a random letter.
 * @returns A random letter.
 */
declare function randomLetter(): string;
declare namespace randomLetter {
    var randomLetter: typeof import("./random-letter");
}
export = randomLetter;
