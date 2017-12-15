function isAtZero(tickCount, depth) {
  if (depth === undefined) {
    return false;
  }
  if (tickCount === 0) {
    return true;
  }
  const cycle = (depth - 1) * 2;
  return tickCount % cycle === 0;
}

/* eslint-disable no-param-reassign */
function assembleDepthMap(layers) {
  return layers.split('\n').reduce((object, layer) => {
    const [key, value] = layer.split(': ');
    object[key] = +value;
    return object;
  }, {});
}

function main(layers) {
  const depthMap = assembleDepthMap(layers);
  const severity =
    Reflect.ownKeys(depthMap)
      .reduce((sum, layer) => {
        if (isAtZero(+layer, +depthMap[layer])) {
          return +sum + (+layer * +depthMap[layer]);
        }
        return +sum;
      });
  return severity;
}

module.exports = main;
