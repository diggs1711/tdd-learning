import Money from '../src/Currencies/Money'
import Bank from '../src/Bank'
import Sum from '../src/Sum'
import Expression from '../src/Expression'

describe('test dollar multiplication', () => {
    test("test multiples", () => {
        const five = Money.dollar(5)
        // expect(five.times(2).equals(Money.dollar(10))).toBeTruthy()
        // expect(five.times(3).equals(Money.dollar(15))).toBeTruthy()
    })

    test("simple addition", () => {
        const five = Money.dollar(5)
        const result = five.plus(five)
        const sum = result as Sum;
        const bank = new Bank()
        const reduced = bank.reduce(sum, 'USD')
        expect(reduced.equals(Money.dollar(10))).toBeTruthy()
    })

    test("sum times", () => {
        const fiveBucks = Money.dollar(5)
        const tenFrancs = Money.franc(10)
        const bank = new Bank()
        bank.addRate("CHF", "USD", 2)
        const sum: Expression = new Sum(fiveBucks, tenFrancs).times(2)
        const result = bank.reduce(sum, "USD")
        expect(Money.dollar(20).equals(result)).toBeTruthy()
    })

    test("reduce sum", () => {
        const sum = new Sum(Money.dollar(3), Money.dollar(4))
        const bank = new Bank()
        const result = bank.reduce(sum, 'USD')
        expect(Money.dollar(7).equals(result)).toBeTruthy()
    })

    test("identity rate", () => {
        const bank = new Bank()
        expect(bank.rate("USD", "USD")).toBe(1)
    })

    test("mixed addition", () => {
        const fiveBucks: Expression = Money.dollar(5)
        const tenFrancs: Expression = Money.franc(10)
        const bank = new Bank()
        bank.addRate("CHF", "USD", 2)
        const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD")
        expect(result.equals(Money.dollar(10))).toBeTruthy()
    })

    test("sum plus money", () => {
        const fiveBucks: Expression = Money.dollar(5)
        const tenFrancs: Expression = Money.franc(10)
        const bank = new Bank()
        bank.addRate("CHF", "USD", 2)
        const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks)
        const result = bank.reduce(sum, "USD")
        expect(Money.dollar(15).equals(result)).toBeTruthy()
    })

    test("reduce money", () => {
        const bank = new Bank()
        const result = bank.reduce(Money.dollar(1), "USD")
        expect(result.equals(Money.dollar(1))).toBeTruthy()
    })

    test('reduce money different currency', () => {
        const bank = new Bank()
        bank.addRate("CHF", "USD", 2)
        const result = bank.reduce(Money.franc(2), "USD")
        expect(result.equals(Money.dollar(1))).toBeTruthy()
    })

    test("test equality", () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
        expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy()

    })
    test("currencies", () => {
        expect("USD").toBe(Money.dollar(1).getCurrency())
        expect("CHF").toBe(Money.franc(1).getCurrency())
    })
})