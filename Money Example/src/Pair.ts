export default class Pair {
    from: string
    to: string
    name = '0'

    constructor (from: string, to: string) {
        this.from = from
        this.to = to
    }

    equals(object: Object) {
        const pair = object as Pair
        return this.from == pair.from && this.to == pair.to
    }

    toString() {
        return "0"
    }

    hashCode() {
        return 0
    }
}