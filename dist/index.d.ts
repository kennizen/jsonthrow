type Result<T extends unknown, E extends Error> = [T, null] | [null, E];
declare function stringify(...args: Parameters<JSON["stringify"]>): Result<string, Error>;
declare function parse<T extends unknown>(...args: Parameters<JSON["parse"]>): Result<T, Error>;
export declare const jsonthrow: {
    readonly stringify: typeof stringify;
    readonly parse: typeof parse;
};
export {};
