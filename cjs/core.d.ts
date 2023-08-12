/**
 * Utility type that enforces there's at least one element in the array.
 */
export type AtLeastOneElement<T> = [T, ...T[]];
/**
 * Default maximum value for `randomIntegers` and `randomFloats`.
 */
export declare const DEFAULT_RANDOM_NUMBERS_MAX = 300;
/**
 * Wordlist for `randomPhrase`.
 */
export declare const WORDLIST: string[];
/**
 * The shape of the options passed to `randomIntegers` and `randomFloats`.
 * @since 1.1.1
 */
export interface RandomArraysOptions {
    readonly max?: number;
    readonly min?: number;
}
/**
 * An array containing all 26 English lowercase letters.
 */
export declare const LOWERS: AtLeastOneElement<string>;
/**
 * An array containing all 26 English uppercase letters.
 */
export declare const UPPERS: AtLeastOneElement<string>;
/**
 * An array containing all 52 English letters (uppercase and lowercase).
 */
export declare const LETTERS: AtLeastOneElement<string>;
