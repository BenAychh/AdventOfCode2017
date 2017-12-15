const day10 = require('./day10-2');

test('the empty string becomes a2582a3a0e66e6e86e3812dcb672a272', () => {
  expect(day10('')).toBe('a2582a3a0e66e6e86e3812dcb672a272');
});

test('"AoC 2017" becomes 33efeb34ea91902bb2f59c9920caa6cd', () => {
  expect(day10('AoC 2017')).toEqual('33efeb34ea91902bb2f59c9920caa6cd');
});

test('"1,2,3" becomes 3efbe78a8d82f29979031a4aa0b16a9d', () => {
  expect(day10('1,2,3')).toBe('3efbe78a8d82f29979031a4aa0b16a9d');
});

test('"1,2,4" becomes 63960835bcdc130f0b66d7ff4f6a5a8e', () => {
  expect(day10('1,2,4')).toBe('63960835bcdc130f0b66d7ff4f6a5a8e');
});
