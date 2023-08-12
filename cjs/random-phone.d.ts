/**
 * Generates a 10-digit random phone number of the form `+xx xxx xxxxxxx`, where `x` is a digit.
 *
 * @param countryCode The code of the country to which the number would belong to.
 * Must be between 1 and 999.
 */
declare function randomPhone(countryCode: number): string;
/**
 * Generates a random phone number of the form `+xx xxx x...`, where `x` is a digit.
 *
 * @param countryCode The code of the country to which the number would belong to.
 * Must be between 1 and 999.
 * @param digitCount The amount of digits the phone number must have beside the country
 * code. All digits beyond that count will be added to the `x...` block.
 */
declare function randomPhone(countryCode: number, digitCount: number): string;
export = randomPhone;
