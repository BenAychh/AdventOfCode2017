const day13 = require('./day13');


test('0: 3\n1: 2\n4: 4\n6: 4 has a severity of 24', () => {
    const input = 
`0: 3
1: 2
4: 4
6: 4`;
    expect(day13(input)).toBe(24);
});
