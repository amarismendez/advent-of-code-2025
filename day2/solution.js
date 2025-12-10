// DAY 2: https://adventofcode.com/2025/day/2

// we have ranges of IDs
// what makes an ID invalid is if it is the same number twice
// we can check this by taking the left and right (find a midpoint and check both sides)
// ex: 450450 => 450 | 450 = invalid

// for the invalid IDs, we need to get the sum

import { readFileSync } from 'fs';

const data = readFileSync('./input.txt', 'utf-8'); // reading the file as one big string
const ranges = data.split(','); // use the comma as the delimiter to split into array of strings

let invalidIdSum = 0;

ranges.forEach((range) => {
    range = range.split('-');
    let lowerLimit = range[0];
    let upperLimit = range[1];

    for ( let i = Number(lowerLimit); i <= Number(upperLimit); i++ ) {
        // find the midpoint
        let midpoint = String(i).length / 2;

        // split the string into first and second half
        let firstHalf = String(i).slice(0, midpoint);
        let secondHalf = String(i).slice(midpoint);

        if (firstHalf === secondHalf) {
            // this means it is invalid
            invalidIdSum = invalidIdSum + i;
        }
    }
})

console.log(invalidIdSum);