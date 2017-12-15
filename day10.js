
function assembleArray(length) {
  return Array.from({ length }, (_, i) => i);
}

function turnStepsStringIntoArray(steps) {
  return steps.split(',');
}

function splitArrayIntoTwoParts(array, breakPoint) {
  const part1 = array.slice(0, breakPoint);
  const part2 = array.slice(breakPoint);
  return [part1, part2];
}

function getNewCurrentPosition(currentPosition, size, steps) {
  return (currentPosition + steps) % size;
}

function shiftArrayLeft(array, count) {
  // Just because the other return path provides a shallow copy of the array
  if (count === 0) {
    return [...array];
  }
  const returner = [];
  for (let x = 0; x < array.length; x += 1) {
    returner[x] = array[(x + count) % array.length];
  }
  return returner;
}

function shiftArrayRight(array, count) {
  // Just because the other return path provides a shallow copy of the array
  if (count === 0) {
    return [...array];
  }
  const returner = [];
  for (let x = 0; x < array.length; x += 1) {
    returner[(x + count) % array.length] = array[x];
  }
  return returner;
}

function processStep({ currentPosition, array }, length, step) {
  const shiftedArray = shiftArrayLeft(array, currentPosition);
  const [part1, part2] = splitArrayIntoTwoParts(shiftedArray, length);
  const reshiftedArray = shiftArrayRight([...part1.reverse(), ...part2], currentPosition);
  return {
    array: reshiftedArray,
    currentPosition: getNewCurrentPosition(currentPosition, reshiftedArray.length, +length + +step),
  };
}


function main(size, stepsString) {
  const array = assembleArray(size);
  const steps = turnStepsStringIntoArray(stepsString);
  const endResult = steps.reduce(processStep, { array, currentPosition: 0 });
  return endResult.array;
}

module.exports = main;
