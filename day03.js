const spiralPositions = {
  bottom: 'BOTTOM',
  left: 'LEFT',
  top: 'TOP',
  right: 'RIGHT',
  corner: 'CORNER',
};

function isPerfectOddSquare(number) {
  const sqrt = Math.sqrt(number);
  return sqrt === Math.floor(sqrt) && sqrt % 2 === 1;
}

function getUpperBounds(number) {
  const squareRoot = Math.sqrt(number);
  let upperSquareRoot = Math.ceil(squareRoot);
  if (upperSquareRoot % 2 === 0) {
    upperSquareRoot += 1;
  }
  const upperBound = upperSquareRoot ** 2;

  return {
    upperSquareRoot,
    upperBound,
  };
}

function getPositionOnSpiral(number, { upperBound, upperSquareRoot }) {
  const step = upperSquareRoot - 1;
  switch (true) {
    case number === upperBound - step:
    case number === upperBound - (2 * step):
    case number === upperBound - (3 * step):
      return spiralPositions.corner;
    case number > upperBound - step:
      return spiralPositions.bottom;
    case number > upperBound - (2 * step):
      return spiralPositions.left;
    case number > upperBound - (3 * step):
      return spiralPositions.top;
    case number > upperBound - (4 * step):
      return spiralPositions.right;
    default:
      return 'SOMETHING WENT WRONG!!!!!';
  }
}

function getMiddleOfEdge({ upperBound, upperSquareRoot }, spiralPosition) {
  const step = upperSquareRoot - 1;
  switch (spiralPosition) {
    case spiralPositions.bottom:
      // return (upperBound + upperBound - step) / 2;
      return ((2 * upperBound) - step) / 2;
    case spiralPositions.left:
      // return (upperBound - step + upperBound - step - step) / 2;
      return ((2 * upperBound) - (3 * step)) / 2;
    case spiralPositions.top:
      // return (upperBound - step - step + upperBound - step - step - step) / 2;
      return ((2 * upperBound) - (5 * step)) / 2;
    case spiralPositions.right:
      return ((2 * upperBound) - (7 * step)) / 2;
    default:
      return 'EVERYTHING FAILED!';
  }
}

function getCountToMiddleOfEdge(number, upperBounds, spiralPosition) {
  const middleOfEdge = getMiddleOfEdge(upperBounds, spiralPosition);
  return Math.abs(middleOfEdge - number);
}

function main(number) {
  if (isPerfectOddSquare(number)) {
    return Math.sqrt(number) - 1;
  }
  const upperBounds = getUpperBounds(number);
  const spiralPosition = getPositionOnSpiral(number, upperBounds);
  if (spiralPosition === spiralPositions.corner) {
    return upperBounds.upperSquareRoot - 1;
  }
  const countToMiddleOfEdge = getCountToMiddleOfEdge(number, upperBounds, spiralPosition);
  const countFromMiddleOfEdgeToCenter = Math.floor(upperBounds.upperSquareRoot / 2);
  return countToMiddleOfEdge + countFromMiddleOfEdgeToCenter;
}

module.exports = main;
