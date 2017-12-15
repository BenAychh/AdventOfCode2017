function getLines(input) {
  return input.split('\n');
}

function getCells(line) {
  return line.split(/\s/g);
}

function getMinAndMax(cells) {
  let min = +cells[0];
  let max = +cells[0];
  cells.forEach((cell) => {
    if (+cell < min) {
      min = +cell;
    }
    if (+cell > max) {
      max = +cell;
    }
  });
  return [min, max];
}

function getCheckSum([min, max]) {
  return max - min;
}

function main(table) {
  const result = getLines(table)
    .map(getCells)
    .map(getMinAndMax)
    .map(getCheckSum)
    .reduce((sum, checkSum) => sum + checkSum);
  return result;
}

module.exports = main;
