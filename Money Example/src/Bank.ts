import Expression from "./Expression"
import Money from "./Currencies/Money"
import Pair from './Pair'

export default class Bank {

    private rates: Map<string, number> = new Map()

    reduce(source: Expression, to: string): Money {
        return source.reduce(this, to)
    }

    addRate(from: string, to: string, rate: number) {
        const p = new Pair(from, to)
        this.rates.set(p.toString(), rate)
    }

    rate(from: string, to: string) {
        if (from == to) {
            return 1
        }

        const p = new Pair(from, to)
        const rate = this.rates.get(p.toString()) as number
        return rate
    }
}