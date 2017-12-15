function convertInputToArray(string) {
  return string.split(/\s/g).map(n => +n);
}

function getIndexOfLargestStack(array) {
  let max = array[0];
  let indexOfLargest = 0;
  for (let x = 1; x < array.length; x += 1) {
    if (array[x] > max) {
      max = [array[x]];
      indexOfLargest = x;
    }
  }
  return indexOfLargest;
}

/* eslint-disable no-param-reassign */
// Thought about just ignoring this rule in eslintrc but I like to be reminded when I am doing this
function distributeStack(array, indexOfStack) {
  const blocksToRedistribute = array[indexOfStack];
  array[indexOfStack] = 0;
  for (let x = 1; x < blocksToRedistribute + 1; x += 1) {
    array[(x + indexOfStack) % array.length] += 1;
  }
}

function isRepeat(record, pattern) {
  const local = {
    object: record,
  };
  return pattern.every((n) => {
    if (local.object[n]) {
      local.object = local.object[n];
      return true;
    }
    return false;
  });
}

function recordPattern(record, pattern) {
  pattern.reduce((object, n) => {
    if (!object[n]) {
      object[n] = {};
    }
    return object[n];
  }, record);
}

function main(input) {
  const inputAsArray = convertInputToArray(input);
  const record = {};
  let count = 0;
  while (!isRepeat(record, inputAsArray, count)) {
    count += 1;
    recordPattern(record, inputAsArray);
    const largestStackIndex = getIndexOfLargestStack(inputAsArray);
    distributeStack(inputAsArray, largestStackIndex);
  }
  if (count === 7) {
    return 'Hit 7, something is probably wrong';
  }
  return count;
}

module.exports = main;
