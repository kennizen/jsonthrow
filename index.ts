type Result<T extends unknown, E extends Error> = [T, null] | [null, E];

function stringify(
  ...args: Parameters<JSON["stringify"]>
): Result<string, Error> {
  try {
    const res = JSON.stringify(...args);
    return [res, null];
  } catch (error) {
    return [null, error as Error];
  }
}

function parse<T extends unknown>(
  ...args: Parameters<JSON["parse"]>
): Result<T, Error> {
  try {
    const res = JSON.parse(...args);
    return [res, null];
  } catch (error) {
    return [null, error as Error];
  }
}

export const jsonthrow = {
  stringify,
  parse,
} as const;
