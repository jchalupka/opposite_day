/**
 * A test to run opposite.js
 * 
 * Author: Jordan Chalupka
 */

const fs = require('fs');
const opposite = require('./opposite');

// read in the input file
const sampleText = fs.readFileSync('./input.txt', 'utf8');

// Generate the opposite text
opposite(sampleText);
