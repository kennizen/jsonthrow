"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
function result(cb, ...args) {
    try {
        const res = cb(...args);
        return [res, null];
    }
    catch (error) {
        return [null, error];
    }
}
exports.result = result;
