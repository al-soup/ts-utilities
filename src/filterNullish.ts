import { filter, Observable, OperatorFunction, pipe, UnaryFunction } from "rxjs";

/**
 * Filters null and undefined values while indicating to TypeScript that these vales are no longer possible.
 */
export function filterNullish<T>(): UnaryFunction<Observable<T | null | undefined>, Observable<T>> {
  return pipe(filter((x) => x !== null && x !== undefined) as OperatorFunction<T | null | undefined, T>);
}
