export type AtLeastOneElement<T> = [T, ...T[]];
/**
 * The shape of the options passed to `randomIntegers` and `randomFloats`.
 * @since 1.1.1
 */
export interface RandomArraysOptions {
    max?: number;
    min?: number;
}
/**
 * Returns a pseudo-random integer between min and max.
 * @param max The maximum value.
 * @param min The minimum value (0 by default).
 * @returns A pseudo-random integer between min and max.
 */
export declare function random(max: number, min?: number): number;
/**
 * Returns a pseudo-random floating-point number between min and max.
 * @param max The maximum value.
 * @param min The minimum value (0 by default).
 * @returns A pseudo-random floating-point number between min and max.
 */
export declare function randomFloat(max: number, min?: number): number;
/**
 * Returns a random item from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
export declare function randomFromArray<T = unknown>(array: AtLeastOneElement<T>): T;
/**
 *
 * Returns `amount` random items from `array`.
 * @param array The array from which you want to pick random items.
 * @param amount The amount of items to pick.
 * @returns An array of random items from the given array.
 * @since 1.1.2
 */
export declare function randomFromArray<T = unknown>(array: AtLeastOneElement<T>, amount: number): T[];
export declare const DEFAULT_RANDOM_NUMBERS_MAX = 300;
/**
 * Returns an array with `amount` random integers.
 *
 * @param amount The amount of random integers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random integers.
 */
export declare function randomIntegers(amount?: number, opts?: RandomArraysOptions): number[];
/**
 * Returns an array with `amount` random floating-point numbers.
 *
 * @param amount The amount of random floating-point numbers to fill the array with. Defaults to 4.
 * @param opts See {@link RandomArraysOptions}.
 * @returns An array of random floating-point numbers.
 */
export declare function randomFloats(amount?: number, opts?: RandomArraysOptions): number[];
export declare const LOWERS: AtLeastOneElement<string>;
export declare const UPPERS: AtLeastOneElement<string>;
export declare const LETTERS: AtLeastOneElement<string>;
/**
 * Returns a random lowercase letter.
 * @returns A random lowercase letter.
 */
export declare function randomLower(): string;
/**
 * Returns a random uppercase letter.
 * @returns A random uppercase letter.
 */
export declare function randomUpper(): string;
/**
 * Returns a random letter.
 * @returns A random letter.
 */
export declare function randomLetter(): string;
/**
 * Returns `amount` random lowercase letters.
 * @param amount How many random lowercase letters to return.
 * @returns An array of random lowercase letters.
 */
export declare function randomLowers(amount: number): string[];
/**
 * Returns `amount` random uppercase letters.
 * @param amount How many random uppercase letters to return.
 * @returns An array of random uppercase letters.
 */
export declare function randomUppers(amount: number): string[];
/**
 * Returns `amount` random letters.
 * @param amount How many random letters to return.
 * @returns An array of random letters.
 */
export declare function randomLetters(amount: number): string[];
/**
 * Generates a random date between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @returns A `Date` object representing a random date between `minDate` and `maxDate`.
 */
export declare function randomDate(minDate: Date, maxDate: Date): Date;
/**
 * Generates `amount` random dates between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @param amount The amount of dates to generate.
 * @returns An array of `Date` objects representing some random dates between `minDate` and `maxDate`.
 */
export declare function randomDates(minDate: Date, maxDate: Date, amount: number): Date[];
