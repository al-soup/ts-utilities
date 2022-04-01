import { asyncFilter, sleep } from '../src';

describe('asyncFilter', () => {
  it('should filter an array async', async () => {
    const arr = [68, 69, 70];
    const fn = async (value: number) => {
      await sleep(100);
      return value >= 69;
    };
    expect(await asyncFilter(arr, fn)).toEqual([69, 70]);
  });
});
