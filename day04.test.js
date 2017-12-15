const day4 = require('./day04');

test('aa bb cc dd ee is a valid password', () => {
  expect(day4('aa bb cc dd ee')).toBeTruthy();
});

test('aa bb cc dd aa is not a valid password', () => {
  expect(day4('aa bb cc dd aa')).toBeFalsy();
});

test('aa bb cc dd aaa is not a valid password', () => {
  expect(day4('aa bb cc dd aaa')).toBeTruthy();
});
