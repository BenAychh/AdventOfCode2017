function keepLog() {
  const log = {};
  return function logger(word) {
    if (log[word]) {
      return false;
    }
    log[word] = true;
    return true;
  };
}

function main(password) {
  return password.split(' ')
    .every(keepLog());
}

module.exports = main;
