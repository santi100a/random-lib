# Santi's Random Number Library
[![Build Status](https://github.com/santi100a/random-lib/actions/workflows/main.yml/badge.svg)](https://github.com/santi100a/random-lib/actions)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/random-lib.svg)](https://github.com/santi100a/santitools-python)
[![License](https://img.shields.io/github/license/santi100a/random-lib.svg)](https://github.com/santi100a/santitools-python)

**WARNING: This library doesn't generate cryptographically safe random numbers, due to its reliability on `Math.random()`. This library is designed to be portable across the browser and Node.js, to the expense of security.**

There's no warranty, and be aware there might be bugs in my code. Pull requests and issues are welcome!
## API

### `random(max: number, min: number = 0)`
Generate a random integer between `min` (0 by default) and `max`.
### `randomFloat(max: number, min: number = 0)`
Generate a random floating-point number between `min` (0 by default) and `max`.