function jumpStringToArray(jumpsString) {
  return jumpsString.split('\n').map(n => +n);
}

/* eslint-disable no-param-reassign */
// I like to be as function as the next guy but
// recreating this array every time isn't worth the cycles
function doMove(array, position) {
  const originalValue = array[position];
  array[position] += 1;
  return position + originalValue;
}

function main(jumps) {
  const array = jumpStringToArray(jumps);
  let position = 0;
  let count = 0;
  while (position < array.length) {
    position = doMove(array, position);
    count += 1;
  }
  return count;
}

module.exports = main;
