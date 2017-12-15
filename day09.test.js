const day9 = require('./day09');

test('{} should return a score of 1', () => {
  expect(day9('{}')).toBe(1);
});

test('{{{}}} should return a score of 6', () => {
  expect(day9('{{{}}}')).toBe(6);
});

test('{{},{}} should return a score of 5', () => {
  expect(day9('{{},{}}')).toBe(5);
});

test('{{{},{},{{}}}} should return a score of 16', () => {
  expect(day9('{{{},{},{{}}}}')).toBe(16);
});

test('{<{},{},{{}}>} should return a score of 1', () => {
  expect(day9('{<{},{},{{}}>}')).toBe(1);
});

test('{<a>,<a>,<a>,<a>} should return a score of 1', () => {
  expect(day9('{<a>,<a>,<a>,<a>}')).toBe(1);
});

test('{{<ab>},{<ab>},{<ab>},{<ab>}} should return a score of 9', () => {
  expect(day9('{{<ab>},{<ab>},{<ab>},{<ab>}}')).toBe(9);
});

test('{{<!!>},{<!!>},{<!!>},{<!!>}} should return a score of 9', () => {
  expect(day9('{{<!!>},{<!!>},{<!!>},{<!!>}}')).toBe(9);
});

test('{{<a!>},{<a!>},{<a!>},{<ab>}} should return a score of 3', () => {
  expect(day9('{{<a!>},{<a!>},{<a!>},{<ab>}}')).toBe(3);
});
