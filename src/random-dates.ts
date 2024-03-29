import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import randomIntegers = require('./random-integers');

/**
 * Generates `amount` random dates between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @param amount The amount of dates to generate.
 * @returns An array of `Date` objects representing some random dates between `minDate` and `maxDate`.
 */
function randomDates(minDate: Date, maxDate: Date, amount: number): Date[] {
	assertInstanceOf(minDate, Date);
	assertInstanceOf(maxDate, Date);

	const randomTs = randomIntegers(amount, {
		max: maxDate.getTime(),
		min: minDate.getTime(),
	});
	const dates: Date[] = [];
	for (const ts of randomTs) {
		dates.push(new Date(ts));
	}
	return dates;
}

randomDates.randomDate = randomDates;
Object?.defineProperty?.(randomDates, 'randomDates', { enumerable: false });
export = randomDates;
