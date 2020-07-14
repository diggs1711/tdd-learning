"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dollar = /** @class */ (function () {
    function Dollar(amount) {
        this.amount = amount;
    }
    Dollar.prototype.times = function (multilpier) {
        this.amount = this.amount * multilpier;
    };
    return Dollar;
}());
exports.default = Dollar;
