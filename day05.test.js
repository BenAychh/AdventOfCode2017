const day5 = require('./day05');

test('0\n3\n0\n1\n-3 reaches the exit in 5 jumps', () => {
  expect(day5('0\n3\n0\n1\n-3')).toBe(5);
});