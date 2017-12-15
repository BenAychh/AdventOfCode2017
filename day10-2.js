const pinchAndTwist = require('./day10');

function convertStringToAscii(string) {
  return string.split('').map(char => char.charCodeAt(0))
}

function appendStandardLengthSuffix(arrayOfLengths) {
  const standard = [17, 31, 73, 47, 23];
  return [...arrayOfLengths, ...standard];
}

function assembleNCopiesOfLength(arrayOfLengths, n) {
  const returner = [];
  // Flipped back and forth between destructing 
  for (let x = 0; x < arrayOfLengths.length * n; x++) {
    returner[x] = arrayOfLengths[x % arrayOfLengths.length];
  }
  return returner;
}

function main(string) {
  const ascii = convertStringToAscii(string)
  const withStandardLength = appendStandardLengthSuffix(ascii);


}

module.exports = main;