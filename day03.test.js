const day3 = require('./day03');

test('Data from square 1 is carried 0 steps, since it\'s at the access port.', () => {
  expect(day3(1)).toBe(0);
});

test('Data from square 12 is carried 3 steps, such as: down, left, left.', () => {
  expect(day3(12)).toBe(3);
});

test('Data from square 23 is carried only 2 steps: up twice.', () => {
  expect(day3(23)).toBe(2);
});

test('Data from square 1024 must be carried 31 steps.', () => {
  expect(day3(1024)).toBe(31);
});
