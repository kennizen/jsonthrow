"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonthrow = void 0;
function stringify(...args) {
    try {
        const res = JSON.stringify(...args);
        return [res, null];
    }
    catch (error) {
        return [null, error];
    }
}
function parse(...args) {
    try {
        const res = JSON.parse(...args);
        return [res, null];
    }
    catch (error) {
        return [null, error];
    }
}
exports.jsonthrow = {
    stringify,
    parse,
};
