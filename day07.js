function splitLine(line) {
  const [source, targets] = line.split(' -> ');
  const cleanSource = source.split(' (')[0];
  const cleanTargets = targets.split(', ');
  return [cleanSource, cleanTargets];
}

function generateSourceAndTargetMaps(data) {
  const sources = [];
  const targetMap = {};
  data
    .split('\n')
    .filter(line => line.includes(' -> '))
    .map(splitLine)
    .forEach(([source, targets]) => {
      sources.push(source);
      targets.forEach((target) => {
        targetMap[target] = source;
      });
    });
  return [sources, targetMap];
}

function main(input) {
  const [sources, targetMap] = generateSourceAndTargetMaps(input);
  let base = '';
  sources.every((source) => {
    if (!targetMap[source]) {
      base = source;
      return false;
    }
    return true;
  });
  return base;
}

module.exports = main;
