describe('randomUUID', () => {
	const { randomUUID } = require('../cjs/random-uuid.js');

	test('the UUID is valid', () => {
		const uuidV4Regex =
			/^[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}$/i;

		const { randomUUID: randomCryptoUUID } = require('node:crypto');
		const nodeUUID = randomCryptoUUID();
		const uuid = randomUUID();
		expect(nodeUUID).toMatch(uuidV4Regex);
		expect(uuid).toMatch(uuidV4Regex);
	});
});
