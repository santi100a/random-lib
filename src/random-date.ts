import assertInstanceOf = require('@santi100/assertion-lib/cjs/instance-of');
import random = require('./random');

/**
 * Generates a random date between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @returns A `Date` object representing a random date between `minDate` and `maxDate`.
 */
function randomDate(minDate: Date, maxDate: Date) {
	assertInstanceOf(minDate, Date);
	assertInstanceOf(maxDate, Date);

	const randomTs = random(maxDate.getTime(), minDate.getTime());
	return new Date(randomTs);
}

randomDate.randomDate = randomDate;
Object?.defineProperty?.(randomDate, 'randomDate', { enumerable: false });
export = randomDate;
