const day16 = require('./day16');

describe('day 16, starting with "abcde"', () => {
  test('s1 moves e to the beginning.', () => {
    expect(day16('s1', 'abcde')).toBe('eabcd');
  });

  test('s1,x3/4 moves e to the beginning and flips c and d', () => {
    expect(day16('s1,x3/4', 'abcde')).toBe('eabdc');
  });

  test('s1,x3/4,pe/b moves e to the beginning and flips c and d then flips e and b', () => {
    expect(day16('s1,x3/4,pe/b', 'abcde')).toBe('baedc');
  });
});
