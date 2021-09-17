const { increment } = require('./implementation')

describe('Given smoke test of jest:', () => {
    test('When 42 + 1 then equals 43', () => {
        expect(42 + 1).toBe(43)
    })
})

describe('Given increment:', () => {
    test('When 42 then returns 43', () => {
        expect(increment(42)).toBe(43)
    })
})
