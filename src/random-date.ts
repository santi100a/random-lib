import { assertInstanceOf } from '@santi100/assertion-lib';
import { random } from './random';

/**
 * Generates a random date between `minDate` and `maxDate`.
 *
 * @param minDate The minimum date to generate a random date from.
 * @param maxDate The maximum date to generate a random date from.
 * @returns A `Date` object representing a random date between `minDate` and `maxDate`.
 */
export function randomDate(minDate: Date, maxDate: Date) {
	assertInstanceOf(minDate, Date);
	assertInstanceOf(maxDate, Date);

	const randomTs = random(maxDate.getTime(), minDate.getTime());
	return new Date(randomTs);
}
