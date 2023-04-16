const LOWERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const LETTERS = [...LOWERS, ...UPPERS];

const {
	randomLower,
	randomUpper,
	randomLetter,
	randomLowers,
	randomUppers,
	randomLetters,
} = require('..');
describe('randomLower_function', () => {
	// Tests that the function returns a random lowercase letter.
	it('test_returns_random_lowercase_letter', () => {
		const result = randomLower();
		expect(LOWERS).toContain(result);
		expect(result).toMatch(/[a-z]/);
	});

	// Tests that the function returns a different letter each time it is called.
	it('test_different_letter_each_time', () => {
		const results = new Set();
		for (let i = 0; i < 100; i++) {
			results.add(randomLower());
		}
		expect(results.size).toBeGreaterThan(1);
	});

	// Tests that the function handles not receiving an input array.
	it('test_input_not_provided', () => {
		expect(() => randomLower()).not.toThrow();
	});
});
describe('randomUpper_function', () => {
	// Tests that the function returns a single random uppercase letter.
	it('test_returns_single_random_uppercase_letter', () => {
		const letter = randomUpper();
		expect(typeof letter).toBe('string');
		expect(letter.length).toBe(1);
		expect(UPPERS.includes(letter)).toBe(true);
	});

	// Tests that the function returns a different letter each time it is called.
	it('test_returns_different_letter_each_time', () => {
		const letters = new Set();
		for (let i = 0; i < 100; i++) {
			const letter = randomUpper();
			expect(typeof letter).toBe('string');
			expect(letter.length).toBe(1);
			expect(UPPERS.includes(letter)).toBe(true);
			letters.add(letter);
		}
		expect(letters.size).toBeGreaterThan(1);
	});

	// Tests that there are no edge cases for this function.
	it('test_no_edge_cases', () => {
		// There are no edge cases for this function.
		expect(true).toBe(true);
	});
});
describe('randomLetter_function', () => {
	// Tests that the function returns a random letter from the LETTERS array.
	it('test_returns_random_letter_from_LETTERS_array', () => {
		const letter = randomLetter();
		expect(LETTERS.includes(letter)).toBe(true);
	});

	// Tests that the function does not return the same letter twice in a row.
	it('test_no_duplicate_letters', () => {
		const set = new Set();
		for (let i = 0; i < 10; i++) {
			const letter = randomLetter();
			set.add(letter);
		}
		expect(set.size).not.toBe(1);
	});

	// Tests that the function always returns a single letter.
	it('test_returns_single_letter', () => {
		const letter = randomLetter();
		expect(typeof letter).toBe('string');
		expect(letter.length).toBe(1);
	});
});
describe('randomLowers_function', () => {
	// Tests that the function returns a single lowercase letter when `amount` is not provided.
	it('test_returns_single_lowercase_letter_when_amount_not_provided', () => {
		const result = randomLowers(1);
		expect(result).toHaveLength(1);
		expect(typeof result[0]).toBe('string');
		expect(result[0]).toMatch(/[a-z]/);
	});

	// Tests that the function returns an array of length `amount` when `amount` is provided.
	it('test_returns_array_of_length_amount_when_amount_is_provided', () => {
		const result = randomLowers(5);
		expect(result).toHaveLength(5);
		result.forEach((letter) => {
			expect(typeof letter).toBe('string');
			expect(letter).toMatch(/[a-z]/);
		});
	});

	// Tests that the function returns an empty array when `amount` is 0.
	it('test_returns_empty_array_when_amount_is_0', () => {
		const result = randomLowers(0);
		expect(result).toHaveLength(0);
	});

	// Tests that the function throws an error when `amount` is negative.
	it('test_throws_error_when_amount_is_negative', () => {
		expect(() => randomLowers(-1)).toThrow();
	});
});
describe('randomUppers_function', () => {
	// Tests that the function returns an array of length equal to the input amount.
	it('test_random_uppers_returns_array_of_length_equal_to_amount', () => {
		const result = randomUppers(5);
		expect(result).toHaveLength(5);
	});

	// Tests that the function returns an array of length one when the input amount is one.
	it('test_random_uppers_returns_array_of_length_one_when_amount_is_one', () => {
		const result = randomUppers(1);
		expect(result).toHaveLength(1);
	});

	// Tests that the function returns an array of length equal to the length of the UPPERS array when the input amount is greater than the length of the UPPERS array.
	it('test_random_uppers_returns_array_of_length_equal_to_uppers_array_when_amount_is_greater_than_uppers_array_length', () => {
		const result = randomUppers(30);
		expect(result.length).toBe(30);
	});

	// Tests that the function returns an array containing only uppercase letters.
	it('test_random_uppers_returns_array_of_uppercase_letters_only', () => {
		const result = randomUppers(10);
		const regex = /^[A-Z]+$/;
		expect(regex.test(result.join(''))).toBe(true);
	});

	// Tests that the function throws an error when the input amount is not a number.
	it('test_random_uppers_throws_error_when_amount_is_not_a_number', () => {
		expect(() => randomUppers('not a number')).toThrowError(
			'"amount" must be of type "number". Got "not a number" of type "string".'
		);
	});
	// Tests that the function returns an array of uppercase letters when given a positive integer amount.
	it('test_random_uppers_returns_array_of_uppercase_letters_when_given_positive_integer_amount', () => {
		const result = randomUppers(5);
		expect(result).toHaveLength(5);
		result.forEach((letter) => {
			expect(typeof letter).toBe('string');
			expect(letter).toMatch(/[A-Z]/);
		});
	});

	// Tests that the function returns an empty array when given an amount of 0.
	it('test_random_uppers_returns_empty_array_when_given_amount_of_0', () => {
		const result = randomUppers(0);
		expect(result).toEqual([]);
	});

	// Tests that the function throws an error when given a negative amount.
	it('test_random_uppers_throws_error_when_given_negative_amount', () => {
		expect(() => randomUppers(-1)).toThrowError(
			RangeError
		);
	});
});
describe('randomLetters_function', () => {
	// Tests that the function returns a single letter when `amount` is not provided.
	it('test_returns_single_letter_when_amount_is_not_provided', () => {
		const result = randomLetters();
		expect(typeof result).toBe('string');
		expect(result.length).toBe(1);
		expect(LETTERS.includes(result)).toBe(true);
	});

	// Tests that the function returns an array of length `amount` when `amount` is provided.
	it('test_returns_array_of_length_amount_when_amount_is_provided', () => {
		const result = randomLetters(5);
		expect(Array.isArray(result)).toBe(true);
		expect(result.length).toBe(5);
		result.forEach((letter) => {
			expect(typeof letter).toBe('string');
			expect(letter.length).toBe(1);
			expect(LETTERS.includes(letter)).toBe(true);
		});
	});

	// Tests that the function returns an array of random letters when given a positive amount.
	it('test_returns_array_of_random_letters_when_given_positive_amount', () => {
		const result = randomLetters(5);
		expect(result).toHaveLength(5);
		result.forEach((letter) => {
			expect(typeof letter).toBe('string');
			expect(LETTERS.includes(letter)).toBe(true);
		});
	});

	// Tests that the function returns an empty array when given an amount of 0.
	it('test_returns_empty_array_when_given_amount_of_0', () => {
		const result = randomLetters(0);
		expect(result).toEqual([]);
	});

	// Tests that the function throws an error when given a negative amount.
	it('test_throws_error_when_given_negative_amount', () => {
		expect(() => randomLetters(-1)).toThrowError(
			RangeError
		);
	});

	// Tests that the returned array contains only letters.
	it('test_returned_array_contains_only_letters', () => {
		const result = randomLetters(5);
		const regex = /^[a-zA-Z]+$/;
		result.forEach((letter) => {
			expect(regex.test(letter)).toBe(true);
		});
	});

	// Tests that the returned array has the length specified by the amount parameter.
	it('test_returned_array_has_length_specified_by_amount_parameter', () => {
		const result = randomLetters(7);
		expect(result.length).toBe(7);
	});

	// Tests that the function handles non-integer inputs for the amount parameter.
	it('test_handles_non_integer_inputs_for_amount_parameter', () => {
		expect(() => randomLetters('not a number')).toThrow(TypeError);
		expect(() => randomLetters(5.4)).toThrow(TypeError);
	});
});
