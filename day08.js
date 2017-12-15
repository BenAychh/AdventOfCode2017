const compare = {
  '<': function lessThan(left, right) { return left < right; },
  '>': function lessThan(left, right) { return left > right; },
  '<=': function lessThan(left, right) { return left <= right; },
  '>=': function lessThan(left, right) { return left >= right; },
  '==': function lessThan(left, right) { return left === right; },
  '!=': function lessThan(left, right) { return left !== right; },
};


function splitRegisters(instructionStrings) {
  return instructionStrings.split('\n');
}

function assignToRegisterIfNeeded(register, key) {
  if (register[key] === undefined) {
    register[key] = 0; // eslint-disable-line no-param-reassign
  }
}

function splitInstructionString(instructionString) {
  return instructionString.split(' if ');
}

function processConditional(register, conditional) {
  const [key, comparator, value] = conditional.split(' ');
  assignToRegisterIfNeeded(register, key);
  return compare[comparator](register[key], +value);
}

function doInstruction(register, instruction) {
  const [key, operation, value] = instruction.split(' ');
  assignToRegisterIfNeeded(register, key);
  if (operation === 'inc') {
    register[key] += +value; // eslint-disable-line no-param-reassign
  } else if (operation === 'dec') {
    register[key] -= +value; // eslint-disable-line no-param-reassign
  }
}

function main(instructionStrings) {
  const register = {};
  const instructionsArray = splitRegisters(instructionStrings);
  instructionsArray
    .map(splitInstructionString)
    .forEach(([instruction, conditional]) => {
      if (processConditional(register, conditional)) {
        doInstruction(register, instruction);
      }
    });
  return register;
}

module.exports = main;
