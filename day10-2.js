const pinchAndTwist = require('./day10');

function convertStringToAscii(string) {
  return string.split('').map(char => char.charCodeAt(0));
}

function appendStandardLengthSuffix(arrayOfLengths) {
  const standard = [17, 31, 73, 47, 23];
  return [...arrayOfLengths, ...standard];
}

function breakArrayIntoParts(array, elementsPerPart) {
  const parts = Math.ceil(array.length / elementsPerPart);
  const numberOfParts = Array.from({ length: parts }, (_, i) => i);
  return numberOfParts.map((integer) => {
    const start = integer * elementsPerPart;
    const end = (integer + 1) * elementsPerPart;
    return array.slice(start, end);
  });
}

function spaseGroupsToDenseHash(array) {
  return array.map(group => group.reduce((xor, element) => xor ^ element));
}

function getPaddedHexValue(int) {
  const hex = int.toString(16);
  return hex.length === 2 ? hex : `0${hex}`;
}

function main(string) {
  const ascii = convertStringToAscii(string);
  const withStandardLength = appendStandardLengthSuffix(ascii);
  const setOfLengths = (`${withStandardLength.join(',')},`).repeat(64);
  const sparseHash = pinchAndTwist(256, setOfLengths);
  const groupedArray = breakArrayIntoParts(sparseHash, 16);
  const denseHash = spaseGroupsToDenseHash(groupedArray);
  return denseHash.map(getPaddedHexValue).join('');
}

module.exports = main;
