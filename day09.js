const CONSTANTS = {
  groupOpen: '{',
  groupClose: '}',
  garbageOpen: '<',
  garbageClose: '>',
  escape: '!',
};

function stripNonEssentials(string) {
  let inGarbage = false;
  let previousChar = '';
  return string
    .split('!!')
    .join('')
    .split('')
    .reduce((array, char) => {
      if (!inGarbage && (char === CONSTANTS.groupOpen || char === CONSTANTS.groupClose)) {
        array.push(char);
        return array;
      }
      if (char === CONSTANTS.garbageOpen) {
        inGarbage = true;
      }
      if (char === CONSTANTS.garbageClose && previousChar !== CONSTANTS.escape) {
        inGarbage = false;
      }
      previousChar = char;
      return array;
    }, []);
}

function score(input) {
  let currentDepth = 0;
  let currentScore = 0;
  input
    .forEach((char) => {
      if (char === CONSTANTS.groupOpen) {
        currentDepth += 1;
        currentScore += currentDepth;
      } else if (char === CONSTANTS.groupClose) {
        currentDepth -= 1;
      }
    });
  return currentScore;
}

function main(input) {
  const clean = stripNonEssentials(input);
  return score(clean);
}

module.exports = main;
