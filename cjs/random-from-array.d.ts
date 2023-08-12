import { AtLeastOneElement } from './core';
/**
 * Returns a random item from `array`.
 * @param array The array from which you want to pick a random item.
 * @returns A random item from the given array.
 */
declare function randomFromArray<T = unknown>(array: AtLeastOneElement<T>): T;
/**
 *
 * Returns `amount` random items from `array`.
 * @param array The array from which you want to pick random items.
 * @param amount The amount of items to pick.
 * @returns An array of random items from the given array.
 * @since 1.1.2
 */
declare function randomFromArray<T = unknown>(array: AtLeastOneElement<T>, amount: number): T[];
declare namespace randomFromArray {
    var randomFromArray: typeof import("./random-from-array");
}
export = randomFromArray;
