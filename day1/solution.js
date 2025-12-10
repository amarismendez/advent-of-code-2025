// DAY 1: https://adventofcode.com/2025/day/1

import { readFileSync } from 'fs';

const data = readFileSync('./input.txt', 'utf-8'); // reading the file as one big string

let rotations = data.trim().split("\n"); // returns an array of strings
// rotations = rotations.map(line => Number(line.slice(1))); // maps it into an array of rotations
rotations = rotations.map(line => { // converting it into an array of arrays: [direction, value]
    const direction = line[0]; // character at 0 of the string
    const distance = Number(line.slice(1)); // everything from 1 to end of the string
    return [direction, distance];
})

// thinking through the logic: 
// the dial is from 0 to 99

// any result that is less than 0, to get the actual number you need add this to 100
// ex: 1 left 8 times is 1 - 8 = -7, 100 + -7 = 93

// any result greater than 99 will be that number minus 100 
// ex: 95 right 6 times is 95 + 6 = 101, 101 - 100 = 1

// if the spin is greater than 100, the actual amount moved is the remainder of that number / 100
// ex: 105 / 100 (remainder is 5)

let dialPosition = 50; // start at 0
let timesLandedOnZero = 0;

rotations.forEach((r) => {
    let spacesMoved = r[1] % 100;

    if (r[0] === "L") {
        // left => subtraction
        dialPosition = dialPosition - spacesMoved;

        // if we go below 0
        if (dialPosition < 0) {
            dialPosition = 100 + dialPosition;
        }
    } else {
        // right => addition
        dialPosition = dialPosition + spacesMoved;

        // if we go above 99
        if (dialPosition > 99) {
            dialPosition = dialPosition - 100;
        }
    }

    if (dialPosition === 0) {
        timesLandedOnZero++;
    }
});

console.log(timesLandedOnZero);