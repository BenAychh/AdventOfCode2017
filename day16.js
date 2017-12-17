function generateDataStore(input) {
  const returner = {};
  returner.size = input.length;
  returner.letterKey = input.split('').reduce((object, letter, i) => {
    object[letter] = i; // eslint-disable-line no-param-reassign
    return object;
  }, {});
  returner.positionKey = input.split('').reduce((object, letter, i) => {
    object[i] = letter; // eslint-disable-line no-param-reassign
    return object;
  }, {});
  return returner;
}

function wrapAdd(max, numberToBeAdded) {
  return function add(position) {
    return (position + numberToBeAdded) % max;
  };
}

function spin(dataStore, step) {
  const count = step.substring(1);
  const add = wrapAdd(dataStore.size, +count);
  Reflect.ownKeys(dataStore.letterKey)
    .forEach((letter) => {
      const newPosition = add(+dataStore.letterKey[letter]);
      dataStore.letterKey[letter] = newPosition; // eslint-disable-line no-param-reassign
      dataStore.positionKey[newPosition] = letter; // eslint-disable-line no-param-reassign
    });
}

/* eslint-disable no-param-reassign */
function doASwap(dataStore, letter1, letter2, position1, position2) {
  dataStore.letterKey[letter1] = position2;
  dataStore.letterKey[letter2] = position1;
  dataStore.positionKey[position1] = letter2;
  dataStore.positionKey[position2] = letter1;
}
/* eslint-enable no-param-reassign */

function exchange(dataStore, step) {
  const [position1, position2] = step.substring(1).split('/');
  const letter1 = dataStore.positionKey[position1];
  const letter2 = dataStore.positionKey[position2];
  doASwap(dataStore, letter1, letter2, position1, position2);
}

function partner(dataStore, step) {
  const [letter1, letter2] = step.substring(1).split('/');
  const position1 = dataStore.letterKey[letter1];
  const position2 = dataStore.letterKey[letter2];
  doASwap(dataStore, letter1, letter2, position1, position2);
}

function sortStep(dataStore) {
  return function sorter(step) {
    const firstLetter = step[0];
    switch (firstLetter) {
      case 's': return spin(dataStore, step);
      case 'x': return exchange(dataStore, step);
      case 'p': return partner(dataStore, step);
      default: throw Error('unprocessable step');
    }
  };
}

function getOrder(dataStore) {
  return Reflect.ownKeys(dataStore.positionKey)
    .sort() // no guarantee that javascript will return the keys in the right order
    .map(position => dataStore.positionKey[position])
    .join('');
}

function main(steps, input = 'abcdefghijklmnop') {
  const dataStore = generateDataStore(input);
  console.log(dataStore);
  steps.split(',').forEach(sortStep(dataStore));
  return getOrder(dataStore);
}

module.exports = main;
