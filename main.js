const fs = require('fs');
const opposite = require('./opposite');

// read in the input file
const sampleText = fs.readFileSync('./input.txt', 'utf8');
opposite(sampleText);
