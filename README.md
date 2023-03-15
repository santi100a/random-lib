# Santi's Random Number Library
[![Build Status](https://github.com/santi100a/random-lib/actions/workflows/test.yml/badge.svg)](https://github.com/santi100a/random-lib/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/random-lib)](https://npmjs.org/package/@santi100/random-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/random-lib.svg)](https://github.com/santi100a/random-lib)
[![License](https://img.shields.io/github/license/santi100a/random-lib.svg)](https://github.com/santi100a/random-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/random-lib)](https://bundlephobia.com/package/@santi100/random-lib@latest)

**WARNING: This library doesn't generate cryptographically safe random numbers, due to its reliability on `Math.random()`. This library is designed to be portable across the browser and Node.js, to the expense of security.**

There's no warranty, and be aware there might be bugs in my code. Pull requests and issues are welcome!
## API

### `random(max: number, min: number = 0)`
Generate a random integer between `min` (0 by default) and `max`.
### `randomFloat(max: number, min: number = 0)`
Generate a random floating-point number between `min` (0 by default) and `max`.
### `randomFromArray<T = unknown>(array: T[]): T;`
Returns a random item of `array`.
### `function randomIntegers(amount?: number, opts?: RandomArraysOptions): number[];` 
Returns an array with `amount` random integers.
### `function randomFloats(amount?: number, opts?: RandomArraysOptions): number[];`
Returns an array with `amount` random floating-point numbers.
## Usage
```typescript
import { random } from '@santi100/random-lib'; // ESM
const { random } = require('@santi100/random-lib'); // CJS