/**
 * Returns a pseudo-random integer between min and max.
 * @param {number} max The maximum value.
 * @param {number?} min The minimum value (0 by default).
 * @returns {number} A pseudo-random integer between min and max.
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
export declare function randomFromArray<T = unknown>(array: T[]): T;
/**
 * @since 1.1.2
 * Returns `amount` random items from `array`.
 * @param array The array from which you want to pick random items.
 * @param amount The amount of items to pick.
 * @returns An array of random items from the given array.
 */
export declare function randomFromArray<T = unknown>(array: T[], amount: number): T[];
/**
 * The shape of the options passed to `randomIntegers` and `randomFloats`.
 * @since 1.1.1
 */
interface RandomArraysOptions {
    max?: number;
    min?: number;
}
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
 * @returns An array of random integers.
 */
export declare function randomFloats(amount?: number, opts?: RandomArraysOptions): number[];
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
 * @returns An array of random lowercase letters.
 */
export declare function randomLowers(amount: number): string[];
/**
 * Returns `amount` random uppercase letters.
 * @returns An array of random uppercase letters.
 */
export declare function randomUppers(amount: number): string[];
/**
 * Returns `amount` random letters.
 * @returns An array of random letters.
 */
export declare function randomLetters(amount: number): string[];
export {};
