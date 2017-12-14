const input = require('./day13.input');

function isAtZero(tickCount, depth) {
    if(depth === undefined) {
        return false;
    }
    if (tickCount === 0) {
        return true;
    }
    const cycle = (depth - 1) * 2;
    return tickCount % cycle === 0;
}

function assembleDepthMap(layers) {
    return layers.split('\n').reduce((object, layer) => {
        const [key, value] = layer.split(': ');
        object[key] = +value;
        return object;
    }, {});

}

function main(layers) {
    const depthMap = assembleDepthMap(layers);
    console.log(depthMap);
    const severity = Reflect.ownKeys(depthMap).reduce((sum, layer) => {
        return isAtZero(+layer, +depthMap[layer]) ? +sum + (+layer * +depthMap[layer]) : +sum
    });
    return severity;
}

module.exports = main;

console.log(main(input));