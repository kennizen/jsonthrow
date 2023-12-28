import { Result } from "./hof/result";
declare function stringify(...args: Parameters<JSON["stringify"]>): Result<string, Error>;
declare function parse<T extends unknown>(...args: Parameters<JSON["parse"]>): Result<T, Error>;
export declare const jsonthrow: {
    stringify: typeof stringify;
    parse: typeof parse;
};
export {};
