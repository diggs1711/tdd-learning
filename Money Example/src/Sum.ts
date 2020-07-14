import Money from "./Currencies/Money"
import Expression from "./Expression"
import Bank from "./Bank"

export default class Sum implements Expression {
    augend: Expression
    addend: Expression

    constructor (aug: Expression, add: Expression) {
        this.addend = add
        this.augend = aug
    }

    plus(addend: Expression): Expression {
        return new Sum(this, addend)
    }

    times(multiplier: number) {
        return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
    }

    reduce(bank: Bank, to: string): Money {
        const amount = this.addend.reduce(bank, to).getAmount() + this.augend.reduce(bank, to).getAmount()
        return new Money(amount, to)
    }
}