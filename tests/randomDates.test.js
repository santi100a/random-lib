describe('randomDate and randomDates test suite', () => {
    const { randomDates, randomDate } = require('..');
    
	describe('randomDates_function', () => {
		// Tests that the function generates the correct amount of random dates.
		it('test_random_dates_generates_correct_amount_of_dates', () => {
			const minDate = new Date(2021, 0, 1);
			const maxDate = new Date(2021, 11, 31);
			const amount = 5;
			const result = randomDates(minDate, maxDate, amount);
			expect(result.length).toBe(amount);
		});

		// Tests that the generated dates are within the given range.
		it('test_random_dates_within_range', () => {
			const minDate = new Date(2021, 0, 1);
			const maxDate = new Date(2021, 11, 31);
			const amount = 5;
			const result = randomDates(minDate, maxDate, amount);
			for (const date of result) {
				expect(date.getTime()).toBeGreaterThanOrEqual(minDate.getTime());
				expect(date.getTime()).toBeLessThanOrEqual(maxDate.getTime());
			}
		});
	});
	describe('randomDate_function', () => {
		// Generates a random date between two valid dates.
		it('test_happy_path', () => {
			const minDate = new Date('2021-01-01');
			const maxDate = new Date('2021-12-31');
			const randomDat = randomDate(minDate, maxDate);
			expect(randomDat).toBeInstanceOf(Date);
			expect(randomDat.getTime()).toBeGreaterThanOrEqual(minDate.getTime());
			expect(randomDat.getTime()).toBeLessThanOrEqual(maxDate.getTime());
		});

		// Generates a random date when minDate is after maxDate.
		it('test_ccc', () => {
			const minDate = new Date('2021-12-31');
			const maxDate = new Date('2021-01-01');
			expect(() => randomDate(minDate, maxDate)).toThrow(RangeError);
		});

		// The generated random date is between minDate and maxDate.
		it('test_date_range', () => {
			const minDate = new Date('2021-01-01');
			const maxDate = new Date('2021-12-31');
			const randomDateObj = randomDate(minDate, maxDate);
			expect(randomDateObj.getTime()).toBeGreaterThanOrEqual(minDate.getTime());
			expect(randomDateObj.getTime()).toBeLessThanOrEqual(maxDate.getTime());
		});

		// The generated random date is a valid Date object.
		it('test_valid_date', () => {
			const minDate = new Date('2021-01-01');
			const maxDate = new Date('2021-12-31');
			const randomDateObj = randomDate(minDate, maxDate);
			expect(randomDateObj).toBeInstanceOf(Date);
		});

		// Considers time zone differences between minDate and maxDate.
		it('test_time_zone', () => {
			const minDate = new Date('2021-01-01T00:00:00Z');
			const maxDate = new Date('2021-12-31T23:59:59Z');
			const randomDateObj = randomDate(minDate, maxDate);
			expect(randomDateObj.getTimezoneOffset()).toEqual(
				minDate.getTimezoneOffset()
			);
		});
	});
});
