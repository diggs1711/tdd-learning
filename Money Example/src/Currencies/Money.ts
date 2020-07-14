import Expression from "../Expression"
import Sum from "../Sum"
import Bank from "../Bank"

export default class Money implements Expression {
    protected amount: number
    protected currency: string

    constructor(amount: number, currency: string) {
        this.amount = amount
        this.currency = currency
    }

    getCurrency() {
        return this.currency
    }

    getAmount() {
        return this.amount
    }

    reduce(bank: Bank, to: string) {
        const rate = bank.rate(this.currency, to)
        return new Money(this.amount / rate, to)
    }

    static dollar(amount: number) {
        return new Money(amount, 'USD')
    }

    static franc(amount: number) {
        return new Money(amount, 'CHF')
    }

    plus(addend: Expression): Expression {
        return new Sum(this, addend)
    }

    times(multilpier: number): Expression {
        return new Money(this.amount * multilpier, this.currency)
    }

    toString() {
        return this.amount + " " + this.getCurrency()
    }

    equals(obj: Object) {
        const money = obj as Money;
        return money.getCurrency() == this.getCurrency() && this.amount == money.amount;
    }
}