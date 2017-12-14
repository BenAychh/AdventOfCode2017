
function assembleArray(length) {
    return Array.apply(null, { length }).map(Number.call, Number)
}

function turnStepsStringIntoArray(steps) {
    return steps.split(',')
}

function splitArrayIntoTwoParts(array, breakPoint) {
    const part1 = array.slice(0, breakPoint);
    const part2 = array.slice(breakPoint);
    return [part1, part2]
}

function getNewCurrentPosition(currentPosition, size, steps) {
    return (currentPosition + steps) % size;
}

function shiftArrayLeft(array, count) {
    // Just because the other one provides a new array
    if (count === 0) {
        return [...array];
    }
    const returner = [];
    for (let x = 0; x < array.length; x++) {
        returner[x] = array[(x + count) % array.length]
    }
    return returner;
}

function shiftArrayRight(array, count) {
    // Just because the other one provides a new array
    if (count === 0) {
        return [...array];
    }
    const returner = [];
    for (let x = 0; x < array.length; x++) {
        returner[(x + count) % array.length] = array[x]
    }
    return returner;
}

function processStep(dataObject, length, step) {
    const shiftedArray = shiftArrayLeft(dataObject.array, dataObject.currentPosition);
    const totalForwardMovement = +length + +step;
    const [part1, part2] = splitArrayIntoTwoParts(shiftedArray, length);
    const array = shiftArrayRight([...part1.reverse(), ...part2], dataObject.currentPosition)
    return {
        array,
        currentPosition: getNewCurrentPosition(dataObject.currentPosition, array.length, +length + +step)
    };
}


function main(size, stepsString) {
    const array = assembleArray(size)
    const steps = turnStepsStringIntoArray(stepsString);
    const endResult = steps.reduce(processStep, { array, currentPosition: 0 });
    return endResult.array[0] * endResult.array[1];
}

module.exports = main;