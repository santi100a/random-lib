/**
 * Generates a random hex colorcode.
 */
declare function randomHexColor(): string;
/**
 * Generates a random hex colorcode.
 * @param shorthand Whether or not use a 3-character code instead of a 6-character one.
 */
declare function randomHexColor(shorthand: boolean): string;
declare namespace randomHexColor {
    var randomHexColor: typeof import("./random-hex-color");
}
export = randomHexColor;
