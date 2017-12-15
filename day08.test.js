const day8 = require('./day08');

const input =
`b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

test('the above register has results in b:0, a:1, c:-10', () => {
  expect(day8(input)).toEqual({ b: 0, a: 1, c: -10 });
});
