import Money from "./Currencies/Money"
import Bank from "./Bank"

interface Expression {
    reduce(bank: Bank, to: string): Money
    plus(addend: Expression): Expression
    times(multiplier: number): Expression
}

export default Expression