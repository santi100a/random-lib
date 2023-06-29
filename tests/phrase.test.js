describe('randomPhrase', () => {
	const { randomPhrase } = require('../cjs/random-phrase');
	const words = randomPhrase().split(' ');
	test('the phrase contains the correct amount of words', () => {
		const wordCount = words.length;
		expect(wordCount).toBe(6);
	});
	test('the phrase must contain words in the list', () => {
		const { WORDLIST } = require('../cjs/core');
		words.forEach((word) => expect(WORDLIST).toContain(word));
	});
});
