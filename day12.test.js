const day12 = require('./day12');

const test1 =
`0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`

test.only('group 0 has 6 programs in it', () => {
    expect(day12(test1, 0)).toBe(6)
});
