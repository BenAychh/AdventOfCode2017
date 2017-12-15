const knotHash = require('./day10-2');

function arrayTo127() {
  return Array.from({ length: 128 }, (_, i) => i);
}

function convertHexStringToBits(string) {
  return string.split('')
    .map(c => parseInt(c, 16).toString(2))
    .join('');
}

function count(string) {
  return string
    .split('')
    .reduce((sum, n) => +sum + +n);
}

function main(input) {
  return arrayTo127()
    .map(i => `${input}-${i}`)
    .map(knotHash)
    .map(convertHexStringToBits)
    .map(count)
    .reduce((sum, n) => sum + n);
}

module.exports = main;
