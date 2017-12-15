function getNumberToBeAdded(a, b) {
  if (a === b) {
    return +a;
  }
  return 0;
}

function main(text) {
  const initial = getNumberToBeAdded(text[0], text[text.length - 1]);

  return text.split('').reduce((sum, number, index) => {
    const numberToBeAdded = getNumberToBeAdded(number, text[index - 1]);
    return sum + numberToBeAdded;
  }, initial);
}

module.exports = main;
