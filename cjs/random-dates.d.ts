/**
 * Generates `amount` random dates between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @param amount The amount of dates to generate.
 * @returns An array of `Date` objects representing some random dates between `minDate` and `maxDate`.
 */
declare function randomDates(minDate: Date, maxDate: Date, amount: number): Date[];
declare namespace randomDates {
    var randomDate: typeof randomDates;
}
export = randomDates;
