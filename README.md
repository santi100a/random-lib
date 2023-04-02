# Santi's Random Number Library
[![Build Status](https://github.com/santi100a/random-lib/actions/workflows/test.yml/badge.svg)](https://github.com/santi100a/random-lib/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/random-lib)](https://npmjs.org/package/@santi100/random-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/random-lib.svg)](https://github.com/santi100a/random-lib)
[![License](https://img.shields.io/github/license/santi100a/random-lib.svg)](https://github.com/santi100a/random-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/random-lib)](https://bundlephobia.com/package/@santi100/random-lib@latest)

**WARNING: This library doesn't generate cryptographically safe random numbers, due to its reliance on `Math.random()`. This library is designed to be portable across the browser and Node.js, to the expense of security.**

There's no warranty, and be aware there might be bugs in my code. Pull requests and issues are welcome!
## API

- `random(max: number, min: number = 0)`
Generate a random integer between `min` (0 by default) and `max`.
- `randomFloat(max: number, min: number = 0)`
Generate a random floating-point number between `min` (0 by default) and `max`.
- `randomFromArray<T = unknown>(array: T[]): T;`
Returns a random item of `array`.
- `function randomIntegers(amount?: number, opts?: RandomArraysOptions): number[];` 
Returns an array with `amount` random integers.
- `function randomFloats(amount?: number, opts?: RandomArraysOptions): number[];`
Returns an array with `amount` random floating-point numbers.
- `function randomLower(): string;`
Returns a random lowercase letter.
- `function randomUpper(): string;`
Returns a random uppercase letter.
- `function randomLetter(): string;`
Returns a random letter.
- `function randomLowers(): string;`
Returns `amount` random lowercase letters.
- `function randomUppers(): string;`
Returns `amount` random uppercase letters.
- `function randomLetters(): string;`
Returns `amount` random letters.
## Usage
```typescript
import { random, randomFromArray, randomIntegers, randomFloats } from '@santi100/random-lib'; // ESM
const { random, randomFromArray, randomIntegers, randomFloats } = require('@santi100/random-lib'); // CJS


// Generate a random integer between 1 and 10
const randomInt = random(10, 1);

// Generate a random floating-point number between -5.0 and 5.0
const randomFloat = randomFloat(-5.0, 5.0);

// Get a random item from an array
const fruits = ['apple', 'banana', 'orange'];
const randomFruit = randomFromArray(fruits);

// Get three random integers between 1 and 100
const randomIntegers = randomIntegers(3, { max: 100, min: 1 });

// Get four random floating-point numbers between -10.0 and 10.0
const randomFloats = randomFloats(4, { max: 10.0, min: -10.0 });

const myRandomLowercaseLetter = randomLower();
console.log(myRandomLowercaseLetter); // outputs a random lowercase letter (e.g. 'c')

const myRandomUppercaseLetter = randomUpper();
console.log(myRandomUppercaseLetter); // outputs a random uppercase letter (e.g. 'H')

const myRandomLetter = randomLetter();
console.log(myRandomLetter); // outputs a random letter (either lowercase or uppercase, e.g. 'J')

const myRandomLowercaseLetters = randomLowers(5);
console.log(myRandomLowercaseLetters); // outputs an array of 5 random lowercase letters (e.g. ['d', 's', 't', 'a', 'f'])

const myRandomUppercaseLetters = randomUppers(10);
console.log(myRandomUppercaseLetters); // outputs an array of 10 random uppercase letters (e.g. ['A', 'B', 'F', 'G', 'K', 'R', 'Q', 'Z', 'X', 'N'])

const myRandomLetters = randomLetters(3);
console.log(myRandomLetters); // outputs an array of 3 random letters (either lowercase or uppercase, e.g. ['e', 'W', 'T'])
```