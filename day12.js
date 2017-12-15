
// Cleaner forEaches and stuff
/* eslint-disable no-param-reassign */
function getLines(data) {
  return data.split('\n');
}

function assignIn(object, source) {
  return function assigner(target) {
    if (object[source]) {
      object[source][target] = true;
    } else {
      object[source] = { [target]: true };
    }

    if (object[target]) {
      object[target][source] = true;
    } else {
      object[target] = { [source]: true };
    }
  };
}

function processPipe(object) {
  return function processor(line) {
    const split = line.split(' <-> ');
    const source = split[0];
    const targets = split[1] ? split[1].split(', ') : [];
    targets.forEach(assignIn(object, source));
  };
}

function assembleGroup(sourceObject, group, key) {
  const targets = Reflect.ownKeys(sourceObject[key]);
  targets.forEach((target) => {
    if (!group[target]) {
      group[target] = true;
      assembleGroup(sourceObject, group, target);
    }
  });
}

function main(pipes, key) {
  const result = {};
  const lines = getLines(pipes);
  lines.forEach(processPipe(result));
  const group = {};
  assembleGroup(result, group, key);
  return Reflect.ownKeys(group).length;
}

module.exports = main;
