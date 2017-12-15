const day15 = require('./day15');

test('starting with 65, 8921 should have 1 match after 5 ticks', () => {
  expect(day15(65, 8921, 5)).toBe(1);
});
