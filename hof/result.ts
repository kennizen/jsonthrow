export type Result<T, E extends Error> = [T, null] | [null, E];

export function result<T extends (...args: any[]) => ReturnType<T>, E extends Error>(
  cb: T,
  ...args: Parameters<T>
): Result<ReturnType<T>, E> {
  try {
    const res = cb(...args);
    return [res, null];
  } catch (error) {
    return [null, error as E];
  }
}
