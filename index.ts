import { Result, result } from "./hof/result";

function stringify(...args: Parameters<JSON["stringify"]>) {
  return result(JSON.stringify, ...args);
}

function parse<T extends unknown>(...args: Parameters<JSON["parse"]>) {
  return result(JSON.parse, ...args) as Result<T, Error>;
}

export const jsonthrow = {
  stringify,
  parse,
};
