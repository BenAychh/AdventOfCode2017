const divisor = 2147483647;

function generatorA(previousValue) {
  return (previousValue * 16807) % divisor;
}

function generatorB(previousValue) {
  return (previousValue * 48271) % divisor;
}

function main(aStart, bStart, ticks) {
  let aTemp = aStart;
  let bTemp = bStart;
  let count = 0;
  for (let i = 0; i < ticks; i += 1) {
    aTemp = generatorA(aTemp);
    const aBin = aTemp.toString(2);
    const a16 = aBin.substr(aBin.length - 16);
    bTemp = generatorB(bTemp);
    const bBin = bTemp.toString(2);
    const b16 = bBin.substr(bBin.length - 16);
    if (a16 === b16) {
      count += 1;
    }
  }
  return count;
}

module.exports = main;
