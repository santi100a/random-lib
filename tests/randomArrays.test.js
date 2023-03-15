describe('randomFloats and randomIntegers test suites', () => {
    const { randomFloats, randomIntegers } = require('../cjs');
    describe('error handling', () => {
        describe('randomIntegers', () => {
            test('throws a TypeError if amount is not a number', () => {
                expect(() => {
                    randomIntegers('not a number');
                }).toThrow(TypeError);
            });

            test('throws a RangeError if amount is negative', () => {
                expect(() => {
                    randomIntegers(-1);
                }).toThrow(RangeError);
            });

            test('throws a RangeError if amount is not an integer', () => {
                expect(() => {
                    randomIntegers(3.5);
                }).toThrow(RangeError);
            });

            test('throws a TypeError if opts.max is not a number', () => {
                expect(() => {
                    randomIntegers(4, { max: 'not a number' });
                }).toThrow(TypeError);
            });

            test('throws a TypeError if opts.min is not a number', () => {
                expect(() => {
                    randomIntegers(4, { min: 'not a number' });
                }).toThrow(TypeError);
            });
        });

        describe('randomFloats', () => {
            test('throws a TypeError if amount is not a number', () => {
                expect(() => {
                    randomFloats('not a number');
                }).toThrow(TypeError);
            });

            test('throws a RangeError if amount is negative', () => {
                expect(() => {
                    randomFloats(-1);
                }).toThrow(RangeError);
            });

            test('throws a RangeError if amount is not an integer', () => {
                expect(() => {
                    randomFloats(3.5);
                }).toThrow(RangeError);
            });

            test('throws a TypeError if opts.max is not a number', () => {
                expect(() => {
                    randomFloats(4, { max: 'not a number' });
                }).toThrow(TypeError);
            });

            test('throws a TypeError if opts.min is not a number', () => {
                expect(() => {
                    randomFloats(4, { min: 'not a number' });
                }).toThrow(TypeError);
            });
        });
    });
    describe('randomFloats', () => {
        test('it is a valid function', () => {
            expect(randomFloats).toBeInstanceOf(Function);
        });
        test('it can produce an output of the correct length', () => {
            expect(randomFloats().length).toBe(4);
            expect(randomFloats(7).length).toBe(7);
            expect(randomFloats(23).length).toBe(23);
            expect(randomFloats(49).length).toBe(49);
            expect(randomFloats(56).length).toBe(56);
        });
        test('it can produce an output of floats', () => {
            const array = randomFloats(300);
            for (const float of array) {
                expect(Number.isInteger(float)).toBeFalsy();
            }
        });
    });
    describe('randomIntegers', () => {
        test('it is a valid function', () => {
            expect(randomIntegers).toBeInstanceOf(Function);
        });
        test('it can produce an output of the correct length', () => {
            expect(randomIntegers().length).toBe(4);
            expect(randomIntegers(7).length).toBe(7);
            expect(randomIntegers(23).length).toBe(23);
            expect(randomIntegers(49).length).toBe(49);
            expect(randomIntegers(56).length).toBe(56);
        });
        test('it can produce an output of floats', () => {
            const array = randomIntegers(300);
            for (const float of array) {
                expect(Number.isInteger(float)).toBeTruthy();
            }
        });
    });
});