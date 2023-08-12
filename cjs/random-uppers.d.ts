/**
 * Returns `amount` random uppercase letters.
 * @param amount How many random uppercase letters to return.
 * @returns An array of random uppercase letters.
 */
declare function randomUppers(amount: number): string[];
declare namespace randomUppers {
    var randomUppers: typeof import("./random-uppers");
}
export = randomUppers;
