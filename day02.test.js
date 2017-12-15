const day2 = require('./day02');

test('5 1 9 5\n7 5 3\n2 4 6 8 should give the number 18', () => {
  const input = '5 1 9 5\n7 5 3\n2 4 6 8';
  expect(day2(input)).toBe(18);
});
