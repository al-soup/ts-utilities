import { asyncMap } from "./";

  /**
   * Filter an array exactly like Array.prototype.filter(), but async
   */
  export const asyncFilter = async <T>(
    array: T[],
    callbackFn: (value: T, index: number, array: T[]) => Promise<boolean>
  ): Promise<T[]> => {
    const filterMap = await asyncMap(array, callbackFn);
    return array.filter((value, index) => filterMap[index]);
  }
