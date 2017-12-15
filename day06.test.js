const day06 = require('./day06');

test('0 2 7 0 gets into an infinite loop after 5 turns', () => {
  expect(day06('0 2 7 0')).toBe(5);
});
