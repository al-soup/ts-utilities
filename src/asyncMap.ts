/**
 * Map an array exactly like Array.prototype.map(), but async
 *
 * @param array the array which entries are mapped
 * @param mappingFn the function to transform each value
 * @returns a promise of the mapped array
 */
export const asyncMap = async <T, U>(
  array: T[],
  mappingFn: (value: T, index: number, array: T[]) => Promise<U>
): Promise<U[]> => Promise.all(array.map(mappingFn));
