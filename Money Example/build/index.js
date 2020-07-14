"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dollar_1 = __importDefault(require("./src/Dollar"));
var five = new Dollar_1.default(5);
five.times(2);
console.log(five.amount);
