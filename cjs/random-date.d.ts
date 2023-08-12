/**
 * Generates a random date between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @returns A `Date` object representing a random date between `minDate` and `maxDate`.
 */
declare function randomDate(minDate: Date, maxDate: Date): Date;
declare namespace randomDate {
    var randomDate: typeof import("./random-date");
}
export = randomDate;
