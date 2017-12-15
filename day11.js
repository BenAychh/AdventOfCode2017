function getCountsFromSteps(steps) {
  const counts = {
    nw: 0,
    n: 0,
    ne: 0,
    se: 0,
    s: 0,
    sw: 0,
  };
  steps.split(',').forEach((step) => {
    counts[step] += 1;
    return counts;
  });
  return counts;
}

function cancelOut(countsObject, direction1, direction2) {
  const newCountsObject = Object.assign({}, countsObject);
  if (newCountsObject[direction1] >= newCountsObject[direction2]) {
    newCountsObject[direction1] -= newCountsObject[direction2];
    newCountsObject[direction2] = 0;
  } else {
    newCountsObject[direction2] -= newCountsObject[direction1];
    newCountsObject[direction1] = 0;
  }
  return newCountsObject;
}

function mergeDirections(countsObject, direction1, mergeTarget, direction2) {
  const newCountsObject = Object.assign({}, countsObject);
  const stepsToMerge = Math.min(newCountsObject[direction1], newCountsObject[direction2]);
  newCountsObject[direction1] -= stepsToMerge;
  newCountsObject[direction2] -= stepsToMerge;
  newCountsObject[mergeTarget] += stepsToMerge;
  return newCountsObject;
}

function getTotalSteps(countsObject) {
  return Reflect.ownKeys(countsObject)
    .map(key => countsObject[key])
    .reduce((sum, count) => sum + count);
}

function cancelAllPairsOut(countsObject) {
  let newCountsObject = cancelOut(countsObject, 'n', 's');
  newCountsObject = cancelOut(newCountsObject, 'ne', 'sw');
  return cancelOut(newCountsObject, 'nw', 'se');
}

function mergeAllDirections(countsObject) {
  let newCountsObject = mergeDirections(countsObject, 'nw', 'n', 'ne');
  newCountsObject = mergeDirections(newCountsObject, 'n', 'ne', 'se');
  newCountsObject = mergeDirections(newCountsObject, 'ne', 'se', 's');
  newCountsObject = mergeDirections(newCountsObject, 'se', 's', 'sw');
  return mergeDirections(newCountsObject, 's', 'sw', 'nw');
}

function main(steps) {
  const countsObject = getCountsFromSteps(steps);
  let newCountsObject = cancelAllPairsOut(countsObject);
  newCountsObject = mergeAllDirections(newCountsObject);
  return getTotalSteps(newCountsObject);
}

module.exports = main;
