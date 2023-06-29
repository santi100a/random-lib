# Santi's Random Number Library

[![Build Status](https://github.com/santi100a/random-lib/actions/workflows/ci.yml/badge.svg)](https://github.com/santi100a/random-lib/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/random-lib)](https://npmjs.org/package/@santi100/random-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/random-lib.svg)](https://github.com/santi100a/random-lib)
[![License](https://img.shields.io/github/license/santi100a/random-lib.svg)](https://github.com/santi100a/random-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/random-lib)](https://bundlephobia.com/package/@santi100/random-lib@latest)

**WARNING: This library doesn't generate cryptographically safe random numbers, due to its reliance on `Math.random()`. This library is designed to be portable across the browser and Node.js, to the expense of security.**

There's no warranty, and be aware there might be bugs in my code. Pull requests and issues are welcome!

## API

- `function random(max: number, min: number = 0): number;`
  Generate a random integer between `min` (0 by default) and `max`.
  |Name | Type | Description | Optional? |
  |------|----------|-----------------------------------------|-----------|
  |`max` | `number` | The maximum value. | No |
  |`min?`| `number` | The minimum value. Defaults to 0. | Yes |

  Returns a pseudo-random integer between `min` and `max`.

- `function randomFloat(max: number, min: number = 0): number;`
  Generate a random floating-point number between `min` (0 by default) and `max`.
  Generate a random integer between `min` (0 by default) and `max`.
  |Name | Type | Description | Optional? | Default |
  |------|----------|-----------------------------------------|-----------|---------|
  |`max` | `number` | The maximum value. | No | _N/A_ |
  |`min?`| `number` | The minimum value. Defaults to 0. | Yes | 0 |

  Returns a pseudo-random integer between `min` and `max`.

- `function randomFromArray<T = unknown>(array: T[]): T;`
  Returns a random item of `array`.
  | Name | Type | Description | Optional? | Default |
  |---------|--------------|-----------------------------------------|-----------|-----------|
  | `array` | `number` | The maximum value. | No | _N/A_ |
  | `T` | _type param_ | The minimum value. Defaults to 0. | Yes | `unknown` |

- `function randomIntegers(amount?: number, opts?: RandomArraysOptions): number[];`
  Returns an array with `amount` random integers.
  | Name | Type | Description | Optional? | Default |
  |---------------|-----------------------|-----------------------------------------|-------------|-----------|
  | `amount` | `number` | The amount of random integers to fill the array with. | Yes | 4 |
  | `opts` | `RandomArraysOptions` |The shape of the options passed to `randomIntegers` and `randomFloats`. | Yes | `{}` |
  | `opts.max?` | `number` | The maximum value. | Yes | 300 |
  | `opts.min?` | `number` | The minimum value. | Yes | 0 |

- `function randomFloats(amount?: number, opts?: RandomArraysOptions): number[];`
  Returns an array with `amount` random floating-point numbers.
  | Name | Type | Description | Optional? | Default |
  |---------------|-----------------------|-----------------------------------------|-------------|-----------|
  | `amount` | `number` | The amount of random floating-point numbers to fill the array with. | Yes | 4 |
  | `opts` | `RandomArraysOptions` |The shape of the options passed to `randomIntegers` and `randomFloats`. | Yes | `{}` |
  | `opts.max?` | `number` | The maximum value. | Yes | 300 |
  | `opts.min?` | `number` | The minimum value. | Yes | 0 |
- `function randomLower(): string;`
  Returns a random lowercase letter.
- `function randomUpper(): string;`
  Returns a random uppercase letter.

- `function randomLetter(): string;`
  Returns a random letter.

- `function randomLowers(amount: number): string[];`
  Returns `amount` random lowercase letters.

  | Name     | Type     | Description                                  | Optional? | Default |
  | -------- | -------- | -------------------------------------------- | --------- | ------- |
  | `amount` | `number` | How many random lowercase letters to return. | No        | _N/A_   |

- `function randomUppers(amount: number): string[];`
  Returns `amount` random uppercase letters.
  | Name | Type | Description | Optional? | Default |
  |---------------|-----------------------|-----------------------------------------|-------------|-----------|
  | `amount` | `number` | How many random uppercase letters to return. | No | _N/A_ |
- `function randomLetters(amount: number): string[];`
  Returns `amount` random letters.
  | Name | Type | Description | Optional? | Default |
  |---------------|-----------------------|-----------------------------------------|-------------|-----------|
  | `amount` | `number` | How many random letters to return. | No | _N/A_ |
- `function randomDate(minDate: Date, maxDate: Date): Date;`
  Generates a random date between `minDate` and `maxDate`.
  | Name | Type | Description | Optional? | Default |
  |---------------|-----------------------|-----------------------------------------|-------------|-----------|
  | `minDate` | `Date` | The minimum date to generate a random date from. | No | _N/A_ |
  | `maxDate` | `Date` | The maximum date to generate a random date from. | No | _N/A_ |
- `function randomDates(minDate: Date, maxDate: Date, amount: number): Date[];`

  Generates `amount` random dates between `minDate` and `maxDate`.

  | Name      | Type     | Description                                      | Optional? | Default |
  | --------- | -------- | ------------------------------------------------ | --------- | ------- |
  | `minDate` | `Date`   | The minimum date to generate a random date from. | No        | _N/A_   |
  | `maxDate` | `Date`   | The maximum date to generate a random date from. | No        | _N/A_   |
  | `amount`  | `number` | The amount of dates to generate.                 | No        | _N/A_   |

- `function randomBoolean(): boolean;` **NEW! (since 1.1.5)**

  Generates a random boolean value.

- `function randomHexColor(): string;` **NEW! (since 1.1.5)**

  Generates a random hex colorcode.

- `function randomHexColor(shorthand: boolean): string;` **NEW! (since 1.1.5)**

  Generates a random hex colorcode.

  | Name | Type | Description | Optional? | Default |
  |------|------|-------------|-----------|---------|
  |`shorthand` | `boolean` | Whether or not use a 3-character code instead of a 6-character one. | No | _N/A_ |

- `function randomPhrase(): string;` **NEW! (since 1.1.5)**
  Generate a random 6-word phrase.

  **Keep in mind these phrases have NO GRAMATICAL sense and are generated from a list of random words.**

- `function randomPhrase(wordCount: number): string;` **NEW! (since 1.1.5)**
  
  Generate a random phrase with `wordCount` words.

  **Keep in mind these phrases have NO GRAMATICAL sense and are generated from a list of random words.**

  | Name | Type | Description | Optional? | Default |
  |------|------|-------------|-----------|---------|
  |`wordCount` | `number` | The amount of words to use in the phrase. | No | _N/A_ |

- `function randomUUID(): string;` **NEW! (since 1.1.5)**

  Generates a pseudo-random UUID v4.

## Usage

```typescript
import {
 random,
 randomFromArray,
 randomIntegers,
 randomFloats,
} from '@santi100/random-lib'; // ESM
const {
 random,
 randomFromArray,
 randomIntegers,
 randomFloats,
} = require('@santi100/random-lib'); // CJS

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
