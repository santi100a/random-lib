describe('randomPhone', () => {
	const randomPhone = require('../cjs/random-phone');
	describe('error handling', () => {
		test('invalid country codes', () => {
			expect(randomPhone).toThrow();
			expect(() => randomPhone(-1)).toThrow(/must be positive/);
			expect(() => randomPhone(3.5)).toThrow(/must be an integer/);
			expect(() => randomPhone('not a number')).toThrow(/must be of type/);
			expect(() => randomPhone(1_378)).toThrow(/must be smaller/);
		});
		test('invalid lengths', () => {
			expect(randomPhone).toThrow();
			expect(() => randomPhone(57, -1)).toThrow(/must be positive/);
			expect(() => randomPhone(1, 3.5)).toThrow(/must be an integer/);
			expect(() => randomPhone(43, 'not a number')).toThrow(/must be of type/);
		});
	}); 
	test('happy path: the generated number matches a regex', () => {
		const countryCode = 57;
		const phone = randomPhone(countryCode);
		expect(phone).toMatch(/\+\d{2} \d{3} \d{7}/);
	});
	test('happy path: the generated number matches a regex when specifying a length', () => {
		const countryCode = 59;
		const phone = randomPhone(countryCode, 13);
		expect(phone).toMatch(/\+\d{2} \d{3} \d{10}/);
	});
});