# Changelog

## Version 1.1.1

- Added `randomIntegers` and `randomFloats`.

## Version 1.1.2

- Added the `amount` parameter to the `randomFromArray` function.

## Version 1.1.3

- Added `randomLower`, `randomUpper`, `randomLetter`, `randomLowers`, `randomUppers` and `randomLetters`.

## Version 1.1.4

- Fixed a bug in `randomFromArray` which would let floats through as an `amount`.
- Added `randomDate` and `randomDates`.
- Exported many internal constants and types.
- Improved documentation.

## Version 1.1.5

- Split the library into different files (under `cjs/`) to allow partial loading of required features.
- Added new randomizers: `randomBoolean`, `randomHexColor`, `randomPhrase` and `randomUUID`.
- Added a UMD build.
