const day1 = require('./day01');

test('1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.', () => {
  expect(day1('1122')).toBe(3);
});

test('1111 produces 4 because each digit (all 1) matches the next.', () => {
  expect(day1('1111')).toBe(4);
});

test('1234 produces 0 because no digit matches the next.', () => {
  expect(day1('1234')).toBe(0);
});

test('91212129 produces 9 because the only digit that matches the next one is the last digit, 9.', () => {
  expect(day1('91212129')).toBe(9);
});
