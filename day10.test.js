const day10 = require('./day10');

describe.only('day10', () => {
  test('a list with size 5 with inputs [3] returns 2', () => {
    const hash = day10(5, '3');
    expect(hash[0] * hash[1]).toEqual(2);
  });

  test('a list with a size 5 with inputs [3, 4] returns 12', () => {
    const hash = day10(5, '3,4');
    expect(hash[0] * hash[1]).toEqual(12);
  });

  test('a list with a size 5 and inputs [3, 4, 1] returns 12', () => {
    const hash = day10(5, '3,4,1');
    expect(hash[0] * hash[1]).toEqual(12);
  });

  test('a list with size 5 with inputs [3, 4, 1, 5] returns 12', () => {
    const hash = day10(5, '3,4,1,5');
    expect(hash[0] * hash[1]).toEqual(12);
  });
});
