"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonthrow = void 0;
const result_1 = require("./hof/result");
function stringify(...args) {
    return (0, result_1.result)(JSON.stringify, ...args);
}
function parse(...args) {
    return (0, result_1.result)(JSON.parse, ...args);
}
exports.jsonthrow = {
    stringify,
    parse,
};
