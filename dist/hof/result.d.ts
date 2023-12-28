export type Result<T, E extends Error> = [T, null] | [null, E];
export declare function result<T extends (...args: any[]) => ReturnType<T>, E extends Error>(cb: T, ...args: Parameters<T>): Result<ReturnType<T>, E>;
