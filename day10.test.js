const day10 = require('./day10');

describe.only('day10', () => {
    test('a list with size 5 with inputs [3] returns 2', () => {
        expect(day10(5, '3')).toEqual(2);
    })

    test('a list with a size 5 with inputs [3, 4] returns 12', () => {
        expect(day10(5, '3,4')).toEqual(12);
    })

    test('a list with a size 5 and inputs [3, 4, 1] returns 12', () => {
        expect(day10(5, '3,4,1')).toEqual(12);
    })
    
    test('a list with size 5 with inputs [3, 4, 1, 5] returns 12', () => {
        expect(day10(5, '3,4,1,5')).toEqual(12);
    })
})