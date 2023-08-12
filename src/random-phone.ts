import { randomIntegers } from './random-integers';
import assertInteger = require('@santi100/assertion-lib/cjs/integer');
import assertPositive = require('@santi100/assertion-lib/cjs/positive');
import assertRange = require('@santi100/assertion-lib/cjs/range');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');

/**
 * Generates a 10-digit random phone number of the form `+xx xxx xxxxxxx`, where `x` is a digit.
 *
 * @param countryCode The code of the country to which the number would belong to.
 * Must be between 1 and 999.
 */
function randomPhone(countryCode: number): string;
/**
 * Generates a random phone number of the form `+xx xxx x...`, where `x` is a digit.
 *
 * @param countryCode The code of the country to which the number would belong to.
 * Must be between 1 and 999.
 * @param digitCount The amount of digits the phone number must have beside the country
 * code. If bigger than 10, the extra digits will be added to the `x...` block.
 */
function randomPhone(countryCode: number, digitCount: number): string;

/** Implementation */
function randomPhone(countryCode: number, digitCount = 10): string {
	assertTypeOf(countryCode, 'number', 'countryCode');
	assertInteger(countryCode, 'countryCode');
	assertPositive(countryCode, 'countryCode');
	assertRange(countryCode, 'countryCode', 1, 999);

	assertTypeOf(digitCount, 'number', 'digitCount');
	assertInteger(digitCount, 'digitCount');
	assertPositive(digitCount, 'digitCount');

	const digits = randomIntegers(digitCount, { max: 10, min: 0 });
	const phoneNumber = `+${countryCode} ${digits
		.join('')
		.substring(0, 3)} ${digits.join('').substring(3)}`;

	return phoneNumber;
}

export = randomPhone;
