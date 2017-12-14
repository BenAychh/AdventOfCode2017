const day11 = require('./day11');

test('ne,ne,ne is 3 steps away.', () => {
    expect(day11('ne,ne,ne')).toBe(3);
});

test('ne,ne,sw,sw is 0 steps away (back where you started).', () => {
    expect(day11('ne,ne,sw,sw')).toBe(0);
});

test('ne,ne,s,s is 2 steps away (se,se).', () => {
    expect(day11('ne,ne,s,s')).toBe(2);
})

test('se,sw,se,sw,sw is 3 steps away (s,s,sw).', () => {
    expect(day11('se,sw,se,sw,sw')).toBe(3);
});
