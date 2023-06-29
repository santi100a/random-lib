import { random } from './random';

function __map<T = unknown>(array: T[], cb: (i: T, idx: number) => unknown) {
	const m: unknown[] = [];
	for (let i = 0; i < array.length; i++) {
		m.push(cb(array[i], i));
	}
	return m;
}
/**
 * Generates a pseudo-random UUID v4.
 */
export function randomUUID() {
	const characters = 'abcdef0123456789';
	const sections = [8, 4, 4, 4, 12];

	const uuidSections = __map(sections, (section, index) => {
		let sectionString = '';
		for (let i = 0; i < section; i++) {
			if (index === 2 && i === 0) {
				// Ensure the first character in the 3rd section is '4'
				sectionString += '4';
			} else if (index === 3 && i === 0) {
				// Ensure the first character in the 4th section is either 8, 9, a, or b
				const randomIndex = random(4); // 0 to 3
				const validChars = '89ab';
				sectionString += validChars.charAt(randomIndex);
			} else {
				const randomIndex = Math.floor(Math.random() * characters.length);
				sectionString += characters.charAt(randomIndex);
			}
		}
		return sectionString;
	});

	return uuidSections.join('-');
}
