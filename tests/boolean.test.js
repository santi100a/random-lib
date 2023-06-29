describe('randomBoolean', () => {
	const { randomBoolean } = require('../cjs/random-boolean');

	test('randomBoolean() produces a valid boolean', () => {
		const bool = randomBoolean();
		expect(typeof bool).toBe('boolean');
	});
});
