const Multi = require("multiply")

descride('Multi', () => {
    describe("Simplify", () => {
        it("Take two numbers and find the lowest common denominator", () => {
            const N = 12
            const D = 32
            const common = 4

            const result = new Multi().simple(N,D)
            expect(result).toEqual(common)
        })
    })
})