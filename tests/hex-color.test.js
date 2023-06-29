describe('randomHexColor', () => {
	const { randomHexColor } = require('../cjs/random-hex-color');
	const hexColorPattern = /#([0-f]{3})|([0-f]{6})/i;
	test('the hex color is valid', () => {
		const longColor = randomHexColor();
		const shortColor = randomHexColor(true);
		expect(longColor).toMatch(hexColorPattern);
		expect(shortColor).toMatch(hexColorPattern);
	});
});
