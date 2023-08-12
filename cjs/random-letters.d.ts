/**
 * Returns `amount` random letters.
 * @param amount How many random letters to return.
 * @returns An array of random letters.
 */
declare function randomLetters(amount: number): string[];
declare namespace randomLetters {
    var randomLetters: typeof import("./random-letters");
}
export = randomLetters;
