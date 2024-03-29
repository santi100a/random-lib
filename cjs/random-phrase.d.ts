/**
 * Generate a random 6-word phrase.
 *
 * **Keep in mind these phrases have NO GRAMATICAL sense and are generated from a list of random words.**
 */
declare function randomPhrase(): string;
/**
 * Generate a random phrase with `wordCount` words.
 *
 * **Keep in mind these phrases have NO GRAMATICAL sense and are generated from a list of random words.**
 *
 * @param wordCount The amount of words to use in the phrase.
 */
declare function randomPhrase(wordCount: number): string;
declare namespace randomPhrase {
    var randomPhrase: typeof import("./random-phrase");
}
export = randomPhrase;
