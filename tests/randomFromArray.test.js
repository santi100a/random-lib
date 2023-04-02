describe('randomFromArray', () => {
	const { randomFromArray } = require('../cjs');
	describe('error handling', () => {
		test('throws an error if array parameter is not an array', () => {
			expect(() => randomFromArray('foo')).toThrow();
		});
		test('throws an error if the amount is not a number', () => {
			expect(() => randomFromArray([5, 8, 3], 'str')).toThrow(TypeError);
		});

		test('returns an item from the array if it is not empty', () => {
			const arr = [1, 2, 3, 4, 5];
			const result = randomFromArray(arr);
			const results = randomFromArray(arr, 5);
			expect(arr).toContain(result);

			for (const item of results) {
				expect(arr).toContain(item);
			}
		});

		test('throws an error if array parameter is an empty array', () => {
			expect(() => randomFromArray([])).toThrowError();
		});
	});
	test('it can produce an array if an amount is specified', () => {
		for (let i = 2; i < 300; i++) {
			expect(randomFromArray([6, 7, 3], i).length).toBe(i);
		}
	});
});
